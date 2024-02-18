import React from 'react'

export const validate = (email, password, userName, showSignIn) => {
    console.log("valid", email, password, showSignIn)
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const validName = /^[A-Za-z]+(?:[-\s'][A-Za-z]+)*$/.test(userName)
    if (showSignIn) {
        if (!validEmail) return "EmailId is not valid";
        if (!validPassword) return 'password is not valid'
    }
    else {
        console.log("hello")
        if (!validName) return 'Name is not valid'
        if (!validEmail) return "EmailId is not valid";
        if (!validPassword) return 'password is not valid'

    }



    return null;
}
