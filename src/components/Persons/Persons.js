import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component{
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor() ', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
    this.lastPersonRef.current.focus();
  }
  render() {
    console.log('[Persons.js] Inside render()');
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        position={index}
        ref = {this.lastPersonRef}
        // authenticated = {this.props.isAuthenticated}
        changed={(event) => this.props.changed(event, person.id)} > You can change my name! </Person>
    });
  }
}
    
export default Persons;