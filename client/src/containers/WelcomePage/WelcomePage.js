import React from 'react';
import Title from '../../components/Title/Title.js';
import Link from '../../components/Link/Link.js'
import styles from './WelcomePage.css';

const dragstart_handler= (ev) => {
    // Add the target element's id to the data transfer object
    var img = new Image(); 
    img.src = './dropW.png'; 
    ev.dataTransfer.setDragImage(img, 10, 10);
    // // ev.dataTransfer.dropEffect = "move";
    // ev.dataTransfer.setData("text/plain", ev.target.id);
}

const  dragover_handler =(ev)=> {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"
}

const drop_handler = (ev, moveImage) =>{
    ev.preventDefault();
    moveImage(ev.target.id);
}

//TODO: Move to other file..
const DropArea = (props) =><div className="dragNDropSection"
    onDrop={(event)=>drop_handler(event, props.moveImage)}
    onDragOver={(event)=>dragover_handler(event, props.id)}
    key={props.id}>
        <p  className={styles.par} id={props._id}>Area Number: {props.name}</p>
</div>

//TODO: Other file
const Item = (props) => <img  className={styles.dragImage}
                        title="Drag me" id="user_thumb"
                        src={props.url} draggable="true"
                        alt="Drag me"
                        onDragStart={event=>dragstart_handler(event)} width="20px"/>

//TODO: Refactor..
const WelcomePage = (props) => { 
const {position} = props;
const putImageIn = position || 0;
return <div className="wrapper">
    <div className={styles.wrapper}>
        <Title  key="title" title={`Welcome ${props.user.name}`}/>
        <Link  onClick={props.logoutFunc} text="Logout"/>
    </div>
    
    {[...Array(15).keys()].map((val, index)=>{
            return <span key={index}> <DropArea  moveImage={props.moveImage}  _id={index} name={index}  />
                    {(putImageIn==index) && <Item  url='./favicon.ico'/>} </span>})
    }
</div>
}

export default WelcomePage;
