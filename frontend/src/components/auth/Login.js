import React from 'react';
import './login.css';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { Button } from '@mui/material';
import logo from './img/logo.jpeg';

function Login() {

    const handleSubmit = async () => {
        await signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <div className='login_container'>
        <div className="login_content">
            <img src={logo} alt="" />
            <Button  onClick={handleSubmit}className="login_btn" >Login</Button>
        </div>
    </div>

  );
}

export default Login
