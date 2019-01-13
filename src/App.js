import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
      {id : "key-1234", name:'Lakith Muthugala',age:23},
      {id : "key-5678", name:'Hansi yapa', age:29}
            ],
    showPersons :false
         };

  clickEvent = (event,personId) => {
    
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === personId;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  displayPersons = ()=>{
    const display = this.state.showPersons;
    this.setState({
                    showPersons : !display
                  })
  }

  deletePerson = (personIndex)=>{
    const persons  = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons : persons}); 
  }

  render() {

    const style={
      backgroundColor:"white",
      border:"1px solid blue",
      borderRadious:"2px",
      padding:"8px",
      cursor:"pointer"
  };

  let person = null;

  if( this.state.showPersons){
    person = (
      <div>
        {this.state.persons.map((person,index) =>{
          return (
            <Person
              click = {this.deletePerson.bind(index)} 
              name = {person.name}
              age = {person.age}
              key = {person.id}
              change = {(event) => this.clickEvent(event,person.id)}
            />
            );
        })}
      </div>
    );
  }

    return (
      <div className="App">
        <h1>Hello From React</h1>
        <button onClick={this.displayPersons} style={style} >Click me</button>
        {person}
      </div>
    );
  }
}

export default App;
