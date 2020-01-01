import * as React from "react";

interface IProps {
    set : (event: React.MouseEvent<HTMLButtonElement>) => void
}

class ChooseRaceMode extends React.Component<IProps, any> {
    render() {
        return(
            <div>
                <button name="action" value="create" onClick={this.props.set as any}>Create Race</button>
                <button name="action" value="view" onClick={this.props.set as any}>View Race</button>
            </div>
        )
    }
}

export default ChooseRaceMode;