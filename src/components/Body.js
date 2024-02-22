import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
const Body = () => {
    const dispatch = useDispatch()
    // I am going to create Browser routers
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                console.log("hsjsha")
                const { uid, email } = user;
                dispatch(addUser({ uid: uid, email: email }))
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body