import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import Doctors from './components/Doctors';

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<Navigate to='/' replace />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/employee' element={<Doctors />} />
            <Route path='/health-seaker' element={<Doctors />} />
            <Route path='/user-approval-process' element={<Doctors />} />
            <Route path='/role' element={<Doctors />} />
            <Route path='/appointments' element={<Doctors />} />
            <Route path='/appointments/calendar' element={<Doctors />} />
            <Route path='/appointments/allocate-slot-form' element={<Doctors />} />
            <Route path='/appointments/retract-slot' element={<Doctors />} />
            <Route path='/appointments/reassign' element={<Doctors />} />
            <Route path='/inspiration-fact-mgmt' element={<Doctors />} />
            <Route path='/order-mgmt' element={<Doctors />} />
            <Route path='/diet-menu-mgmt' element={<Doctors />} />
            <Route path='/ingredient-mgmt' element={<Doctors />} />
            <Route path='/activity-mgmt' element={<Doctors />} />
        </Routes>
    );
};