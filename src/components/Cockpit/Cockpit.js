import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';


const assignedClasses = [];
let btnClass = '';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => { //componentDidMount AND componentDid Update

        console.log('Cockpit.js useEffect');
        // setTimeout(() => {
        //     alert('Sent data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
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
            <button ref={toggleBtnRef} className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
            <AuthContext>
            {(context) => <button onClick={context.login}>Login</button>}
            </AuthContext>
        </div>

    );
};

export default React.memo(cockpit);