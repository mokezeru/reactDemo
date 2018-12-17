import React from 'react';
import classes from './Cockpit.css';
import Auxl from '../../hoc/Auxl';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Red, classes.Button].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        // <div className={classes.Cockpit}>
        <Auxl>
            <h2>{props.title}</h2>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log in </button> 
        </Auxl>
        //</div>
    );
};

export default cockpit;