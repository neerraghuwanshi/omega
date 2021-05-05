import React, { useEffect, useState, createContext } from 'react'

import styles from '../css/Wrapper.module.css'
import Footer from './Footer'
import Navbar from './Navbar'

export const WindowWidthContext = createContext()

function Wrapper(props) {

    const [windowWidth, setWindowWidth] = useState(0)


    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
          window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div 
            className={styles.container}>
            <Navbar windowWidth={windowWidth}/>
            <div>
                <WindowWidthContext.Provider value={windowWidth}>
                    {props.children}
                </WindowWidthContext.Provider>
            </div>
            <Footer/>
        </div>
    )
}

export default Wrapper
