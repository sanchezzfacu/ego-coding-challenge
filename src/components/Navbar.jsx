import React from 'react'
import logo from '../img/ego-logo.png'
import menuBttn from '../img/menu-bttn.png'
import { useLocation } from 'react-router-dom'
import '../css/Navbar.css'
import closeBtn from '../img/close-btn.png'

function Navbar() {
    let location = useLocation()

    return (
        <nav>
            <ul>
                <div className='first-section-navbar'>
                    <a href="/"><li><img src={logo} alt="logo not found" height='40px' /></li></a>
                    <li className={`models ${location.pathname.includes('details') ? '' : 'selected'}`}>
                        <h3 className='h3-models'>Modelos</h3>
                    </li>
                    <li className={`model-details ${location.pathname.includes('details') ? 'selected' : ''}`}>
                        <h3 className='h3-models'>Ficha de modelo</h3>
                    </li>
                </div>
                <input type="checkbox" id="check"/>
                <li className='menu-section'>
                    <label htmlFor="check"> <img src={menuBttn} alt="icon not found"/></label>
                </li>
                <div className="drop-down-menu-container">
                    <div className='drop-down-menu-inner'>
                        <div className='drop-down-child'>
                            <div className='close-menu'>
                                <label htmlFor='check'><h2>Cerrar</h2><img src={closeBtn} alt='img not found' height='30px'/></label> 
                            </div>

                            <li>
                                <h3>Modelos</h3>
                            </li>
                            <li>
                                <h3>Servicios y Accesorios</h3>
                            </li>
                            <li>
                                <h3>Financiación</h3>
                            </li>
                            <li>
                                <h3>Reviews y Comunidad</h3>
                            </li>
                        </div>
                        <hr />
                        <div className="drop-down-child">
                            <li>
                                <h3>Toyota Mobility Service</h3>
                            </li>
                            <li>
                                <h3>Totoya Gazoo Racing</h3>
                            </li>
                            <li>
                                <h3>Toyoya Híbridos</h3>
                            </li>
                        </div>
                        <hr />

                        <div className="drop-down-child">
                            <li>
                                <h3>Concesionarios</h3>
                            </li>
                            <li>
                                <h3>Test Drive</h3>
                            </li>
                            <li>
                                <h3>Contacto</h3>
                            </li>
                        </div>
                        <hr />

                        <div className="drop-down-child about">
                            <li>
                                <h3>Actividades</h3>
                            </li>
                            <li>
                                <h3>Servicios al Cliente</h3>
                            </li>
                            <li>
                                <h3>Ventas Especiales</h3>
                            </li>
                            <li>
                                <h3>Innovación</h3>
                            </li>
                            <li>
                                <h3>Prensa</h3>
                            </li>
                            <li>
                                <h3>Acerca de...</h3>
                            </li>
                        </div>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
