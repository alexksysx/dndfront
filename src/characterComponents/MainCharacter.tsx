import * as React from 'react';
import CreateCharacter from './CreateCharacter';
import ViewCharacter from './ViewCharacter';
import ChooseCharacterMode from "./ChooseCharacterMode";

interface IState {
    id: number,
    action: string
}

class MainCharacter extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state={
            action: "view",
            id: 0
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
                <ChooseCharacterMode set={this.setMode as any} />
                {data}
            </div>
        );
    }

}

export default MainCharacter;