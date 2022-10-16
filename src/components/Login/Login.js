import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import GoogleIcon from '../../images/google-brands.png'
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase.in';
import useFirebase from '../hooks/useFirebase';

const Login = () => {

         const {handleEmail, handlePassword, handleLogin, newUser } = useFirebase();
         
      

        


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>

                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={handleEmail} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={handlePassword}  type="password" name="password" required/>
                    </div>
                    <div className="submit-btn">
                        <input type="submit" value="Login" />
                    </div>
                </form>
                <p>
                    New to Ema-jhon? <Link to="/register">Create New Account</Link>
                </p>
                <div className="or">
                    <p>or</p>
                </div>
                <div className="google-signin">
                    <button> <img src={GoogleIcon} alt="" /> continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;