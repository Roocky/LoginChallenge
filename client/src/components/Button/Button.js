import React from 'react';
import styles from './Button.css';

const Button = (props) => <input type={props.type || "button"}
                             value={props.text} 
                             onClick={props.click}
                             className={styles.button}/>

export default Button;