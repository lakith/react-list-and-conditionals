import React from 'react';
import Classes from '../CockPit/CockPit.css'

const CockPit = (props) => {

    const style={
        backgroundColor:"green",
        border:"1px solid blue",
        borderRadious:"2px",
        padding:"8px",
        cursor:"pointer",
        ':hover':{
          backgroundColor : 'lightgreen',
          color:'black'
        }
    };
    

  let person = null;
  let cssModStyle = "";

  if( props.showPersons){
        cssModStyle = Classes.Red;
  } 
    
    let styleClasses = [];
    if(props.persons.length === 2){
        styleClasses.push(Classes.red);
    } if(props.persons.length >= 2){
        styleClasses.push(Classes.bold);
    }

    return(
        <div className= {Classes.CockPit}>
          <h1 className = {styleClasses.join(' ')}>{props.appTitle}</h1>
          <button className = {cssModStyle} onClick={props.click} style={style} >Click me</button>
          {person}
        </div>
    )

}

export default CockPit;