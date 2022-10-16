import React from 'react';
import { Link } from 'react-router-dom';

import GoogleIcon from '../../images/google-brands.png'
import useFirebase from '../hooks/useFirebase';



const Register = () => {

   const {handleEmail,handlePassword, handleRegister, newUser} = useFirebase()
    
 console.log("from register",newUser)

    return (<div className='form-container'>
        <div>
            <h2 className='form-title'>Register</h2>

            <form onSubmit={handleRegister} >
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleEmail}  type="text" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePassword}  type="password" name="password" required />
                </div>
               
                <div className="submit-btn">
                    <input type="submit" value="Register" />
                </div>

            </form>
            <p>
                already have an account? <Link to="/login">Login</Link>
            </p>
            <div className="or">
                <p>or</p>
            </div>
            <div className="google-signin">
                <button> <img src={GoogleIcon} alt="" /> continue with Google</button>
            </div>
        </div>
    </div>);
};

export default Register;