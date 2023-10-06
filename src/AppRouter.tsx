import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

type Status = 'checking' | 'authenticated' | 'no-authenticated'

const status: Status = 'no-authenticated'

export const AppRouter = () => {

    if (status === 'checking') return <div className="loading">Checking credentials...</div>

    return (
        <BrowserRouter>
            <Routes>
                {
                    status === 'authenticated'
                        ? <Route path="/*" element={<PrivateRoutes />} />
                        : <Route path="/*" element={<PublicRoutes />} />
                }

                <Route path='*' element={<Navigate to='/login' replace />} />

            </Routes>
        </BrowserRouter>
    )
}