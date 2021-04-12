import React from 'react'

import Feature from './Feature'
import styles from '../css/Demo2.module.css'

function Demo2() {

    const { container, heading, para, video, featureContainer, playButton, videoContainer } = styles

    const togglePlay = (visibility) => {
        let demoVideo = document.getElementsByClassName(video)[0]
        if (demoVideo.paused){
            demoVideo.play()
        }
        else{
            demoVideo.pause()
        }
        let button = document.getElementsByClassName(playButton)[0]
        if (button.style.visibility === 'hidden'){
            button.style.visibility = 'visible'
        }
        else{
            button.style.visibility = 'hidden'
        }
    }

    return (
        <content>
            <div className={container}>
                <h2 className={heading}>
                    Why Omega would be your best fit?
                </h2>
                <p className={para}>
                    Watch this 1 min video to learn about omega.
                </p>
                <div className={playButton} onClick={togglePlay}>

                </div>
                <div className={videoContainer}>
                    <video
                        onClick={togglePlay}
                        className={video}
                        poster='images/demos/demo2/thumbnail.png'>
                        <source 
                            src="videos/demo2/demoVideo.mp4" 
                            type="video/webm" />
                    </video>
                </div>
                <div className={featureContainer}>
                    <Feature 
                        heading='Fully Responsive'
                        para='With lots of unique blocks, you can easily build a page without coding.'
                        imageUrl='sidebar.png'/>
                    <Feature 
                        heading='Multiple Layouts'
                        para='With lots of unique blocks, you can easily build a page without coding.'
                        imageUrl='layout-11.png'/>
                    <Feature 
                        heading='Faster Loading'
                        para='With lots of unique blocks, you can easily build a page without coding.'
                        imageUrl='spaceship.png'/>
                    <Feature 
                        heading='Super Support'
                        para='With lots of unique blocks, you can easily build a page without coding.'
                        imageUrl='shape.png'/>
                    <Feature 
                        heading='Rich Documentation'
                        para='With lots of unique blocks, you can easily build a page without coding.'
                        imageUrl='path.png'/>
                    <Feature 
                        heading='Lifetime Updates'
                        para='With lots of unique blocks, you can easily build a page without coding.'
                        imageUrl='loop.png'/>
                </div>
            </div>
        </content>
    )
}

export default Demo2
