import React from 'react'
import logo from '../img/ego-logo.png'
import menuBttn from '../img/menu-bttn.png'
import { useLocation } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {
    let location = useLocation()

    return (
        <nav>
            <ul>
                <div className='first-section-navbar'>
                    <a href="/"><li><img src={logo} alt="logo not found" height='40px' /></li></a>
                    <li className={`models ${location.pathname.includes('details') ? '' : 'selected'}`}>
                        <h3>Modelos</h3>
                    </li>
                    <li className={`model-details ${location.pathname.includes('details') ? 'selected' : ''}`}>
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
