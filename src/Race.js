import React from 'react';
import {getData, postData} from './fetchMethods'

class Race extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            raceData: null,
            test: "lol",
        };
        console.log(this.state.test)
    }

    componentDidMount() {
        const URL = this.props.url + "race/" + this.props.id;
        getData(URL).then(data=> {this.setState({raceData : data})})
    }

    render() {
        const data = this.state.raceData;
        if(!data) return (<div>Loading data</div>);
        return(
            <div>
                <p>{data.name}</p>
                <button onClick = {this.createRace}>test</button>
            </div>
        );
    }

    createRace() {
        const URL = "http://alexksysx.me:8080/dndServerTest/race";
        postData(URL, {name : "React"}).then(data => console.log(JSON.stringify(data)));
    }

}



export default Race;