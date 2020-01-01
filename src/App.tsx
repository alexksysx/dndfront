import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonToolbar, Button} from 'react-bootstrap';
import MainRace from './raceComponents/MainRace';
import MainCharacter from './characterComponents/MainCharacter';

interface IState {
  mode: string;
}

class App extends React.Component<any, IState> {
  
  constructor(props: any) {
    super(props);
    this.state={
      mode: "race"
    };
    this.setMode = this.setMode.bind(this);
  }

  setMode(event: {target : {name: any; value: any;};}) : any {
    const newState = { [event.target.name]: event.target.value } as Pick<IState, keyof IState>;
    this.setState(newState);
  }

  render() {
    let data;
    if (this.state.mode === "race") data = (<MainRace/>)
    else if (this.state.mode === "character") data = (<MainCharacter/>)
    return (
      <div className="App">
        <ButtonToolbar>
          <Button name="mode" value="race" onClick={this.setMode as any}>Race</Button>
          <Button name="mode" value="character" onClick={this.setMode as any}>Character</Button>
        </ButtonToolbar>
        <h1>React Test</h1>
        {data}
      </div>
    );
  }
}


export default App;