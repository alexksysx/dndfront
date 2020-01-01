import React from "react";

interface IProps {
    set: (event : React.MouseEvent<HTMLButtonElement>) => void
}

class ChooseCharacterMode extends React.Component<IProps, any> {
    render() {
        return(
            <div>
                <button name="action" value="create" onClick={this.props.set}>Create Character</button>
                <button name="action" value="view" onClick={this.props.set}>View Character</button>
            </div>
        )
    }
}

export default ChooseCharacterMode;