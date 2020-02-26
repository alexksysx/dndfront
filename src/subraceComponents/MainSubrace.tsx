import * as React from 'react';
import ViewSubrace from './ViewSubrace';
import CreateSubrace from './CreateSubrace';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Button} from "react-bootstrap"

interface IState {
    action: string,
}

const modes: Array<string> = ["create", "view"];
const buttonNames: Array<string> = ["Create Subace", "View Subrace"];

class MainSubrace extends React.Component<any, IState> {

    render() {
        return(
            <div>
                <Router>
                    <Link to="/subrace/create">
                        <Button>Create</Button>
                    </Link>
                    <Link to="/subrace/view">
                        <Button>View</Button>
                    </Link>
                    <Switch>
                        <Route path="/subrace/create" component={CreateSubrace}/>
                        <Route path="/subrece/view" component={ViewSubrace}/>
                        <Route path="/subrace" component={ViewSubrace}/>
                    </Switch>
                </Router>
            </div>
        );
    }

}

export default MainSubrace;