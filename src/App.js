import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonToolbar, Button} from 'react-bootstrap';
import MainRace from './raceComponents/MainRace';

const URL = "http://alexksysx.me:8080/dndServerTest/";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      mode: ""
    };
    this.handleNav = this.handleNav.bind(this);
  }

  handleNav(event) {
    console.log("Push!")
  }

  render() {
    return (
      <div className="App">
        <ButtonToolbar>
          <Button onClick={this.handleNav}>TestButton</Button>
        </ButtonToolbar>
        <h1>React Test</h1>
        <MainRace 
          url={URL}
        />
      </div>
    );
  }
}


export default App;