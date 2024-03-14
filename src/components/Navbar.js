import React from 'react';
import { link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav bg-light">
            <div className='d-flex w-100 justify-content-center'>
                <link className='nav-link' to="/">Home</link>
                <link className='nav-link' to="/buttons">Buttons</link>
                <link className='nav-link' to="/forms">Forms</link>
                <link className='nav-link' to="/list">List</link>
                <link className='nav-link' to="/modal">Modal</link>
            </div>
        </nav>
    );
};

export default Navbar;