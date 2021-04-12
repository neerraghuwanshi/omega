import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../css/Navbar.module.css'


function Navbar() {

    const {link, activeLink, omega, navLinksContainer, getBeta, container} = styles

    return (
        <nav>
            <div className={container}>
                <h1 className={omega}>
                    Omega
                </h1>
                <div className={navLinksContainer}>
                    <NavLink 
                        className={link} 
                        activeClassName={activeLink} 
                        exact 
                        to='/'>
                        Demos
                    </NavLink>
                    <NavLink 
                        className={link} 
                        activeClassName={activeLink} 
                        exact 
                        to='/pages'>
                        Pages
                    </NavLink>
                    <NavLink 
                        className={link} 
                        activeClassName={activeLink}
                        exact 
                        to='/support'>
                        Support
                    </NavLink>
                </div>
                <h2 className={getBeta}>
                    Get Beta Access
                </h2>
            </div>
        </nav>
    )
}

export default Navbar
