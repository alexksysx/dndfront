import * as React from "react";
import {Spinner} from "react-bootstrap";
import * as Constants from './../Constants';
import ObjectSelect from '../ObjectSelect';
interface IState{
    character: any,
    status: boolean,
    charData: Array<any>,
    isEmpty: boolean
}

class ViewCharacter extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            character: 0,
            status: false,
            charData: [],
            isEmpty: false
        }
        this.onChangeCharacter = this.onChangeCharacter.bind(this);
    }

    onChangeCharacter(event:{ target: {value: number;};}) {
        let char: any =  this.state.charData.find((character) => character.id == event.target.value);
        this.setState({character: char});
    }

    async getData() {
        let response = await fetch(Constants.CHAR_URL);
        if (response.ok) {
            let data = await response.json();
            if (data.length == 0) {
                this.setState({isEmpty: true});
                this.setState({character: {name: "Empty"}});
            }
            else {
                this.setState({charData: data});
                this.setState({character: data[0]});
            }
            this.setState({status: response.ok});
        } else {
            this.setState({status: false});
        }
    }
    
    componentDidMount() {
        this.getData();
    }

    render() {
        let data: any = (<br/>);
        let selChar: any = (<br/>);
        if (this.state.status)
            data = (<div>
                Character name: <br/>
                {this.state.character.name} <br/>
                Character race: <br/>
                {this.state.character.race.name} <br/>
                </div>
                );
        else {
            data = (<div>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading</span>
                </Spinner>
            </div>);
        }
        if (!this.state.isEmpty && this.state.status && (this.state.charData.length > 1))
            selChar = (<ObjectSelect handle={this.onChangeCharacter} data={this.state.charData} />);
        return(
            <div>
                <br/>
                {selChar} <br/>
                {data} <br/>
            </div>
        );
    }
}

export default ViewCharacter;