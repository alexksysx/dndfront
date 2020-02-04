import * as React from 'react';
import ModeSelect from '../ModeSelect';
import ViewSubrace from './ViewSubrace';
import CreateSubrace from './CreateSubrace';

interface IState {
    action: string,
}

const modes: Array<string> = ["create", "view"];
const buttonNames: Array<string> = ["Create Subace", "View Subrace"];

class MainSubrace extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            action: "view",
        }
        this.setMode = this.setMode.bind(this);
    }

    setMode(event : {target : {name: any; value: any;};}) {
        this.setState({[event.target.name] :event.target.value} as Pick<IState, keyof IState>);
    }

    render() {
        let data = (<br/>);
        if (this.state.action === "create")
            data = (<CreateSubrace/>);
        if (this.state.action === "view")
            data = (<ViewSubrace/>);
        return(
            <div>
                <ModeSelect action="action" handle={this.setMode} names={buttonNames} modes={modes}/>
                {data}
            </div>
        );
    }

}

export default MainSubrace;