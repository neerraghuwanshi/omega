import React, { useEffect, useState, useContext } from 'react'

import Feature from './Feature'
import styles from '../css/Demo2.module.css'
import { WindowWidthContext } from './Wrapper'

function Demo2() {

    const { container, heading, para, video, featureContainer, playButton, videoContainer } = styles

    const windowWidth = useContext(WindowWidthContext)

    const getCurrentThumbnailUrl = () => {
        let url = 'images/demos/demo2/thumbnail.png'
        if (window.innerWidth > 768){
            url =  'images/demos/demo2/thumbnail@3x.png'
        }
        else if (window.innerWidth > 400){
            url =  'images/demos/demo2/thumbnail@2x.png'
        }
        else{
            url = 'images/demos/demo2/thumbnail.png'
        }
        return url
    }

    const [thumbnailUrl, setThumbnailUrl] = useState(getCurrentThumbnailUrl())

    const togglePlay = () => {
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

    useEffect(() => {
        const handleResize = () => {
            setThumbnailUrl(getCurrentThumbnailUrl())
        }
        handleResize()
    }, [windowWidth])

    return (
        <section>
            <div className={container}>
                <h2 className={heading}>
                    Why Omega would be your best fit?
                </h2>
                <p className={para}>
                    Watch this 1 min video to learn about omega.
                </p>
                <div className={playButton} onClick={togglePlay}>
                    <img 
                        alt='Play Button'
                        src='images/demos/demo2/path.png'
                        srcSet={
                            'images/demos/demo2/path@2x.png 2x, images/demos/demo2/path@3x.png 3x'
                        }/>
                </div>
                <div className={videoContainer}>
                    <video
                        onClick={togglePlay}
                        className={video}
                        poster={thumbnailUrl}>
                        <source 
                            type='video/mp4'
                            src='videos/demo2/demoVideo.mp4'/>
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
        </section>
    )
}

export default React.memo(Demo2)
