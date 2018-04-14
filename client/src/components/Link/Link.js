import React from 'react';
import styles from './Link.css';

const Link = (props) => <a className={styles.cLink} onClick={props.onClick}>{props.text}</a>

export default Link;