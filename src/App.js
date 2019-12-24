import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonToolbar, Button} from 'react-bootstrap';
import MainRace from './raceComponents/MainRace';
import MainCharacter from './characterComponents/MainCharacter';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      mode: "race"
    };
    this.setMode = this.setMode.bind(this);
  }

  setMode(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    let data;
    if (this.state.mode === "race") data = (<MainRace/>)
    else if (this.state.mode === "character") data = (<MainCharacter/>)
    return (
      <div className="App">
        <ButtonToolbar>
          <Button name="mode" value="race" onClick={this.setMode}>Race</Button>
          <Button name="mode" value="character" onClick={this.setMode}>Character</Button>
        </ButtonToolbar>
        <h1>React Test</h1>
        {data}
      </div>
    );
  }
}


export default App;