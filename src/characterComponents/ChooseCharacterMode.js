import React from "react";

class ChooseCharacterMode extends React.Component {
    render() {
        return(
            <div>
                <button name="action" value="create" onClick={this.props.set}>Create Character Mode</button>
                <button name="action" value="view" onClick={this.props.set}>View Character Mode</button>
            </div>
        )
    }
}

export default ChooseCharacterMode;