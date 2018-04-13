import React from 'react';
import Title from '../../components/Title/Title.js';
import Button from '../../components/Button/Button.js';

const WelcomePage = (props) => [<Title title={`Welcome ${props.user.name}`}/>,
                                <Button text="Log Out."/>]
export default WelcomePage;
