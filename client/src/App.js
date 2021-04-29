import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Gallery from './components/gallery';
import Login from './components/login';

function App () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
          <Login />
          </Route>
          <Route path='/gallery'>
          <Gallery />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
