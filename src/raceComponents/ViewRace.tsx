import * as React from "react";
import * as Constants from './../Constants';
import ObjectSelect from './../ObjectSelect';
import {Spinner} from "react-bootstrap";

interface IState {
    raceData: Array<any>,
    race: any,
    status: boolean,
    isEmpty: boolean
}

class ViewRace extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            race: 0,
            raceData: [],
            status: true,
            isEmpty: true
        }
        this.getData = this.getData.bind(this);
        this.onRaceSelect = this.onRaceSelect.bind(this);
    }

    onRaceSelect(event: {target: {value: number;};}) {
        let race: any = this.state.raceData.find((race) => race.id == event.target.value);
        this.setState({race: race});
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        let response = await fetch(Constants.RACE_URL);
        if(response.ok) {
            let data : Array<object> = await response.json();
            if (data.length == 0)
                this.setState({isEmpty: true});
            else {
                this.setState({raceData: data});
                this.setState({race: data[0]});
                this.setState({status: response.ok});
                this.setState({isEmpty: false});
            }
        }
        else {
            this.setState({status: false});
        }
    }

    render() {
        let data: any = (<br/>);
        let selRace: any = (<br/>);
        if (this.state.status) {
            data = (this.state.race.name);
        }
        else {
            data = (<div>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading</span>
                </Spinner>
            </div>);
        }
        if (!this.state.isEmpty && this.state.status && (this.state.raceData.length > 1)) {
            selRace = <ObjectSelect handle={this.onRaceSelect} data={this.state.raceData} />
        }
        return (
            <div>
                <h1>View Race</h1>
                <br/>
                {data} <br/>
                {selRace} <br/>
            </div>
        );
    }
}

export default ViewRace;