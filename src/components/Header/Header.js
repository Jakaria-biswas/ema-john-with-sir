import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import useFirebase from '../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {newUser,SignOutUser} = useFirebase()
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                   newUser ? <button  onClick={SignOutUser} style={{marginLeft:"10px"}}>Sign Out</button> :  <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;