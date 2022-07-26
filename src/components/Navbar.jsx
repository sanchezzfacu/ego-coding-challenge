import React from 'react'
import logo from '../img/ego-logo.png'
import menuBttn from '../img/menu-bttn.png'
import '../css/Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <div className='first-section-navbar'>
                    <li><img src={logo} alt="logo not found" height='40px' /></li>
                    <li>
                        <h3>Modelos</h3>
                    </li>
                    <li>
                        <h3>Ficha de modelo</h3>
                    </li>
                </div>
                <li className='menu-section'>
                    <h3>Menú</h3> <img src={menuBttn} alt="icon not found"/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
