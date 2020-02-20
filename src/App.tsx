import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup} from 'react-bootstrap';
import MainRace from './raceComponents/MainRace';
import MainCharacter from './characterComponents/MainCharacter';
import MainSubrace from './subraceComponents/MainSubrace';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    // let data;
    // if (this.state.mode === "race") data = (<MainRace/>);
    // else if (this.state.mode === "character") data = (<MainCharacter/>);
    // else if (this.state.mode === "subrace") data = (<MainSubrace/>);
    return (
      <div className="App">
        <Router>
          <div>
            <Link to="/race">
              <Button>Race</Button>
            </Link>
            <Link to="/character">
              <Button>Character</Button>
            </Link>
            <Link to="/subrace">
              <Button>SubRace</Button>
            </Link>
            <h2>Hello React!</h2>
            <Switch>
              <Route exact path="/" component={MainRace}/>
              <Route path="/race" component={MainRace}/>
              <Route path="/character" component={MainCharacter}/>
              <Route path="/subrace" component={MainSubrace}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
