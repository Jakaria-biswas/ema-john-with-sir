import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const RequireAuth = ({children}) => {
        
      const {newUser} = useFirebase()
       
      const location = useLocation();


       if(!newUser){
           return <Navigate to='/login' state={{from:location}} replace ></Navigate>
       }
    



       
    return children;
};

export default RequireAuth;