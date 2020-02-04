import * as React from 'react';
import * as Constants from './../Constants';
import ObjectSelect from './../ObjectSelect';

interface IState {
    subrace: any,
    subraceData: Array<any>,
    status: boolean,
    isEmpty: boolean
}

class ViewSubrace extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            subrace: null,
            subraceData: [],
            status: false,
            isEmpty: false
        }
        this.getData = this.getData.bind(this);
    }

    async getData() {
        let response = await fetch(Constants.SUBRACE_URL);
        if(response.ok) {
            let data : Array<object> = await response.json();
            if (data.length == 0) {
                this.setState({isEmpty: true});
            } else {
                this.setState({subraceData: data});
                this.setState({subrace: data[0]});
                this.setState({status: response.ok});
                this.setState({isEmpty: false});
            }
        } else {
            this.setState({status: false});
        }
    }

    onSubraceSelect(event: {target: {value: string;};}) {
        let subrace : any = this.state.subraceData.find((subrace) => subrace.id == event.target.value);
        this.setState({subrace: subrace});
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        let data: any = (<br/>);
        let selSubrace: any = (<br/>);
        if (this.state.status) {
            data = this.state.subrace.name;
        }
        if (!this.state.isEmpty && this.state.status && (this.state.subraceData.length > 1)) {
            selSubrace = <ObjectSelect handle={this.onSubraceSelect} data={this.state.subraceData} />
        }
        return(
            <div>
                {data} <br/>
                {selSubrace} <br/>
            </div>
        );
    }

}

export default ViewSubrace;