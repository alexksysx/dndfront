import React from "react";
import {postData} from './../fetchMethods';

class CreateRace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: ""
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
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                    <input type="submit" value="Send" />
                </form> 
            </div>
        );
    }

    createRace() {
        const data = {
            name: this.state.name,
            description: this.state.description
        }
        postData(this.props.url + "race/", data).then(data => console.log(JSON.stringify(data)));
    }

}

export default CreateRace;