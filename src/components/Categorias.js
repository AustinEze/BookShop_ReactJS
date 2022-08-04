import React from 'react'
import { NavLink } from 'react-router-dom'

export const Categorias = () => {
  return (
    <div>
        <ul className='categoria-container'>
            <li>
                <NavLink className='categoria-item' to='/categoria/Emprendimiento'>Emprendimiento</NavLink>
            </li>
            <li>
                <NavLink className='categoria-item' to='/categoria/Policiales-Oscuros'>Policiales/Oscuros</NavLink>
            </li>
            <li>
                <NavLink className='categoria-item' to='/categoria/Salud-bienestar'>Salud/Bienestar</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Categorias;
