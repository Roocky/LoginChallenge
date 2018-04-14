import React from 'react';
import styles from './Link.css';

const Link = (props) => <a onClick={props.onClick}>{props.text}</a>

export default Link;