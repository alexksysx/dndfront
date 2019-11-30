import React from 'react';
import CreateRace from './CreateRace';
import ViewRace from './ViewRace';
import ChooseRaceMode from './ChooseRaceMode';

class MainRace extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            action: "view"
        };
        this.setMode = this.setMode.bind(this);
    }

    setMode(event) {
        this.setState({[event.target.name] :event.target.value});
    }

    render() {
        let data;
        if (this.state.action === "view") data  = (
        <div>
            <ChooseRaceMode set={this.setMode} />
            <ViewRace url={this.props.url} />
        </div>);
        if (this.state.action === "create") data  = (
            <div>
                <ChooseRaceMode set={this.setMode} />
                <CreateRace url={this.props.url} />
            </div>);

        return(
            data
        );
    }

}

export default MainRace;