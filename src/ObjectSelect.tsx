import * as React from 'react';

interface IProps {
    handle: any,
    data: Array<object>
}

class ObjectSelect extends React.Component<IProps, any> {
   
    render() {
        return(
            <div>
                <select onChange = {this.props.handle as any}>
                    {this.props.data.map((obj: any, key:any) => <option key={obj.id} value={obj.id}>{obj.name}</option>)}
                </select>
            </div>
        );
    }
}

export default ObjectSelect;