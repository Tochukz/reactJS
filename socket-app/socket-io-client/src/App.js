import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    const baseUrl = "https://api.ojlinks.tochukwu.xyz"; // "http://127.0.0.1:8084"
    this.state = {
      response: false,
      pingMsg: '',
      time: '',
      baseUri: baseUrl,
    }
    const { baseUri } = this.state;
    this.socket = socketIOClient(baseUri);
    this.pingServer = this.pingServer.bind(this);
    this.updatePing = this.updatePing.bind(this);

    this.inputRef = React.createRef();
  }

  componentDidMount() {    
    this.socket.on("FromAPI", data => { 
      const time = new Date().toTimeString().substr(0, 8);
      this.setState({response: data, time}) 
    });
    this.socket.on("pongMsg", data=> this.setState({pongMsg: data}));

    const { baseUri } = this.state;
    fetch(`${baseUri}/api/categories/1`)
        .then(response => response.json())
        .then(data => console.log('Data', data))
        .catch(err => console.error(err));
  }

  pingServer() {
    const { pingMsg } = this.state;
    this.socket.emit('pingMsg', pingMsg); 
    this.inputRef.current.value = '';
  }

  updatePing(event) {
    this.setState({pingMsg: event.target.value});
  }

  render() {
    const { response, pongMsg, time } = this.state;
    return (
    <div style={{textAling: "center", margin: '2em'}}>
        {response ? <p>The temperature in Florence is : {response} &#8457; at {time}</p>: <p>Loading...</p>}
        <p>Response: {pongMsg}</p>
        <p>
          <input onBlur={this.updatePing} ref={this.inputRef} />
          <button onClick={this.pingServer}>Ping</button>
        </p>
    </div>)
  }
}

export default App;