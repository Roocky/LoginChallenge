import React from 'react';
import Title from '../../components/Title/Title.js';
import Button from '../../components/Button/Button.js';

const WelcomePage = (props) => [<Title key="title" title={`Welcome ${props.user.name}`}/>,
                                <Button key="logout" text="Log Out." click={props.logoutFunc}/>]
                                
export default WelcomePage;
