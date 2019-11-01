import React from 'react';
import './App.css';

import Home from './pages/Home';
import Room from './pages/Room';
import Rooms from './pages/Rooms';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" render={() => <Home />}/>
      <Route exact path="/rooms/:slug" render={() => <Room />}/>
      <Route exact path="/rooms" render={() => <Rooms />}/>
      <Route render={() => <Error />}/>
    </Switch>
    
      
      
    </>
  );
}

export default App;
