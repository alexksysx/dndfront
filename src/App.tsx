import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
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
  
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">D&D Project</Navbar.Brand>
            <Nav>
              <Link className="nav-link" to="/race">Race</Link>
              <Link className="nav-link" to="/character">Character</Link>
              <Link className="nav-link" to="/subrace">Subrace</Link>
            </Nav>
          </Navbar>
          <div>
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
