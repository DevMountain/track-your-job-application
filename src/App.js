import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard'
import Job from './Components/job'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/job" component={Job}/>
        <Route path="/action" component={Action}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/companies" component={Companies}/>
        <Route path="/add_job" component={AddJob}/>
        <Route path="/add_action" component={AddAction}/>
        <Route path="/add_contact" component={AddContact}/>
        <Route path="/add_company" component={AddCompany}/>
      </Switch>

    </div>
  );
}

export default App;
