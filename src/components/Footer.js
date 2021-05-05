import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../css/Footer.module.css'


function Footer() {

    const {link, activeLink, omega, navLinkContainer, copyright, container, hr} = styles

    return (
        <footer>
            <div className={container}>
                <h1 className={omega}>
                    Omega
                </h1>
                <hr className={hr}/>
                <div className={navLinkContainer}>
                    <NavLink 
                        className={link} 
                        activeClassName={activeLink} 
                        exact 
                        to='/support'>
                        Support
                    </NavLink>
                    <NavLink 
                        className={link} 
                        activeClassName={activeLink} 
                        exact 
                        to='/pp'>
                        Privacy Policy
                    </NavLink>
                    <NavLink 
                        className={link} 
                        activeClassName={activeLink}
                        exact 
                        to='/tc'>
                        Terms and Conditions
                    </NavLink>
                </div>
                <hr className={hr}/>
                <h2 className={copyright}>
                    &#169; 2020 UXTheme, &nbsp;All Rights Reserved
                </h2>
            </div>
        </footer>
    )
}

export default Footer
