import React from 'react'
import styles from '../css/Nav.module.css'
import { NavLink } from 'react-router-dom'


function Nav(props) {

    const { setIsMenu, setCloseMenu } = props
    const { link } = styles

    const onClickHandler = () => {
        setIsMenu(true)
        setCloseMenu(false)
    }

    return (
        <>
            <NavLink 
                className={link} 
                activeClassName={styles.activeLink} 
                exact 
                to='/'
                onClick={onClickHandler}>
                Demos
            </NavLink>

            <NavLink 
                className={styles.link} 
                activeClassName={styles.activeLink} 
                exact 
                to='/projects'
                onClick={onClickHandler}>
                Pages
            </NavLink>

            <NavLink 
                className={styles.link} 
                activeClassName={styles.activeLink} 
                exact 
                to='/support'
                onClick={onClickHandler}>
                Support
            </NavLink>
        </>
    )
}


export default Nav