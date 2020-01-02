import React from "react";

interface IProps {
    race: any,
    handle: any
}

class SubRaceSelect extends React.Component<IProps, any> {

    render() {
        if (this.props.race == undefined) return null;
        if (this.props.race.subRaces == undefined) return null;
        if (this.props.race.subRaces.length == 0) return null;
        if (this.props.race.subRaces.length == 1) return null;
        return(
            <div>
                <label>Select subrace:</label>
                <select onChange={this.props.handle}>
                    {this.props.race.subRaces.map((subrace: any, key: any) => <option value={subrace.id}>{subrace.name}</option>)} 
                </select>
            </div>
        );
    }
}


export default SubRaceSelect;