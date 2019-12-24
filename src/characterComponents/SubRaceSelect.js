import React from "react";

class SubRaceSelect extends React.Component {

    render() {
        if (this.props.race == undefined) return null;
        if (this.props.race.subRaces == undefined) return null;
        if (this.props.race.subRaces.length == 0) return null;
        if (this.props.race.subRaces.length == 1) return null;
        return(
            <select onChange={this.props.handle}>
                {this.props.race.subRaces.map((subrace, key) => <option value={subrace.id}>{subrace.id}</option>)} 
            </select>
        );
    }
}


export default SubRaceSelect;