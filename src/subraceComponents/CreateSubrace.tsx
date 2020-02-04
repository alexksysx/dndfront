import * as React from 'react';
import * as Constants from './../Constants';
import ObjectSelect from './../ObjectSelect';
import {postData} from './../fetchMethods';

interface IState {
    name: string,
    description: string,
    strengthBonus: number,
    dexterityBonus: number,
    constitutionBonus: number,
    intelligenceBonus: number,
    wisdomBonus: number,
    charismaBonus: number,
    isEmpty: boolean,
    status: boolean,
    race: any,
    raceData: Array<any>

}

class CreateSubrace extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            description: "",
            strengthBonus: 0,
            dexterityBonus: 0,
            constitutionBonus: 0,
            intelligenceBonus: 0,
            wisdomBonus: 0,
            charismaBonus: 0,
            isEmpty: false,
            status: false,
            race: null,
            raceData: []

        };
        this.getData = this.getData.bind(this);
        this.createSubrace = this.createSubrace.bind(this);
        this.onRaceSelect = this.onRaceSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async getData() {
        let response = await fetch(Constants.SUBRACE_URL);
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

    componentDidMount(){
        this.getData();
    }

    createSubrace() {
        let dataPost: any = {
            name: this.state.name,
            description: this.state.description,
            races : [this.state.race.id],
            strengthBonus: this.state.strengthBonus,
            dexterityBonus: this.state.dexterityBonus,
            constitutionBonus: this.state.constitutionBonus,
            intelligenceBonus: this.state.intelligenceBonus,
            wisdomBonus: this.state.wisdomBonus,
            charismaBonus: this.state.charismaBonus
        }
        postData(Constants.SUBRACE_URL, dataPost).then(data => console.log(JSON.stringify(data)));
    }

    onRaceSelect(event: {target: { value:number;};}) {
        let selectedRace = this.state.raceData.find((race) => race.id == event.target.value);
        this.setState({race: selectedRace});
    }

    handleChange(event: {target : {name: any; value: any;};}) {
        this.setState({[event.target.name] : event.target.value} as Pick<IState, keyof IState>);
    }

    handleSubmit(event: any) {
        this.createSubrace();
        event.preventDefault();
    }

    render() {
        let data: any = (<br/>);
        if (this.state.status && !this.state.isEmpty && this.state.raceData.length > 1) data = (
            <div>
                <h2>Select race</h2>
                <ObjectSelect handle={this.onRaceSelect} data={this.state.raceData} />
            </div>);
        if (this.state.isEmpty)
        return(
            <div>
                Race data is Empty. Create new race first.
            </div>
        );
        if (this.state.status)
            return(
                <div>
                    <h1>Subrace Creation</h1>
                    {data} <br/>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name:</label>
                        <input name="name" type="text" onChange={this.handleChange} value={this.state.name}/> <br/>
                        <label>Description:</label>
                        <textarea name="description" onChange={this.handleChange} value={this.state.description}/> <br/>
                        <label>Strength bonus:</label>
                        <input name="strengthBonus" type="number" onChange={this.handleChange} value={this.state.strengthBonus}/> <br/>
                        <label>Dexterity bonus:</label>
                        <input name="dexterityBonus" type="number" onChange={this.handleChange} value={this.state.dexterityBonus}/> <br/>
                        <label>Constitution bonus:</label>
                        <input name="constitutionBonus" type="number" onChange={this.handleChange} value={this.state.constitutionBonus}/> <br/>
                        <label>Intelligence bonus:</label>
                        <input name="intelligenceBonus" type="number" onChange={this.handleChange} value={this.state.intelligenceBonus}/> <br/>
                        <label>Wisdom bonus:</label>
                        <input name="wisdomBonus" type="number" onChange={this.handleChange} value={this.state.wisdomBonus}/> <br/>
                        <label>Charisma bonus:</label>
                        <input name="charismaBonus" type="number" onChange={this.handleChange} value={this.state.charismaBonus}/> <br/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
            );
        else return(<h2>Loading</h2>);
    }

}

export default CreateSubrace;