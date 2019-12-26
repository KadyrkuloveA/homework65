import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">HW</span>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/home'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/contact'>Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/about'>About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/support'>Support</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/blog'>Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/pages/admin'>Admin</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;