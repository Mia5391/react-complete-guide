import React from 'react';

// import './Person.css'

import styled from 'styled-components';

const StyledDiv = styled.div`  
width: 60%;
margin: 16px auto;
border: 1px solid black;
border-radius: 20px;
box-shadow: 0 2px 3px hotpink;
padding: 16px;
text-align: center;

@media (min-width: 500px) {
    width: 450px;
}`; //returns react component, not just inline styles, put into css class selectors then adds those to div

const person = (props) => {
    return (
        // <div className="Person" style={style}>
<StyledDiv>
< p onClick = { props.click } > I'm {props.name} and I am {props.age} years old!</p>
            < p > { props.children }</p >
                <input type="text" onChange={props.changed} value={props.name} />
</StyledDiv>
        
)
};


export default person;

// function randomAge() {
//     return Math.floor(Math.random() * 30);
// }
// state-less/dumb/presentational component