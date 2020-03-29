import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import ViewRace from './raceComponents/ViewRace';
import CreateRace from './raceComponents/CreateRace';
import ViewCharacter from './characterComponents/ViewCharacter';
import CreateCharacter from './characterComponents/CreateCharacter';
import ViewSubrace from './subraceComponents/ViewSubrace';
import CreateSubrace from './subraceComponents/CreateSubrace';
import ImageUpload from './utilComponent/ImageUpload';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

interface IState {
  token: string;
}


class App extends React.Component<any, IState> {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">D&D Project</Navbar.Brand>
            <Nav>
              <NavDropdown title="Race" id="basic-nav-drodown">
                <NavDropdown.Item>
                  <NavLink to="/race/view" style={{color: "black"}}>View</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/race/create" style={{color: "black"}}>Create</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Subrace" id="basic-nav-drodown">
                <NavDropdown.Item>
                  <NavLink to="/subrace/view" style={{color: "black"}}>View</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/subrace/create" style={{color: "black"}}>Create</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Character" id="basic-nav-drodown">
                <NavDropdown.Item>
                  <NavLink to="/character/view" style={{color: "black"}}>View</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/character/create" style={{color: "black"}}>Create</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
          <div>
            <h2>Hello React!</h2>
            <Switch>
              <Route exact path="/" component={ViewRace}/>
              <Route path="/race/view" component={ViewRace}/>
              <Route path="/race/create" component={CreateRace}/>
              <Route path="/character/view" component={ViewCharacter}/>
              <Route path="/character/create" component={CreateCharacter}/>
              <Route path="/subrace/view" component={ViewSubrace}/>
              <Route path="/subrace/create" component={CreateSubrace}/>
              <Route path="/image" component={ImageUpload}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
