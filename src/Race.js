import React from 'react';
import {getData, postData} from './fetchMethods'

class Race extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            raceData: null,
            name: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name : event.target.value});
    }

    handleSubmit(event) {
        this.createRace(this.props.url, this.state.name)
        event.preventDefault();
    }

    render() {
        // const data = this.state.raceData;
        // if(!data) return (<div>Loading data</div>);
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="тame" type="text" value={this.state.name} onChange={this.handleChange} />
                    <input type="submit" value="Send" />
                </form> 
            </div>
        );
    }

    createRace(url = '', rName) {
        postData(url + "race/", {name : rName}).then(data => console.log(JSON.stringify(data)));
    }

}



export default Race;