import React from 'react';
import TextField from '../../components/TextField/TextField.js';
import Title from '../../components/Title/Title.js';
import Button from '../../components/Button/Button.js';


const Login = () => [<Title title="Login"/>,
                    <TextField name="user_name" placeHolder="Username"/>,
                    <TextField isPassword name="password" placeHolder="Password"/>,
                    <Button text="Let me in."/>]
export default Login;
