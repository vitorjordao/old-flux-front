import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Auth from '../Auth/Auth';
import ProtectedRoute from '../Auth/ProtectedRoute';

function Routes() {

  return (
    <Router basename="/Dashboard/build/">
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <Route exact path="/home">
          <ProtectedRoute Component={() => <h1>Home</h1>} permissions={["*"]} />
        </Route>
        <Route exact path="/plans">
          <ProtectedRoute Component={() => <h1>Plans</h1>} permissions={["free"]} />
        </Route>
        <Route path="*">
          <>Not found</>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
