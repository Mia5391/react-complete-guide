import React, { Component, Fragment } from 'react';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();

    }

    componentDidMount(){
       // this.inputElement.focus();
    this.inputElementRef.current.focus();
    }

    render() {
        console.log("Person.js is rendering")
        return (
            <Aux>
                <AuthContext.Consumer>
                {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Not Authenticated, Please log in</p>}
                </AuthContext.Consumer>


                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
        </p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    //ref={(inputEl)=>{this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} /></Aux>
        );
    }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;
