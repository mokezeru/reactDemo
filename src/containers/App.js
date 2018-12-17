import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxl from '../hoc/Auxl';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor() ', props);

    this.state = {
      persons: [
        { id: '11', name: 'Moke', age: 30 },
        { id: '22', name: 'Ahmed', age: 29 },
        { id: '33', name: 'Beki', age: 32 }
      ],
      someother: 'something else',
      showPersons: false,
      togggleClicked: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doShow,
        togggleClicked: prevState.togggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {

    console.log('[App.js] Inside render() ')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.onNameChangeHandler} />;
    }

    return (
      <Auxl>
        <Cockpit
          title={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePerson}
          login={this.loginHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Auxl>

    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1', null,'I\'m React App!!!'));
  }
}

export default withClass(App, classes.App);
