import React, { Component } from 'react';

import Person from './Person/Person';

class PersonsList extends Component {
    // static getDerivedStateFromProps(props,state){
    //     console.log('Person.js getDerivedStateFromProps')
    //     return state;
    // }
    shouldComponentUpdate(nextProps, nextState){
        console.log('PersonsList.js shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapShotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
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