import React from 'react'
import { Img_Path } from '../utils/constant'

const MoviesCard = ({ image }) => {
    return (
        <div className='flex'>
            <img src={`${Img_Path}${image}`} />
        </div>
    )
}

export default MoviesCard