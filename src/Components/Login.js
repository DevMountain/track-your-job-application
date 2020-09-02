import React from 'react';
import axios from 'axios';
// import './Login.css';
import {loginUser} from '../redux/authReducer';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import { registerUser} from '../../redux/reducer';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            newUser: false
        }
    }

    styles = {
        page: {
            height: '100vh',
            width: '100vw',
            backgroundColor: '#F6F6F6',
            display: 'flex',
            flexDirection: 'column'
        },
        header: {
            color: 'gray',
            // color: '$primary-text-',
            fontSize: '60',
            textAlign: 'center',
            margin: '0 auto',
            height: '20%',
            width: '100%'
        },
        centerContainer: {
            height: '60%',
            width: '100%',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',


        },
        footer: {
            color: 'gray',
            // color: '$primary-text-color',
            fontSize: '60',
            textAlign: 'center',
            margin: '0 auto',
            height: '20%',
            width: '100%'
        }

    }

    // header = styled.h1`
    //     font-size: 60px;
    //     text-align: center;
    //     color: black;
    //     `;
    // headerWrapper = styled.section`
    //     backgroundColor: CFCECE;
    //     margin: 0 auto;
    //     color: 
    //     `;

    // loginPage = {

    // }

    toggle = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        const {email, password} = this.state;
        axios.post('/auth/login', {email, password}).then(res => {
            console.log("this is res.data from login post axios call in Login.js", res.data)
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => {
            console.log(err)
            alert("Login Failed. Try registering as a new user.")
        })
    }


    register = () => {
        const {email, password, firstName, lastName} = this.state;
        axios.post('/auth/register', {email, password, firstName, lastName}).then(res => {
           this.props.loginUser(res.data)
           this.props.history.push('/dashboard') 
        }).catch(err => {
            console.log(err)
            alert("Registration failed. Try another email address.")
        })
    }


    render(){
        //The following is to see what's on the user object, which is created by the axios call...and is put as res.data on the function that corresponds with the action builder in the reducer function. 
        // console.log(this.props.user)
        const {email, password, firstName, lastName, newUser} = this.state;
        return(
            <div style={this.styles.page}>    
                <header style={this.styles.header}>
                    <h1>Simplify your job application process with TYJA.</h1>
                </header>
                <section style={this.styles.centerContainer}>
                    <div className="login-container">
                        <h1>TYJA</h1>
                        <h2>Track Your Job Application</h2>
                        {!newUser ? 
                        <div className='login-inputs'>
                            <div className='input-block'>
                                <p>Username: </p>
                                <input placeholder='email' name="email" value={email} type="text" onChange={e => this.handleChange(e)}/>
                            </div>
                            <div className='input-block'>
                                <p>Password: </p>
                                <input placeholder='password' name="password" value={password} type="text" onChange={e => this.handleChange(e)}/>
                            </div>
                        <div className ='btn-container'>
                            <button onClick={this.login}>Login</button>
                            <button onClick={this.toggle}>Register</button>
                        </div>
                        </div>
                        :
                        <div className='login-inputs'>
                            <div className='input-block'>
                                <p>Email: </p>
                                <input placeholder='Email' name="email" value={email} type="text" onChange={e => this.handleChange(e)}/>
                            </div>
                            <div className='input-block'>
                                <p>Password: </p>
                                <input placeholder='Password' name="password" value={password} type="password" onChange={e => this.handleChange(e)}/>
                            </div>
                            <div className='input-block'>
                                <p>First Name: </p>
                                <input placeholder='First Name' name="firstName" value={firstName} type="text" onChange={e => this.handleChange(e)}/>
                            </div>
                            <div className='input-block'>
                                <p>Last Name: </p>
                                <input placeholder='Last Name' name="lastName" value={lastName} type="text" onChange={e => this.handleChange(e)}/>
                            </div>
                        <div className ='btn-container'>
                            <button onClick={this.register}>Register</button>
                            <button onClick={this.toggle}>I already have an account</button>
                            {/* <button onClick={() => this.register()}>Register</button>
                            <button onClick={() => this.register()}>I already have an account</button> */}
                        </div>
                        </div>
                        }
                    </div>
                </section>
                <div>
                    <p>TYJA © 2020</p>
                    {/* Make About Us a link */}
                    <p>About Us</p>
                    {/* Make Contact Us a link to send email with nodemailer */}
                    <p>Contact Us</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {loginUser})(Login);