import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import CredentialView from './pages/CredentialView';
import './App.css';




function App() {
  return (

      <Router>
        {/* <div>
          <Link to="/">Home</Link>
          <Link to="/cendential">Credential</Link>
        </div> */}
        <Switch>
          <Route exact path="/">
            <Home  />
          </Route>

          <Route path="/cendential/:name">
            <CredentialView  />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
