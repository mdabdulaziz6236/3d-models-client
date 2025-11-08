import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading/Loading';

const PrivetRoutes = ({children}) => {
    const {user,loading} = use(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate state={location?.pathname} to='/login'></Navigate>
    }

    return children
};

export default PrivetRoutes;