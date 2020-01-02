import * as React from "react";
import * as Constants from "./../Constants";
import {postData} from './../fetchMethods';
import RaceSelect from "./RaceSelect";
import SubRaceSelect from './SubRaceSelect';

interface IState {
    name: string,
    race: number,
    raceData: Array<any>,
    subRace: number,
    raceStatus: boolean
}

class CreateRace extends React.Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: "",
            race: 0,
            raceStatus: false,
            subRace: 0,
            raceData: [], 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createCharacter = this.createCharacter.bind(this);
        this.handleRaceSelect = this.handleRaceSelect.bind(this);
        this.handleSubRaceSelect = this.handleSubRaceSelect.bind(this);
    }

    handleChange(event: {target: {name: any; value: any;};}) {
        this.setState({[event.target.name] : event.target.value} as Pick<IState, keyof IState>);
    }

    handleSubmit(event: any) {
        this.createCharacter();
        event.preventDefault();
    }

    handleRaceSelect(event: any) {
        this.setState({race: event.target.value});
        let race = this.state.raceData.find((race => race.id == event.target.value));
        if (race.subRaces.length != 0) {
            this.setState({subRace: race.subRaces[0].id});
        }
    }

    handleSubRaceSelect(event: {target: {value: any;};}) {
        this.setState({subRace: event.target.value} as Pick<IState, keyof IState>);
    }

    async getRaceData(){
        let responseRace = await fetch(Constants.URL + Constants.RACE);
        if (responseRace.ok){
            let data = await responseRace.json();
            this.setState({raceData : data});
            this.setState({raceStatus: true})
            this.setState({race: data[0].id})
            if (data[0].subRaces[0] === undefined) {
                this.setState({subRace: 0})
            } else {
                this.setState({subRace: data[0].subRaces[0].id})
            }
        } else {
            this.setState({raceStatus : false});
        }
    }

    componentDidMount(){
       this.getRaceData(); 
    }

    render() {
        if (this.state.raceStatus) {
            return(
                <div>
                    <h1>Character creation</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name:</label>
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} /> <br/>
                        <RaceSelect raceData={this.state.raceData} handle={this.handleRaceSelect}/>
                        <SubRaceSelect handle={this.handleSubRaceSelect} race={this.state.raceData.find((race: { id: number; }) => race.id == this.state.race)}/> <br/>
                        <input type="submit" value="Send" />
                    </form> 
                </div>
            ); 
        }
        else return(<div>Loading</div>);
    }

    createCharacter() {
        const data = {
            "name": this.state.name,
            "race": this.state.race,
            "subRace": this.state.subRace
        };
        postData(Constants.URL + Constants.CHAR, data).then(data => console.log(JSON.stringify(data)));
    }


}

export default CreateRace;