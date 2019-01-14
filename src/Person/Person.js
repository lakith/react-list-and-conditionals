import React from 'react'

import './Person.css';
import Radium from 'radium';

const person = (props)=>{


    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };

    return (
            <div className="Person" onClick = {props.click} style = {style}>
                 <p>
                     I'm {props.name} 
                 </p>
                 <p>
                     I'm {props.age} old
                 </p>
                 <p>
                    {props.children}
                 </p>
                 <input onChange={props.change} value = {props.name} />
            </div>
    )
          
};

export default Radium(person);