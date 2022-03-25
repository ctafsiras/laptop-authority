import React from 'react';
import './Sidebar.css'

const Sidebar = ({cart}) => {
    return (
        <div>
            <h2>Selected Laptops</h2>
        {
            
            cart.map(laptop=> <h3>{laptop}</h3>)
        }
            <button>Choose 1 For Me</button><br />
            <button>Choose Again</button>
        </div>
    );
};

export default Sidebar;