import React from 'react';
import './Navbar.css';
import logo from '../../../assets/images/more/logo1.png';

const Navbar = () => {
    return (
        <div className='navbar-background flex items-center justify-center'>
            <img src={logo} className='w-12' />
        </div>
    );
};

export default Navbar;