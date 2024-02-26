import React from 'react'

const VideoTitle = ({ orignalTitle, overview }) => {
    return (
        <div className='px-28 relative z-10 bg-[#101010] bg-opacity-50 h-[854px] top-[-2px]'>
            <h1 className='text-6xl font-bold pt-44 text-white'>{orignalTitle}</h1>
            <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
            <div className='flex gap-3'>
                <button className='bg-gray-400 p-4 rounded-sm text-white'>Play</button>
                <button className='bg-gray-400 p-4 rounded-sm text-white'>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle