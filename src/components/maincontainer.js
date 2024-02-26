import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const Maincontainer = () => {
    const movies = useSelector((store) => store?.movie?.NOwPlayingMovies)
    if (movies == null) return
    const firstMovies = movies[0]

    const { original_title, overview, id } = firstMovies

    return (
        <>
            <VideoTitle orignalTitle={original_title} overview={overview} />
            <VideoBackground moviewId={id} />
        </>
    )
}

export default Maincontainer