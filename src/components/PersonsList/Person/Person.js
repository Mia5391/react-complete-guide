import React, { Component, Fragment } from 'react';

import classes from './Person.css';

class Person extends Component {
    render() {
        return (
            <React.Fragment>
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
        </p>,
                <p key="i2">{this.props.children}</p>,
                <input
                    key="i3"
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} /></React.Fragment>


        );
    }
}


export default Person;
