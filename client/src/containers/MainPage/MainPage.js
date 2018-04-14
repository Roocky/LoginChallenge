import React, { Component } from 'react';
import Login from '../Login/Login.js';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import {fLogin, fLogout, isError} from '../../Services/fakeAPI.js';
import { getConnectedUserName }  from '../../Services/sessionStorage.js'

/**
 * Main page container shows 'WelcomePage'
 * if logged in (session) or
 * redirect to login screen if not.
 * Store the user data in state
 */
export default class MainPage extends Component {
	constructor(props) {
        super(props);
        this.state={
            /*You can change the getConnectedUserName()
             to your name for simple test
             You may see the welcome screen*/
            name: getConnectedUserName(),
            isWaitingForServer:false,
            errorMessage:""
        }
    }
    
    //May Able to change the imlementation to real API from here..
    login = async(name, password) =>{
        this.setState(prevState=>({isWaitingForServer : true, errorMessage:""}));
        const res = await fLogin(name, password);
        if(!isError(res))
            this.setState(prevState=>({isWaitingForServer:false, name:name, errorMessage:""}));
        else 
            this.setState(prevState=>({isWaitingForServer:false, errorMessage : res.error}));
    } 
    logout = () =>{
        fLogout();
        this.setState(prevState=>({name:""}));
    } 

	render() {
        const { name, errorMessage, isWaitingForServer } = this.state;
        return (!name ? <Login loginFunc={this.login}
             isWaitingForServer={isWaitingForServer}
              error={errorMessage}/> :
             <WelcomePage user={{name}}
             logoutFunc={this.logout}/>);
	}
}