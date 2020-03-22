import React, { useEffect } from 'react';

import classes from './Cockpit.css';


const assignedClasses = [];
let btnClass = '';

const cockpit = (props) => {
    useEffect(() => { //componentDidMount AND componentDid Update

        console.log('Cockpit.js useEffect');
        setTimeout(() => {
            alert('Sent data to cloud!');
        }, 1000);
        return () => {
            console.log('Cockpit.js cleanup work in useEffect')
        }
    }, []); //final array empty = only execute it the first time, no subsequent execution

    useEffect(() => {
        console.log('2nd useEffect is being used...as effect');
        return () => {
            console.log('Cockpit.js SECOND useEffect');
        }
    })
    if (props.showPerson) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>

    );
};

export default React.memo(cockpit);