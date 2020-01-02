import * as React from 'react';

interface IProps {
    modes: Array<string>,
    names: Array<string>,
    action: string,
    handle: any
}

class ModeSelect extends React.Component<IProps, any> {

    render() {
        return(
            <div>
                {this.props.modes.map((mode: string, index: number) => <button key={index} onClick={this.props.handle} name={this.props.action} value={mode}>{this.props.names[index]}</button>)}
            </div>
        )
    }
}

export default ModeSelect;