import React, { useEffect } from 'react'
import netflixLogo from './assets/Netflix_Logo_PMS.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';
import { addNOwPlayingMovies } from '../utils/movieSlice';
import useNowPlayingMovies from './hooks/usemivielist';
import Maincontainer from './maincontainer';
import SecondaryContainer from './secondaryContainer';

const Browse = () => {
    const Dispatch = useDispatch()
    const navigate = useNavigate();
    const userData = useSelector(state => state.user)
    const storedData = localStorage.getItem('myData');
    console.log(storedData)
    // console.log(userData)

    function handleSignOut() {
        signOut(auth).then(() => {

            Dispatch(removeUser())

        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {

        if (userData) {
            navigate('/browse')
        }
        else {
            navigate('/')
        }
    }, [userData])

    //api call
    useNowPlayingMovies("now_playing")


    return (<>
        <div className='bg-black w-[100%]'>
            <div className='w-[80%] m-[auto] flex items-center justify-between'>
                <div>
                    <div>
                        <img className='w-44' src={netflixLogo} alt='netflix-logo' />
                    </div>
                </div>
                <div>
                    <button className='bg-white p-3 rounded-sm' onClick={handleSignOut}>Logout</button>
                </div>
            </div>
        </div>
        <Maincontainer />
        <SecondaryContainer />
    </>

    )
}

export default Browse