import React from "react";

class ViewRace extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 78,
            race : 0,
            status: true
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        let response = await fetch(this.props.url + 'race/' + this.state.id);
        if(response.ok) {
            this.setState({status: true})
            let data = await response.json();
            this.setState({race: data});
        }
        else {
            this.setState({status: false});
        }
    }

    render() {
        if (this.state.status)
        return(
            <div>
                <p>{this.state.race.name}</p>
            </div>
        )
        else return(
            <div>
                <p>Error</p>
            </div>
        )
    }
}

export default ViewRace;