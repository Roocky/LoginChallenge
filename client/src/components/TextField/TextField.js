import React from 'react';

import styles from './TextField.css';

const TextField = (props) =>{
    const type = props.isPassword ? "password" : "text";
    return <input  type={type} className={ styles.textField } name={ props.name } {...props}/>;   
}  

export default TextField;