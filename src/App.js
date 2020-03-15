import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Mia', age: 29 },
            { name: 'Cosi', age: 32 },
            { name: 'Bobby', age: 12 }
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

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Mia', age: 29 },
                { name: event.target.value, age: 32 },
                { name: 'Bobby', age: 33 }
            ]
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            borderRadius: '20px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(person =>{
                        return <Person 
                        name={person.name}
                        age= {person.age} />
                    })}
                </div>
            );
        }
        return (
            <div className="App" >
                <h1> Hi, I'm still.. a person</h1>
                <p>And I love...french fries!</p>
                <button
                    style={style}
                    onClick={() => this.togglePersonsHandler()}>Toggle cards
                    </button>
                
                {persons}

            </div>
        );
        // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a COSI!!!!'));
    }
}

export default App;