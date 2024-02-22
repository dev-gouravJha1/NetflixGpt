import React, { useEffect } from 'react'
import netflixLogo from './assets/Netflix_Logo_PMS.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';
import { options } from '../utils/constant';

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
        getNOwPlayingMovies()
        if (userData) {
            navigate('/browse')
        }
        else {
            navigate('/')
        }
    }, [userData])

    //api call

    const getNOwPlayingMovies = async () => {
        const list = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const response = await list.json();
        console.log(response)
    }

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
            <div className='absolute top-20'>Browse</div>
        </div>
    </>

    )
}

export default Browse