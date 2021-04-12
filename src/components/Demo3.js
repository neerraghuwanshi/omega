import React from 'react'

import styles from '../css/Demo3.module.css'


function Demo3() {

    const { mainContainer, container, heading, para, imageContainer, leftImage, rightImage, image } = styles

    return (
        <content>
            <div className={mainContainer}>
                <div className={container}>
                    <h2 className={heading}>
                        Everything is easy
                    </h2>
                    <p className={para}>
                        Create custom landing pages with omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
                    </p>
                    <div className={imageContainer}>
                        <img 
                            className={leftImage + ' ' + image} 
                            src='images/demos/demo3/leftImage.png'
                            alt='leftImage'/>
                        <img
                            className={rightImage + ' ' + image} 
                            src='images/demos/demo3/rightImage.png'
                            alt='rightImage'/>
                    </div>
                </div>
            </div>
        </content>
    )
}

export default Demo3
