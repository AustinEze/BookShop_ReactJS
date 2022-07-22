import React from 'react'
import '../App.css';
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    
    <ul className='Navbar-container'>
        <li>
            <NavLink className='nav-item' to='/'>Home</NavLink>
        </li>
        <li><NavLink className='nav-item' to='/categoria'>Categorias</NavLink></li> 
        <li>
            <NavLink className='nav-item' to='cart'><CartWidget /></NavLink>
        </li>
    </ul>
  )
}
