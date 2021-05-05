import React, { useState, createRef, useEffect } from 'react'

import styles from '../css/Navbar.module.css'
import MenuIcon from './MenuIcon'
import Nav from './Nav'


function Navbar(props) {

    const { windowWidth } = props

    const { omega, getBeta, container, menu, menuDown, menuUp, menuIcon, navLinkContainer } = styles

    const Menu = createRef()

    
    const [isMenu, setIsMenu] = useState(true)
    const [closeMenu, setCloseMenu] = useState(false)
    const [smallDisplay, setSmallDisplay] = useState(window.innerWidth < 768)
    const [navHeight, setNavHeight] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            const navContainer = document.querySelector('nav')
            setNavHeight(navContainer.offsetHeight)
            setSmallDisplay(window.innerWidth < 768)
            setCloseMenu(false)
            setIsMenu(true)
        }
        handleResize()
    },[windowWidth])

    useEffect(() => {
        if (smallDisplay){
            if(isMenu){
                Menu.current.classList.remove(menuDown)
            }
            else {
                Menu.current.classList.add(menuDown)
                if(closeMenu){
                    Menu.current.classList.add(menuUp)
                }
                else {
                    Menu.current.classList.add(menuUp)
                }
            } 
        }
    }, [isMenu, Menu, menuDown, menuUp, closeMenu, smallDisplay])

    return (
        <nav>
            {smallDisplay &&
            <div 
                className={menu} 
                style={{paddingTop: navHeight}}
                ref={Menu}>
                <Nav
                    isMenu={isMenu}
                    closeMenu={closeMenu}
                    setIsMenu={setIsMenu}
                    setCloseMenu={setCloseMenu} />
            </div>
            }
            <div className={container}>
                {smallDisplay &&
                <div className={menuIcon}>
                    <MenuIcon 
                        isMenu={isMenu}
                        closeMenu={closeMenu}
                        setIsMenu={setIsMenu}
                        setCloseMenu={setCloseMenu}/>
                </div>}
                <h1 className={omega}>
                    Omega
                </h1>
                {!smallDisplay &&
                <div className={navLinkContainer}>
                    <Nav
                        isMenu={isMenu}
                        closeMenu={closeMenu}
                        setIsMenu={setIsMenu}
                        setCloseMenu={setCloseMenu} />
                </div>}
                <h2 className={getBeta}>
                    Get Beta Access
                </h2>
            </div>
        </nav>
    )
}

export default Navbar
