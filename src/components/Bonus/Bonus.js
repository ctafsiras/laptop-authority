import React from 'react';
import './Bonus.css'

const Bonus = () => {
    return (
        <div className='bonus'>
            <h2>How React works?</h2>
            <p>React is a JavaScript library for building user interface. React implements a virtual DOM. When it needs to read or write to the DOM, it uses the virtual representation of it. React basically work with, Component, Template String, State and Routing.</p>
            <h2>Props vs State.</h2>
            <p>Props and State looks so similar. When a state passed to a child component it almost looks like Props. But generally Props cannot be edited where State can be changed. Props are immutable and where State is mutable. </p>
            <h2>How useState works?</h2>
            <p>useState basically have 2 options. One is like a function, which we can use to set a data. we can also initially set a default data. after that we can use that function to modify the data. And the second option is like a variable with which we can access that data.</p>
        </div>
    );
};

export default Bonus;