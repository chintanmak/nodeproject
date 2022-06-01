import React from 'react';
import '../Containers/_navbar.scss';

import logo from '../Assets/nodelogo.png';

export default function Navbar() {
  return (
    <>
    <div className='navbar-container'>
        <div className='logo'>
        <a href='/'>
            <img src={logo} />
        </a>
        </div>
        <div className='main-menu'>
            <ul>
                <li>
                    <a href='/result'>Results</a>
                </li>
                <li>
                    <a href='/aboutus'>About us</a>
                </li>
            </ul>
        </div>

    </div>
    </>
  )
}
