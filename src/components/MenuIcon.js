import React, { createRef, useEffect } from 'react'
import styles from '../css/MenuIcon.module.css'


function MenuIcon(props) {

    const {isMenu, closeMenu, setIsMenu, setCloseMenu} = props

    const { container, bar, first, last, firstCross, lastCross, firstMenu, lastMenu } = styles

    const firstBar = createRef()
    const lastBar = createRef()

    const clickHandler = () => {
        setIsMenu(prev => !prev)
        setCloseMenu(prev => !prev)
    }

    useEffect(() => {
        if (isMenu){
            firstBar.current.classList.remove(firstCross)
            lastBar.current.classList.remove(lastCross)
        }
        else {
            firstBar.current.classList.add(firstCross)
            lastBar.current.classList.add(lastCross)
            if(closeMenu){
                firstBar.current.classList.add(firstMenu)
                lastBar.current.classList.add(lastMenu)
            }
            else {
                firstBar.current.classList.remove(firstMenu)
                lastBar.current.classList.remove(lastMenu)
            }
        }
    }, [firstBar, lastBar, isMenu, firstCross, lastCross, firstMenu, lastMenu, closeMenu])

    return (
        <div 
            className={container}
            onClick={clickHandler}>

            <div 
                className={bar + ' ' + first}
                ref={firstBar}>
            </div>

            <div 
                className={bar + ' ' + last}
                ref={lastBar}>
            </div>

        </div>
    )
}


export default MenuIcon