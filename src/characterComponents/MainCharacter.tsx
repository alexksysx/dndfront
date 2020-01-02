import * as React from 'react';
import CreateCharacter from './CreateCharacter';
import ViewCharacter from './ViewCharacter';
import ModeSelect from './../ModeSelect';

interface IState {
    action: string
}

const actions: Array<string> = ["create", "view"];
const buttonNames: Array<string> = ["Create Character", "View Character"];

class MainCharacter extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state={
            action: "view",
        };
        this.setMode = this.setMode.bind(this);
    }

    setMode(event: {target: {name: any; value: any;};}) {
        this.setState({[event.target.name] :event.target.value} as Pick<IState, keyof IState>);
    }

    render() {
        let data;
        if (this.state.action === "view") 
            data  = (<ViewCharacter />);
        if (this.state.action === "create") 
            data  = (<CreateCharacter />);

        return(
            <div>
                <ModeSelect action="action" handle={this.setMode} modes={actions} names={buttonNames}/>
                {data}
            </div>
        );
    }

}

export default MainCharacter;