import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
// import Dashboard from './Components/Dashboard/Dashboard'
// import Job from './Components/Job/Job';
// import Action from './Components/Action/Action';
// import Contacts from './Components/Contacts/Contacts';
// import Companies from './Components/Companies/Companies';
// import AddJob from './Components/AddJob/AddJob';
// import AddAction from './Components/AddAction/AddAction';
// import AddContact from './Components/AddContact/AddContact';
// import AddCompany from './Components/AddCompanies/AddCompany';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import {withRouter} from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      {props.location.pathname !== '/' ?
        <Header/> : null
      }
      <Switch>
        <Route exact path="/" component={Login}/>
        {/* <Route path="/dashboard" component={Dashboard}/>
        <Route path="/job" component={Job}/>
        <Route path="/action" component={Action}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/companies" component={Companies}/>
        <Route path="/add_job" component={AddJob}/>
        <Route path="/add_action" component={AddAction}/>
        <Route path="/add_contact" component={AddContact}/>
        <Route path="/add_company" component={AddCompany}/> */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default withRouter(App);
