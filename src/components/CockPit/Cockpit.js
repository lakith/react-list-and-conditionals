import React from 'react';
import Classes from '../CockPit/CockPit.css'
//import Aux from '../../hoc/Aux'

const CockPit = (props) => {

    // const style={
    //     backgroundColor:"green",
    //     border:"1px solid blue",
    //     borderRadious:"2px",
    //     padding:"8px",
    //     cursor:"pointer",
    //     ':hover':{
    //       backgroundColor : 'lightgreen',
    //       color:'black'
    //     }
    // };
    

  let person = null;
  let cssModStyle = Classes.Button;

  if( props.showPersons){
        cssModStyle = [Classes.Button , Classes.Red].join(' ');
  } 
    
    let styleClasses = [];
    if(props.persons.length === 2){
        styleClasses.push(Classes.red);
    } if(props.persons.length >= 2){
        styleClasses.push(Classes.bold);
    }

    return(
        //<Aux>
        <>
          <h1 className = {styleClasses.join(' ')}>{props.appTitle}</h1>
          <button className = {cssModStyle} onClick={props.click}>Click me</button>
          {person}
        </>
        //</Aux>
    )

}

export default CockPit;