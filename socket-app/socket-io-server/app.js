const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
require("dotenv").config();

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

const getApiAndEmit = async socket => {
    try {
        const res = await axios.get(`https://api.darksky.net/forecast/${process.env.API_KEY}/43.7695,11.2558`);
        console.log(`Temperature: ${res.data.currently.temperature}`)
        socket.emit("FromAPI", res.data.currently.temperature); 
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
}

let interval;
io.on("connection", socket => {
    console.log("New client connected");
     if (interval) {
         clearInterval(interval);
     }
     interval = setInterval(() => getApiAndEmit(socket), 10000);
     socket.on("disconnect", () => console.log("Client disconnected"));
     socket.on('pingMsg', msg => {
        console.log('ping', msg)
        const reverseMsg = msg.split("").reverse().join("");
        socket.emit('pongMsg', `- ${reverseMsg}`);
     });
});


server.listen(port, () => console.log(`Listening on port ${port}`));

