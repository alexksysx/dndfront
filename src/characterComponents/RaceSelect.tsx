import React from "react";

interface IProps {
    race: any
}

class RaceSelect extends React.Component<IProps, any> {

    render() {
        return(
        <option value={this.props.race.id}>{this.props.race.name}</option>
        )
    }
}


export default RaceSelect;