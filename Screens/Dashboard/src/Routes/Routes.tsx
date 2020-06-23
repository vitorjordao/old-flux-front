import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Auth from '../Auth/Auth';
import ProtectedRoute from '../Auth/ProtectedRoute';
import Screens from '../Screens/Screens';
import Plan from '../Screens/Plan/Plan';
import Home from '../Screens/Home/Home';
import User from '../Screens/User/User';

function Routes() {

  return (
    <Router basename="/Dashboard/build/">
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <Route exact path="/home">
          <ProtectedRoute Component={() => <Screens Component={() => <Home />} />} permissions={["free"]} />
        </Route>
        <Route exact path="/plans">
          <ProtectedRoute Component={() => <Screens Component={() => <Plan />} />} permissions={["free"]} />
        </Route>
        <Route exact path="/user">
          <ProtectedRoute Component={() => <Screens Component={() => <User />} />} permissions={["free"]} />
        </Route>
        <Route path="*">
          <Screens Component={() => <h1>Not found</h1>} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
