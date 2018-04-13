import React, { Component } from 'react';
import Login from '../Login/Login.js';
import WelcomePage from '../WelcomePage/WelcomePage.js';
export default class MainPage extends Component {
	constructor(props) {
        super(props);
        this.state={
            name:""
        }
    }
    
    //For the challeng purpose
    login = (user) => this.localStoreTheUser(user);

    //Put the user data in LocalStorage - TODO: Move to API Folder
    localStoreTheUser = (user) =>{this.setState(prevState=>({name:user.name}))}

    componentDidMount = () => {
        //Temp - for sanity check reasons
        setTimeout(()=>this.login({name: "Roey test from main page"}), 3000)
    }
    Component
	render() {
		const { name } = this.state;
		
		return (!name ? <Login/> : <WelcomePage user={{name}}/>);
	}
}