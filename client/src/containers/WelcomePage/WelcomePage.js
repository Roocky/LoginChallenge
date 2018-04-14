import React from 'react';
import Title from '../../components/Title/Title.js';
import Link from '../../components/Link/Link.js'
import styles from './WelcomePage.css';

const WelcomePage = (props) =>{
    return <div>
            <Title key="title" title={`Welcome ${props.user.name}`}/>
            <Link onClick={props.logoutFunc} text="Logout"/>
           </div>
}

export default WelcomePage;
