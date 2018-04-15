import React from 'react';
import TextField from '../../components/TextField/TextField.js';
import Title from '../../components/Title/Title.js';
import Button from '../../components/Button/Button.js';
import styles from './Login.css';


//TODO: Create component for error message 
//TODO: Create form wraper component component for css reuse

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',
                    password:''};
    }
  
    handleChange=(event)=> {
        this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit=(event) =>{
        event.preventDefault();
        const {name, password} = this.state;
        this.props.loginFunc(name, password); 
    }
  
    //TODO: Create components for errors / messagess
    render() {
      return (
        <form  onSubmit={this.handleSubmit}>
            <Title title="Login"/>
            <TextField onChange={this.handleChange} name="name" placeholder="Username"/>
            <TextField onChange={this.handleChange} type="password" name="password" placeholder="Password"/>
            <Button type="submit" text="Let me in."/>
            {this.props.isWaitingForServer&&<p style={{color:'white'}}>Loading...</p>}
            {this.props.error&&<h5 style={{color:'red'}}>You have entered an invalid username or password...</h5>}

        </form>
      );
    }
  }
  export default Login;
