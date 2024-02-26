import React from 'react'
import PopularMovies from './PopularMovies'
import TrandingMovies from './TrandingMovies'
import NowPlayingMovies from './NowPlayingMovies'


const SecondaryContainer = () => {
    return (
        <>
            <NowPlayingMovies />
            <PopularMovies />
            <TrandingMovies />
        </>

    )
}

export default SecondaryContainer