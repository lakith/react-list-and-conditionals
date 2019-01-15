import React from 'react';
import Person from './Person/Person'
import ErrorBoundry from '../ErrorBoundary/ErrorBoundary'

const Persons = (props) => (
    props.persons.map((person,index) =>{
        console.log(index);
        return (
         <ErrorBoundry key = {person.id}>   
          <Person
            click = {() => props.click(index)} 
            name = {person.name}
            age = {person.age}
            change = {(event) => props.change(event,person.id)}
            
          />
          </ErrorBoundry>
          );
      })
)

export default Persons;