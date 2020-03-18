import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id:'grnl',name: 'Mia', age: 29 },
            {id:'fe', name: 'Cosi', age: 32 },
            {id:'edw', name: 'Bobby', age: 12 }
        ],
        showPersons: false
    }

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DO NOT DO THIS: this.state.persons[0].name='Changed Name';
        this.setState({
            persons: [
                { name: 'Mia', age: 29 },
                { name: 'Cosi', age: 32 },
                { name: 'Bobby', age: 33 }
            ]
        });
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p =>{
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]}; 

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: [
                { name: 'Mia', age: 29 },
                { name: event.target.value, age: 32 },
                { name: 'Bobby', age: 33 }
            ]
        });
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice(); //creates copy of array, as below:
        //const persons = [...this.state.persons] - always update state in mutable fashion (create copy and edit that!)
        persons.splice(personIndex, 1);
        this.setState({persons:persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) =>{
                        return <Person 
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age= {person.age} 
                        key={person.id}
                        changed={(event)=>this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>
            );
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');  //classes will be JUST red
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold'); //classes will be red AND bold
        }

        return ( //styleroot allows the use of media queries

            <div className="App">
                <h1> Hi, I'm still.. a person</h1>
                <p className={classes.join(' ')}>And I love...french fries!</p>
                <button className="button"
                    // style={style}
                    onClick={() => this.togglePersonsHandler()}>Toggle cards
                    </button>
                
                {persons}

            </div>

        );
        // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a COSI!!!!'));
    }
}

export default App;