import React from 'react';
import styles from './Button.css';

const Button = (props) => <input type="button"
                             onClick={props.onClick}
                             value={props.text} 
                             className={styles.button}/>

export default Button;