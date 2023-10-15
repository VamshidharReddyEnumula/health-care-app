import { useState } from 'react';
import { AuthState } from '../types/common';

// type AuthState = 'checking' | 'authenticated' | 'no-authenticated';

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>('checking');

  const login = () => {
    // Simulate an asynchronous login process (e.g., making an API call)
    setTimeout(() => {
      setAuthState('authenticated');
    }, 1000);
    // redirect("/");
  };

  const logout = () => {
    // Simulate an asynchronous logout process (e.g., making an API call)
    setTimeout(() => {
      setAuthState('no-authenticated');
    }, 1000);
    redirect("/");
  };

  const redirect = (path: string) => {
    // You can define a function to trigger a redirect
    // This function can be used in your components to perform the redirection
    window.location.href = path; // Redirect using the window location
  };

  return { authState, login, logout, redirect };
};

export default useAuth;
