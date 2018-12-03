import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '11', name: 'Moke', age: 30 },
      { id: '22', name: 'Ahmed', age: 29 },
      { id: '33', name: 'Beki', age: 32 }
    ],
    someother: 'something else',
    showPersons: false
  }

  onNameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons =  this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePerson = () => {
    const doShow = this.state.showPersons;
    this.setState({ showPersons: !doShow });
  }

  render() {

    const style =
    {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.onNameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <StyleRoot>
        <div className="App">
          <h2>HI, I am a React App!!!</h2>
          <p className={classes.join(' ')}>This is really working!</p>
          {/* <button onClick={()=>this.switchNameHandler('Mequannint')}>Switch Name</button> */}
          <button style={style} onClick={this.togglePerson}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1', null,'I\'m React App!!!'));
  }
}

export default Radium(App);
