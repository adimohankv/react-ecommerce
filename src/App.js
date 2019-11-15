import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import Login from './pages/login-page/login-page';
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/" component={ShopPage} />
        <Route path="/signin" component={Login} />
      </Switch>
    </div>
  );
};


export default App;