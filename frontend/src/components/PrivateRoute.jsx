import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    let session = true;
  return (
    session? <Outlet/>:<Navigate to='/login'/>
  );
};

export default PrivateRoutes;