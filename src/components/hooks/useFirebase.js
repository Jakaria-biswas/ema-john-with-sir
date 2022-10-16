import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.in";

const useFirebase = () => {


        const [newUser, setNewUser] = useState({});
        
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        


        const handleEmail = e => {
                setEmail(e.target.value)
        }
        const handlePassword = e => {
                setPassword(e.target.value)
        }


        const navigate = useNavigate();
        /// create new user through email and password
        const handleRegister = e => {
                e.preventDefault()

                createUserWithEmailAndPassword(auth, email, password)
                        .then(result => {
                                const user = result.user;
                                if (user) {
                                        setNewUser(user)
                                        alert("User create successfully");
                                        navigate("/login")
                                }


                        })
                        .catch(error => {
                               alert(error)
                        })
        }



        /// login user 
        

        const handleLogin = e => {
                 e.preventDefault()

                 signInWithEmailAndPassword(auth, email, password)
                 .then(result => {
                           const user  = result.user;
                           if(user){
                                setNewUser(user)
                                alert("Login successfully")
                                navigate('/orders')
                                
                           }
                          
                 })
                 .catch(error => {
                        alert(error)
                 })


        }


        useEffect(() => {

                onAuthStateChanged(auth, user => {
                        setNewUser(user)
                })

        }, [])



        /// sign out user

        const SignOutUser = ()=> {
                  signOut(auth)
                  .then(result => {})
                  .catch(error => {})
        }
        return { 
                handleEmail,
                handlePassword,
                handleRegister,
                handleLogin,
                SignOutUser,
                newUser
              

        }


}

export default useFirebase;