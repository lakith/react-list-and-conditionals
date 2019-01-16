import React,{Component} from 'react'

import classes from './Person.css';
import PropTypes from 'prop-types';


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

Person.prototype = {
    name : PropTypes.string,
    age : PropTypes.number,
    click : PropTypes.func,
    change : PropTypes.func
};

export default Person;