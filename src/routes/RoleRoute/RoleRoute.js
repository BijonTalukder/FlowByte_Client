import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const RoleRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location= useLocation()
    const [isAdmin]=useAdmin(user?.email)
    if(loading)
    {
        return <div> locading.....</div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location}}></Navigate>
   
};

export default RoleRoute;