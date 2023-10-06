import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './components/SignIn';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    );
};