import React from 'react'

import styles from '../css/Feature.module.css'


function Feature(props) {

    const {imageUrl, heading, para} = props

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={`images/demos/demo2/features/${imageUrl}`}
                    alt='feature'/>
            </div>
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.para}>{para}</p>
        </div>
    )
}

export default Feature
