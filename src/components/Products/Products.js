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
    }
    const chooseAgain = () => {
        setCart([])
        setRndmModel('')
    }
    const [rndmModel, setRndmModel] = useState('')
    const randomChoice = () => {
        const rnd = Math.floor(Math.random() * cart.length)
        setRndmModel(cart[rnd]);
    }
    return (
        <div className='laptop-sidebar-container'>
            <div className='laptops'>
                {
                    laptops.map(laptop => <Laptop laptop={laptop} key={laptop.id} handleAdd={handleAdd}></Laptop>)
                }
            </div>
            <div className='sidebar'>

                <Sidebar cart={cart} chooseAgain={chooseAgain} key={cart[0]} randomChoice={randomChoice} rndmModel={rndmModel}></Sidebar>

            </div>

        </div>
    );
};

export default Products;