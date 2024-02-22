import React from 'react'
import netflixLogo from './assets/Netflix_Logo_PMS.png'

const Header = () => {
    return (
        <div className='relative w-screen' style={{ zIndex: 1 }}>
            <div className='absolute px-36 py-2 w-screen' style={{ zIndex: 1 }}>
                <img className='w-44' src={netflixLogo} alt='netflix-logo' />
            </div>
        </div>

    )
}

export default Header