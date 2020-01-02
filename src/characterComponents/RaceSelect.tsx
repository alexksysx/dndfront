import React from "react";

interface IProps {
    raceData: any,
    handle: any;
}

class RaceSelect extends React.Component<IProps, any> {

    render() {
        return(
            <div>
                <label>Select race:</label>
                <select onChange={this.props.handle}>
                    {this.props.raceData.map((race: any, key: number) => <option key={race.id} value={race.id}>{race.name}</option>)}
                </select> <br/>
            </div>
        )
    }
}


export default RaceSelect;