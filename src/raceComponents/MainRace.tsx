import * as React from 'react';
import CreateRace from './CreateRace';
import ViewRace from './ViewRace';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Button} from "react-bootstrap";

interface IState {
    action: string,
}

class MainRace extends React.Component<any, IState> {

    render() {
        return(
            <div>
                <Router>
                    <Link to="/race/create">
                        <Button>Create</Button>
                    </Link>
                    <Link to="/race/view">
                        <Button>View</Button>
                    </Link>
                    <Switch>
                        <Route path="/race/view" component={ViewRace}/>
                        <Route path="/race/create" component={CreateRace}/>
                        <Route path ="/race" component={ViewRace}/>
                    </Switch>
                </Router>
            </div>
        );
    }

}

export default MainRace;