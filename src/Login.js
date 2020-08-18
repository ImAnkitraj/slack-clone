import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core';
import { auth } from 'firebase';
import { provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn =()=>{
        auth().signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(err => alert(err.message))
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' alt=''/>
                <h1>Sign in to Slack</h1>
                <p>Enjoy, communicate, share</p>
                <Button onClick={signIn} >Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
