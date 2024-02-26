import React, { useEffect } from 'react'
import { options } from '../utils/constant'
import { addTrailer } from '../utils/movieSlice'
import { useDispatch, useSelector } from 'react-redux'

const VideoBackground = ({ moviewId }) => {
    const Dispatch = useDispatch()
    const key = useSelector((data) => data?.movie?.trailer?.key)
    console.log(key)
    const playVideo = async () => {
        const videoLink = await fetch(`https://api.themoviedb.org/3/movie/${moviewId}/videos`, options)
        const response = await videoLink.json()
        const data = response.results
        console.log(response)

        const filtertrailer = data.filter((video) => {
            return video.type == "Trailer"
        })
        const trailer = filtertrailer.length ? filtertrailer[0] : data[0]
        console.log("Trailer", trailer)
        Dispatch(addTrailer(trailer))
    }
    useEffect(() => {
        playVideo()
    }, [])
    return (
        <div className='absolute top-[72px] z-0 overflow-hidden w-[100%]'>
            <iframe className='w-[100%] aspect-video overflow-hidden' src={"https://www.youtube.com/embed/" + key + "?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default VideoBackground