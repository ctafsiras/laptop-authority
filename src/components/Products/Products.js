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
    return (
        <div className='laptop-sidebar-container'>
            <div className='laptops'>
                {
                    laptops.map(laptop=><Laptop laptop={laptop} key={laptop.id}></Laptop>)
                }
            </div>
            <div className='sidebar'>
                <Sidebar></Sidebar>
            </div>

        </div>
    );
};

export default Products;