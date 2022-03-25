import React from 'react';
import './Laptop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Laptop = ({ laptop, handleAdd}) => {
    return (
        <div className='laptop-container'>

            <img src={laptop.img} alt="" />


            <h2>{laptop.model}</h2>
            <p>Price: {laptop.price}</p>
            <button onClick={()=>handleAdd(laptop.model)}>Add To Cart <FontAwesomeIcon icon={faCartPlus} /></button>

        </div>
    );
};

export default Laptop;