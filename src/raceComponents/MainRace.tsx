import * as React from 'react';
import CreateRace from './CreateRace';
import ViewRace from './ViewRace';
import ModeSelect from './../ModeSelect';

interface IState {
    action: string,
}

const modes: Array<string> = ["create", "view"];
const buttonNames: Array<string> = ["Create Race", "View Race"];

class MainRace extends React.Component<any, IState> {
    constructor(props :any) {
        super(props);
        this.state={
            action: "view",
        };
        this.setMode = this.setMode.bind(this);
    }

    setMode(event : {target : {name: any; value: any;};}) {
        this.setState({[event.target.name] :event.target.value} as Pick<IState, keyof IState>);
    }

    render() {
        let data;
        if (this.state.action === "view") 
            data  = (<ViewRace/>);
        if (this.state.action === "create") 
            data  = (<CreateRace/>);

        return(
            <div>
                <ModeSelect action="action" handle={this.setMode} modes={modes} names={buttonNames}/>
                {data}
            </div>
        );
    }

}

export default MainRace;