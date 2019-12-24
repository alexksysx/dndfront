import React from "react";

class ChooseRaceMode extends React.Component {
    render() {
        return(
            <div>
                <button name="action" value="create" onClick={this.props.set}>Create Race</button>
                <button name="action" value="view" onClick={this.props.set}>View Race</button>
            </div>
        )
    }
}

export default ChooseRaceMode;