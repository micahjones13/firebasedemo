import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Dashboard from './components/dashboard/Dashboard.js';
import ProjectDetails from './components/projects/ProjectDetails.js';
import SignIn from './components/auth/SignIn.js';
import SignUp from './components/auth/SignUp.js';
import CreateProject from './components/projects/CreateProject.js';

//<Switch> makes sure that only one route is loaded up at a time
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path = '/' component = {Dashboard} />
        <Route path = '/project/:id' component = {ProjectDetails} />
        <Route path = '/signin' component = {SignIn} />
        <Route path = '/signup' component = {SignUp} />
        <Route path = '/create' component = {CreateProject} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
