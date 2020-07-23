import React, { Component } from "react";
import BasicForm from './pages/BasicForm'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
     
    }
  }

 

  render() {
    return (
      <div className="container pt-4">
        <div className="row">
          <div className="col-sm-4">
            <BasicForm />
          </div>        
        </div>
      </div>
    )
  }
}

export default App;