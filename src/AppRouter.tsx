import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { useAuthContext } from './hooks/AuthContextProvider';

export const AppRouter = () => {

    const { authState } = useAuthContext();
    // status = 'no-authenticated';

    if (status === 'checking') return <div className="loading">Checking credentials...</div>

    return (
        <BrowserRouter>
            <Routes>
                {
                    authState === 'authenticated'
                        ? <Route path="/*" element={<PrivateRoutes />} />
                        : <Route path="/*" element={<PublicRoutes />} />
                }

                <Route path='*' element={<Navigate to='/login' replace />} />

            </Routes>
        </BrowserRouter>
    )
}