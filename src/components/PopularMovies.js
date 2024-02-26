import React from 'react'
import useNowPlayingMovies from './hooks/usemivielist'
import { useSelector } from 'react-redux'
import MoviesCard from './MoviesCard'

const PopularMovies = () => {
    useNowPlayingMovies("popular")
    const popularMoviesData = useSelector(data => data.
        movie.popularMovies)

    return (
        <>
            <div>PopularMovies</div>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex gap-3'>
                    {popularMoviesData?.map((movieImg, key) => {
                        return <div className='w-60'>
                            <MoviesCard key={key} image={movieImg.backdrop_path} />
                        </div>
                    })}
                </div>
            </div>
        </>

    )
}

export default PopularMovies