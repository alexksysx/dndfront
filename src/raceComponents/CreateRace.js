import React from "react";
import {postData} from './../fetchMethods';
import * as Constants from './../Constants';

class CreateRace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            normalSpeed: 0,
            swimSpeed: 0,
            climbSpeed: 0,
            flySpeed: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createRace = this.createRace.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event) {
        this.createRace();
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <h1>Race creation</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange} /> <br/>
                    <label>Description:</label>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} /> <br/>
                    <label>Normal speed:</label>
                    <input name="normalSpeed" type="number" value={this.state.normalSpeed} onChange={this.handleChange} /> <br/>
                    <label>Swim speed:</label>
                    <input name="swimSpeed" type="number" value={this.state.swimSpeed} onChange={this.handleChange} /> <br/>
                    <label>Climb speed:</label>
                    <input name="climbSpeed" type="number" value={this.state.climbSpeed} onChange={this.handleChange} /> <br/>
                    <label>Fly speed:</label>
                    <input name="flySpeed" type="number" value={this.state.flySpeed} onChange={this.handleChange} /> <br/>
                    <input type="submit" value="Send" />
                </form> 
            </div>
        );
    }

    createRace() {
        const data = this.state;         
        postData(Constants.URL + Constants.RACE, data).then(data => console.log(JSON.stringify(data)));
    }

}

export default CreateRace;