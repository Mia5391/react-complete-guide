import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Mia', age: 29 },
            { name: 'Cosi', age: 32 },
            { name: 'Bobby', age: 12 }
        ]
    }

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DO NOT DO THIS: this.state.persons[0].name='Changed Name';
        this.setState({
            persons: [
                { name: newName, age: 29 },
                { name: 'Cosi', age: 32 },
                { name: 'Bobby', age: 33 }
            ]
        });
    }

    render() {
        return (<div className="App" >
            <h1> Hi, I'm still.. a person</h1>
            <p>And I love...french fries!</p>
            <button onClick={() => this.switchNameHandler('MiaButton')}>Switch name</button>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'NewMiaClick')}>My hobbies: Racing</Person>
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}></Person>
        </div>
        );
        // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a COSI!!!!'));
    }
}

export default App;