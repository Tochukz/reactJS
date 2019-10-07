const path = require('path');
const express = require('express');


const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.resolve(__dirname, 'public')))

const port = 3000;
app.listen(port, () => console.log(`Server is running on ${port}`))