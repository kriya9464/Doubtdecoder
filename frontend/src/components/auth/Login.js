import React from 'react';
import './login.css';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

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
            <img src="" alt="" />
            <button  onClick={handleSubmit}className="login_btn">Login</button>
        </div>
    </div>

  );
}

export default Login