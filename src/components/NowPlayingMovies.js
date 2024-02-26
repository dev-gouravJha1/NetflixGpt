import React from 'react'
import MoviesCard from './MoviesCard'
import { useSelector } from 'react-redux'
const NowPlayingMovies = () => {
    const nowPlayingMovies = useSelector(data => data?.movie?.NOwPlayingMovies)
    console.log(nowPlayingMovies)
    return (
        <>
            <div>NowPlayingMovies</div>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex gap-3'>
                    {nowPlayingMovies?.map((movieImg, key) => {
                        return <div className='w-60'>
                            <MoviesCard key={key} image={movieImg.backdrop_path} />
                        </div>
                    })}
                </div>
            </div>




        </>

    )
}

export default NowPlayingMovies