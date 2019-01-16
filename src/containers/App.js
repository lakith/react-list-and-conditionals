import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons'
import CockPit from '../components/CockPit/Cockpit'
import Classes from './App.css'

class App extends PureComponent {

  state = {
    persons:[
      {id : "key-1234", name:'Lakith Muthugala',age:23},
      {id : "key-5678", name:'Hansi yapa', age:29}
            ],
    showPersons :false
         };
 
  // shouldComponentUpdate(nextProp,nextState){
  //   return nextState.persons !== this.state.persons ||
  //          nextState.showPersons !== this.state.showPersons
  // }

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
    });
  }

  displayPersons = ()=>{
    const display = this.state.showPersons;
    this.setState({
                    showPersons : !display
                  })
  }

  deletePerson = (personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

  let person = null;

  if( this.state.showPersons){
    person = (
        
            <Persons 
              persons = {this.state.persons}
              click = {this.deletePerson}
              change = {this.clickEvent}
            />
        
    );
  }   

  let style = {
    "marginTop":"20px"
  }

      return (
        <div className={Classes.App}>
        <button style = {style} onClick = {()=>{this.setState({showPersons:true})}}>always true</button>
        <CockPit
          appTitle = {this.props.title} 
          persons = {this.state.persons}
          showPersons = {this.state.showPersons}
          click = {this.displayPersons}
        />
          {person}
        </div>
        
    );
  }
}

export default App;
