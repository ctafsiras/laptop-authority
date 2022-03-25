import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import Sidebar from '../Sidebar/Sidebar';
import './Products.css';

const Products = () => {
    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
    const [cart, setCart] = useState([])
    const handleAdd = model => {
        if (cart.indexOf(model) == -1) {
            setCart([...cart, model])
        }
        else{

        }

    }
    return (
        <div className='laptop-sidebar-container'>
            <div className='laptops'>
                {
                    laptops.map(laptop => <Laptop laptop={laptop} key={laptop.id} handleAdd={handleAdd}></Laptop>)
                }
            </div>
            <div className='sidebar'>
                <Sidebar cart={cart} key={cart.indexOf}></Sidebar>
            </div>

        </div>
    );
};

export default Products;