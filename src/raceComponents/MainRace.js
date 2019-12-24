import React from 'react';
import CreateRace from './CreateRace';
import ViewRace from './ViewRace';
import ChooseRaceMode from './ChooseRaceMode';

class MainRace extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            action: "view",
            id: 0
        };
        this.setMode = this.setMode.bind(this);
    }

    setMode(event) {
        this.setState({[event.target.name] :event.target.value});
    }

    render() {
        let data;
        if (this.state.action === "view") 
            data  = (<ViewRace/>);
        if (this.state.action === "create") 
            data  = (<CreateRace/>);

        return(
            <div>
                <ChooseRaceMode set={this.setMode} />
                {data}
            </div>
        );
    }

}

export default MainRace;