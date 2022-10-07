import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../../images/google-brands.png'
const Register = () => {
       
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState();

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConformPassword = event => {
        setConformPassword(event.target.value)
    }

    const handleRegister = event => {
         event.preventDefault();

         console.log("email - ", email)
         console.log("password - ", password)
         console.log("conformPassword - ", conformPassword)
         
    }


    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Register</h2>

            <form onSubmit={handleRegister}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="text" name="email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" />
                </div>
                <div className="input-group">
                    <label htmlFor="conform password">Conform password</label>
                    <input onBlur={handleConformPassword} type="password" name="conform password" />
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
    </div>
    );
};

export default Register;