import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider, UseUserProvider } from './services/userContext';
import Gallery from './components/gallery';
import Login from './components/login';
import Register from "./components/register";

function App () {
  const { user } = UseUserProvider();
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {user.id && (
            <Route path='/gallery' render={() => <Gallery />} />
          )}
          <Route path='/register' render={() => <Register />} />
          <Route path='/' render={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const AppProvider = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}

export default AppProvider;
