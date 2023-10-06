import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';
import { AppRouter } from './AppRouter';

function App() {
  // Create a client
const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Auth0Provider
        domain="{yourDomain}"
        clientId="{yourClientId}"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
    > */}
      <div className="App">
      <AppRouter />
    </div>
    {/* </Auth0Provider> */}
    </QueryClientProvider>
  );
}

export default App;
