import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import GoogleIcon from '../../images/google-brands.png'
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>

                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
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