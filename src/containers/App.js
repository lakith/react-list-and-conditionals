import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons'
import CockPit from '../components/CockPit/Cockpit'
import Classes from './App.css'
import WithClass from '../hoc/withClass'

class App extends PureComponent {

  state = {
    persons:[
      {id : "key-1234", name:'Lakith Muthugala',age:23},
      {id : "key-5678", name:'Hansi yapa', age:29}
            ],
    showPersons :false,
    toggleClicked:0,
    isAuthenticated:false
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
    this.setState( (prevState,props) => {
                    
                    return {
                      showPersons : !display,
                      toggleClicked : prevState.toggleClicked +1
                    }

                  })
  }

  deletePerson = (personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  makeUserLogin = () => {
    const auth = this.state.isAuthenticated;
    this.setState({isAuthenticated  : !auth});
  }

  render() {

  let person = null;

  if( this.state.showPersons){
    person = (
        
            <Persons 
              persons = {this.state.persons}
              click = {this.deletePerson}
              change = {this.clickEvent}
              authenticated = {this.state.isAuthenticated}
            />
        
    );
  }   

  let style = {
    "marginTop":"20px"
  }

      return (
        <>
            <button style = {style} onClick = {()=>{this.setState({showPersons:true})}}>always true</button>
            <CockPit
              appTitle = {this.props.title} 
              showPersons = {this.state.showPersons}
              click = {this.displayPersons}
              persons = {this.state.persons}
              signUpUser = {this.makeUserLogin}
            />
              {person}
        </ >
        
    );
  }
}

export default WithClass(App,Classes.App);
