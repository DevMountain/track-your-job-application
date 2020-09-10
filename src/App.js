import React from 'react';
// import logo from './logo.svg';
import './App.scss';
// import './styles/reset.scss'
// import './styles/main.css';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard'
import Job from './Components/Job';
import AddJob from './Components/AddJob';
import About from './Components/About';
// import Action from './Components/Action/Action';
// import Contacts from './Components/Contacts/Contacts';
// import Companies from './Components/Companies/Companies';
// import AddAction from './Components/AddAction/AddAction';
// import AddContact from './Components/AddContact/AddContact';
// import AddCompany from './Components/AddCompanies/AddCompany';
import Header from './Components/Header'
import Footer from './Components/Footer';
import {withRouter} from 'react-router-dom';

function App(props) {

  const styles = {
    page: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
    // },
    // header: {
    //   height: '12%',
    //   width: '100%',
    //   backgroundColor: 'white'
    // },
    // mainPage: {
    //   height: '80%',
    //   width: '100%',
      backgroundColor: '#F6F6F6'
    // },
    // footer: {
    //   height: '8%',
    //   width: '100%',
    //   position: 'relative',
    //   bottom: 0

    }
  }
  return (
    <div className="App">
      {props.location.pathname !== '/' ?
        <Header/> : null
      }
      <section style={styles.mainPage}>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
          {/* Had to change this to be exact path with the jobId parameter for it to show up in Job.js on the match.params object. */}
          <Route exact path="/job/:userId/:jobId" component={Job}/>
          <Route path="/addjob" component={AddJob}/>
          <Route path="/about" component={About}/>

          {/* ICEBOX ROUTES: */}
          {/* <Route path="/action" component={Action}/> */}
          {/* <Route path="/contacts" component={Contacts}/> */}
          {/* <Route path="/companies" component={Companies}/> */}
          {/* <Route path="/add_action" component={AddAction}/> */}
          {/* <Route path="/add_contact" component={AddContact}/> */}
          {/* <Route path="/add_company" component={AddCompany}/> */}
        </Switch>
      </section>
      {props.location.pathname !== '/' ?
        <Footer/> : null
      }
      
    </div>
  );
}

export default withRouter(App);
