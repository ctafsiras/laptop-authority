import React from 'react';
import './Laptop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Laptop = ({ laptop }) => {
    return (
        <div className='laptop-container'>

            <img src={laptop.img} alt="" />


            <h2>{laptop.model}</h2>
            <p>Price: {laptop.price}</p>
            <button>Add To Cart <FontAwesomeIcon icon={faCartPlus} /></button>

        </div>
    );
};

export default Laptop;