import React from 'react';
import CreateCharacter from './CreateCharacter';
import ViewCharacter from './ViewCharacter';
import ChooseCharacterMode from "./ChooseCharacterMode";

class MainCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            action: "view",
            id: 0
        };
        this.setMode = this.setMode.bind(this);
    }

    setMode(event) {
        this.setState({[event.target.name] :event.target.value});
    }

    render() {
        let data;
        if (this.state.action === "view") 
            data  = (<ViewCharacter />);
        if (this.state.action === "create") 
            data  = (<CreateCharacter />);

        return(
            <div>
                <ChooseCharacterMode set={this.setMode} />
                {data}
            </div>
        );
    }

}

export default MainCharacter;