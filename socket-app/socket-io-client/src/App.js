import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      pingMsg: '',
      endpoint: "http://127.0.0.1:4001"
    }
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint);
    this.pingServer = this.pingServer.bind(this);
    this.updatePing = this.updatePing.bind(this);
  }

  componentDidMount() {
    this.socket.on("FromAPI", data => this.setState({response: data}));
    this.socket.on("pongMsg", data=> this.setState({pongMsg: data}));
  }

  pingServer() {
    const { pingMsg } = this.state;
    this.socket.emit('pingMsg', pingMsg); 
  }

  updatePing(event) {
    this.setState({pingMsg: event.target.value});
    event.target.value = '';
  }

  render() {
    const { response, pongMsg } = this.state;
    return (
    <div style={{textAling: "center", margin: '2em'}}>
        {response ? <p>The temperature in Florence is : {response} &#8457;</p>: <p>Loading...</p>}
        <p>Response: {pongMsg}</p>
        <p>
          <input onBlur={this.updatePing} />
          <button onClick={this.pingServer}>Ping</button>
        </p>
    </div>)
  }
}

export default App;