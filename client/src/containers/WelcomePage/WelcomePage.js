import React from 'react';
import Title from '../../components/Title/Title.js';
import Link from '../../components/Link/Link.js'
import styles from './WelcomePage.css';


const dragstart_handler=(ev) =>{
    console.log("dragStart");
    // Add the target element's id to the data transfer object
    var img = new Image(); 
    img.src = './dropW.png'; 
    ev.dataTransfer.setDragImage(img, 10, 10);
    ev.dataTransfer.dropEffect = "move";
    ev.dataTransfer.setData("text/plain", ev.target.id);
   }
   const  dragover_handler =(ev)=> {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"
   }

   const drop_handler=(ev) =>{
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text");
    console.log(data)
    ev.target.appendChild(document.getElementById(data));
    console.log(ev.dataTransfer)
}

//TODO: Move to other file..
const DropArea = (props) =><div className="dragNDropSection"
 onDrop={(event)=>drop_handler(event)}
 onDragOver={(event)=>dragover_handler(event)}>
    <p className={styles.par}>Area Number: {props.name}</p>
</div>
 
 const DragMe = () => <img   className={styles.dragImage}
                            title="Drag me" id="drag1"
                            src="./favicon.ico" draggable="true"
                            onDragStart={event=>dragstart_handler(event)} width="20px"/>
 
const WelcomePage = (props) =>{

    const {position}=props;
    const putImageIn = position || 0;
console.log(putImageIn)
    return <div className="wrapper">
        <div className={styles.wrapper}>
            <Title  key="title" title={`Welcome ${props.user.name}`}/>
            <Link  onClick={props.logoutFunc} text="Logout"/>
        </div>

        {[...Array(15).keys()].map((val, index)=>{
                return <span> <DropArea key={index} name={index}  />
                        {(putImageIn===index)&&<DragMe/>} </span>})
        }
    </div>
    
}

export default WelcomePage;
