import React from 'react';
import './Sidebar.css'

const Sidebar = ({ cart, chooseAgain, randomChoice, rndmModel }) => {
    return (
        <div>
            <h2>Selected Laptops</h2>
            {
                cart.map(laptop => <h3>{laptop}</h3>)
            }
            <button onClick={randomChoice}>Choose 1 For Me</button><br/>
            <h2>{rndmModel}</h2>
            <button onClick={chooseAgain}>Choose Again</button>
        </div>
    );
};

export default Sidebar;