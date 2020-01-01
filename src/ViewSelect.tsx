import * as React from 'react';

interface IProps {
    handle: any,
    data: Array<object>
}

class ViewSelectCharacters extends React.Component<IProps, any> {
   
    render() {
        return(
            <div>
                <select onChange = {this.props.handle as any}>
                    {this.props.data.map((char: any, key:any) => <option key={char.id} value={char.id}>{char.name}</option>)}
                </select>
            </div>
        );
    }
}

export default ViewSelectCharacters;