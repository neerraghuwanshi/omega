import React from 'react'

import styles from '../css/Demo3.module.css'


function Demo3() {

    const { mainContainer, container, heading, para, imageContainer, leftImage, rightImage, image } = styles

    return (
        <section>
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
                            alt='leftImage'
                            className={leftImage + ' ' + image} 
                            src='images/demos/demo3/leftImage.png'
                            srcSet={
                                'images/demos/demo3/leftImage@2x.png 2x, images/demos/demo3/leftImage@3x.png 3x'
                            }/>
                        <img
                            alt='rightImage'
                            className={rightImage + ' ' + image} 
                            src='images/demos/demo3/rightImage.png'
                            srcSet={
                                'images/demos/demo3/rightImage@2x.png 2x, images/demos/demo3/rightImage@3x.png 3x'
                            }/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Demo3
