import React,{PureComponent} from 'react';
import Person from './Person/Person'
import ErrorBoundry from '../ErrorBoundary/ErrorBoundary'

class Persons extends PureComponent {


    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("[Update Persons.js] Inside shouldComponentUpdate()");
    //     return nextProps.persons !== this.props.persons || 
    //             nextProps.click !== this.props.click ||
    //             nextProps.change !== this.props.change 
    // }

    render(){
      console.log("[Update Persons.js] Inside render()")
       return this.props.persons.map((person,index) =>{
            return (
             <ErrorBoundry key = {person.id}>   
              <Person
                click = {() => this.props.click(index)} 
                name = {person.name}
                age = {person.age}
                change = {(event) => this.props.change(event,person.id)}
                
              />
              </ErrorBoundry>
              );
          })
    }
}


export default Persons;