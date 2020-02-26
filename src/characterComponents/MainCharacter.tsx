import * as React from 'react';
import CreateCharacter from './CreateCharacter';
import ViewCharacter from './ViewCharacter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Button} from "react-bootstrap"


interface IState {
    action: string
}

const actions: Array<string> = ["create", "view"];
const buttonNames: Array<string> = ["Create Character", "View Character"];

class MainCharacter extends React.Component<any, IState> {

    render() {
        return(
            <div>
                <Router>
                    <Link to="/character/create">
                        <Button>Create</Button>
                    </Link>
                    <Link to="/character/view">
                        <Button>View</Button>
                    </Link>
                    <Switch>
                        <Route path="/character/create" component={CreateCharacter}/>
                        <Route path="/character/view" component={ViewCharacter}/>
                        <Route path="/character" component={ViewCharacter}/>
                    </Switch>
                </Router>               
            </div>
        );
    }

}

export default MainCharacter;