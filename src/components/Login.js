import React, { useEffect, useState } from 'react'
import BannerImg from './assets/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import Header from './Header'
import { validate } from '../utils/validate'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Login = () => {
    const [showSignIn, setSignUp] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [userName, setname] = useState('')
    const [message, setmessage] = useState('');
    const [messageForName, setMessageForName] = useState(true)
    const navigate = useNavigate()

    const selector = useSelector(state => state.user)
    console.log(selector)

    useEffect(() => {
        checkUserISLoginOrNot()
    }, [selector])

    const setEmailFun = (e) => {
        setEmail(e.target.value)

    }

    const setPasswordFun = (e) => {
        setPassword(e.target.value)
    }

    const setnameFun = (e) => {
        setname(e.target.value)
        console.log(userName)
    }

    const handleSignUp = () => {
        setSignUp(!showSignIn)
    }



    const handleButoonClick = (e) => {
        //validate
        e.preventDefault();
        console.log(email, password, userName)
        const msg = validate(email, password, userName, showSignIn)
        setmessage(msg)
        localStorage.setItem('myData', JSON.stringify(userName));
        if (msg) return;

        if (!showSignIn) {
            createUserWithEmailAndPassword(auth, email, password, userName)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
        }

    }



    function checkUserISLoginOrNot() {
        if (selector != null) {
            navigate("/browse")
        }
    }

    return (

        <>
            <Header />
            <div className='relative inline-block'>
                <img src={BannerImg} alt='baner-img' />
                <div className='absolute top-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-50'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-11 rounded-sm'>
                    <form className='text-white'>
                        <h1 className='text-[2rem] font-bold color text-white'>{showSignIn ? 'Sign In' : 'Sign Up'}</h1>
                        {!showSignIn && (<div><input value={userName} onChange={(e) => { setnameFun(e) }} className='m-2 p-2 bg-[#101010] bg-opacity-50 w-72 leading-8 border border-[#8c8c8e] border-solid rounded-[5px]' type="text" placeholder='Full Name' /><br /></div>
                        )}
                        <input className='m-2 p-2 bg-[#101010] bg-opacity-50 w-72 leading-8 border border-[#8c8c8e] border-solid rounded-[5px]' value={email} onChange={(e) => { setEmailFun(e) }} type="text" placeholder='Email Address' />
                        <br />
                        <input className='m-2 p-2 bg-[#101010] bg-opacity-50 w-72 leading-8 border border-[#8c8c8e] border-solid rounded-[5px]' value={password} onChange={(e) => { setPasswordFun(e) }} type="password" placeholder='Password' />
                        {/* <br /> */}
                        <p className='ml-2 text-red-600 font-bold'>{message}</p>
                        <button onClick={handleButoonClick} className='m-2 p-2 bg-[#e50914] w-72 rounded-sm text-white'> {showSignIn ? 'Sign In' : 'Sign Up'}</button>
                        <p className='py-4 m-2 p-2' onClick={handleSignUp}>
                            {showSignIn ? 'New to netflix sign Up Now' : 'Already Registered'}
                        </p>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
