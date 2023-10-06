import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './components/SignIn';
import SignUp from './components/SignUp';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    );
};