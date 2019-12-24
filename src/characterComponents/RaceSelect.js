import React from "react";

class RaceSelect extends React.Component {

    render() {
        return(
        <option name="race" value={this.props.race.id}>{this.props.race.name}</option>
        )
    }
}


export default RaceSelect;