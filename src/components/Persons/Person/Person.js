import React,{Component} from 'react'

import classes from './Person.css';


class Person extends Component{
    render(){
        return (
            <div className={classes.Person}  >
                 <p onClick = {this.props.click}>
                     I'm {this.props.name} 
                 </p>
                 <p>
                     I'm {this.props.age} old
                 </p>
                 <p>
                    {this.props.children}
                 </p>
                 <input onChange={this.props.change} value = {this.props.name} />
            </div>
    )
    }
}



export default Person;