import React, { Component } from 'react';

import Person from './Person/Person';

class PersonsList extends Component {
    // static getDerivedStateFromProps(props,state){
    //     console.log('Person.js getDerivedStateFromProps')
    //     return state;
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('PersonsList.js shouldComponentUpdate')
        if (nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked) {
            return true;
        } else {
            return false;
        }
    } //instead of the above, you can extend Pure Component, and it will perform the check for changes and render as appropriate

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapShotBeforeUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('PersonsList.js willUnmount')
    }

    render() {
        console.log('PersonsList.js rendering...')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={event => this.props.changed(event, person.id)}
                />);
        });
    };
}


export default PersonsList;