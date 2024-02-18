import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const Body = () => {

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

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body