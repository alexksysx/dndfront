import React from "react";
import * as Constants from "./../Constants";

class ViewCharacter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 117,
            character: 0,
            status: true
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        let response = await fetch(Constants.URL + Constants.CHAR + this.state.id);
        if(response.ok) {
            this.setState({status: true})
            let data = await response.json();
            this.setState({character: data});
        }
        else {
            this.setState({status: false});
        }
    }

    render() {
        if (this.state.status)
        return(
            <div>
                <p>{this.state.character.name}</p>
            </div>
        )
        else return(
            <div>
                <p>Error</p>
            </div>
        )
    }
}

export default ViewCharacter;