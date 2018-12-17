import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css'
import withClass from '../../../hoc/withClass';
import Auxl from '../../../hoc/Auxl';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor() ', props);
        this.inputElemet = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0) {
            this.inputElemet.current.focus();
        }
    }

    focus() {
        this.inputElemet.current.focus();
    }
    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Auxl>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm Authenticated!!!</p> : null}
                </AuthContext.Consumer>

                <p onClick={this.props.click}> I'm {this.props.name} and I'm  {this.props.age} years old </p>
                <p> {this.props.children} </p>
                <input
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                    ref={this.inputElemet} />
            </Auxl>
        );
    }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    onChange: PropTypes.func
}
export default withClass(Person, classes.Person);