import React from 'react'
import '../App.css';

export const Navbar = () => {
  return (
    <ul className='Navbar-container'>
        <li>
            <a className='nav-item' href="#">Home</a>
        </li>
        <li>
            <a className='nav-item' href="#">About</a>
        </li>
        <li>
            <a className='nav-item' href="#">Bookshop</a>
        </li>
        <li>
            <a className='nav-item' href="#">Contact</a>
        </li>
    </ul>
  )
}
