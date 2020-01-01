import * as React from 'react';
import CreateRace from './CreateRace';
import ViewRace from './ViewRace';
import ChooseRaceMode from './ChooseRaceMode';

interface IState {
    action: string,
    id: number
}

class MainRace extends React.Component<any, IState> {
    constructor(props :any) {
        super(props);
        this.state={
            action: "view",
            id: 0
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
                <ChooseRaceMode set={this.setMode as any} />
                {data}
            </div>
        );
    }

}

export default MainRace;