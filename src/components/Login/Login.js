import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';
import { auth, provider } from '../../firebase'
import { login } from '../../features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {

 const dispatch = useDispatch()

 //google auth login
 const signIn = () => {
  auth.signInWithPopup(provider)
   .then(({ user }) => {
    dispatch(login({
     displayName: user.displayName,
     email: user.email,
     photoUrl: user.photoURL
    }))
   })
   .catch(err => alert(err.message))
 }

 return (
  <div className="login">
   <div className="login__container">
    <img src="https://s3.amazonaws.com/smi-www/prod/wp-content/uploads/gmail-logo-2.png" alt="gmail" />
    <Button onClick={signIn} variant="contained" color="primary">Login</Button>
   </div>
  </div>
 )
}

export default Login
