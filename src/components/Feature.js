import React from 'react'

import styles from '../css/Feature.module.css'


function Feature(props) {

    const {imageUrl, heading, para} = props

    let strippedImageUrl = imageUrl.split('.')
    let fileName = strippedImageUrl[0]
    let extension = strippedImageUrl[1]

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={`images/demos/demo2/features/${imageUrl}`}
                    srcSet={
                        `images/demos/demo2/features/${fileName}@2x.${extension} 2x, images/demos/demo2/features/${fileName}@3x.${extension} 3x`
                    }
                    alt='feature'/>
            </div>
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.para}>{para}</p>
        </div>
    )
}

export default Feature
