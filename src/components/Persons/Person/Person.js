import React from 'react'

import classes from './Person.css';


const person = (props)=>{

    // const rand = Math.random();

    // if(rand > 0.7) {
    //     throw new Error('SomeThing Went Wrong')
    // }

    return (
            <div className={classes.Person}  >
                 <p onClick = {props.click}>
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

export default person;