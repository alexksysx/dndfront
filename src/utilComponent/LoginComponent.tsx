import * as React from 'react';
import * as Constants from '../Constants';
import { Redirect } from 'react-router-dom';
import '../fetchMethods';
import { postData } from '../fetchMethods';

interface IState {
    username: string,
    password: string,
    success: boolean
}

class LoginComponent extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: "",
            password: "",
            success: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    handleChange(event: {target : {name: any; value: any;};}) {
        this.setState({[event.target.name] : event.target.value} as Pick<IState, keyof IState>);
    }

    async sendData(event: any) {
        event.preventDefault();
        let loginData = {
            "username": this.state.username,
            "password": this.state.password
        }
        let response = await postData(Constants.LOGIN_URL, loginData);
        if (response.ok) {
            let responseData = await response.json();
            if (responseData.token == '-') {
                localStorage.setItem('isAuthenticated', "false");
                localStorage.setItem('token', '-');
                alert('Wrong login or password!');
            } else {
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('token', responseData.token);
                this.setState({success: true});
                setTimeout( () => {
                    this.props.history.push("/");
                }, 5000);
            }
        }
    }

    render() {
        let formData = (
            <div>
                <form onSubmit={this.sendData}>
                    <label>login:</label><br/>
                    <input name = "username" type="text" value={this.state.username} onChange={this.handleChange}/><br/>
                    <label>password:</label><br/>
                    <input name = "password" type = "password" value={this.state.password} onChange={this.handleChange} /> <br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );

        let successData = (
            <div>
                <h1>Login successful!</h1>
                <h2>Redirecting to main page</h2>
            </div>
        )
        if(!this.state.success)
            return(formData);
        else 
            return(successData);
    }

}

export default LoginComponent;