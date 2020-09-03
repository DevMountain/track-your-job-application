import React from 'react';
import axios from 'axios';
import '../styles/components/Login.scss';
import {loginUser} from '../redux/authReducer';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Simulate } from 'react-dom/test-utils';
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
            backgroundColor: '#DFDFDF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        header: {
            height: '20%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // borderBottom: 'black solid 1px',
            fontFamily: 'Roboto Condensed, sans-serif',
            fontWeight: 'lighter',
            color: 'black',
            fontSize: 40,
            letterSpacing: 5
        },
        centerBackground: {
            height: 500,
            width: '100%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        centerContainer: {
            height: 500,
            width: 800,
            // border: 'solid 1px black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'black',
            fontFamily: 'Oswald, sans serif',
            fontWeight: 'lighter',
            // paddingBottom: 40
            
        },
        logoBar: {
            height: 170,
            width: 800,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            // paddingBottom: 20,
            fontSize: 30,
            borderBottom: 'black 1px solid'
        },
        logoBox: {
            height: 100,
            width: 240,
            border: 'black 2px solid',
            color: '#E0AF66',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: 44,
            letterSpacing: 7
        },
        nameBox: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            letterSpacing: 2,
            fontSize: 30,
            fontWeight: 400
        },
        loginContainer: {
            height: 250,
            width: 800,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        loginBoxLeft: {
            height: 250,
            width: 400,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        loginWordBox: {
            height: 125,
            width: 200,
            fontWeight: 300,
            fontSize: 40,
            letterSpacing: 5,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 20,
            marginRight: 10
        },
        loginEmptyBox: {
            height: 125,
            width: 180,
            borderBottom: 'black 1px solid'
        },
        loginLineBox: {
            height: 230,
            width: 20,
            borderTop: 'black 1px solid',
            borderBottom: 'black 1px solid',
            borderLeft: 'black 1px solid',
            marginTop: 30
        },
        //It would be really cool to animate the lines - to appear that they're pointing to the login fields.
        inputContainer: {
            height: 300,
            width: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 20
        },
        inputs: {
            width: 250,
            borderRadius: 0,
            border: 'solid black 1px',
            paddingLeft: 10

        },
        btnContainer: {
            width: 250,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        btn: {
            backgroundColor: 'white',
            border: 'black 1px solid',
            fontSize: 18,
            fontFamily: 'Oswald, sans serif',
            width: 110
            // boxShadow: 'none'
        },
        footerLinks: {
            width: '60%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            fontFamily: 'Roboto Condensed, sans-serif',
            fontWeight: 'bold',
            color: 'black',
            fontSize: 16

        },
        footer: {
            height: '20%',
            width: '100%',
            // borderTop: 'black solid 1px',
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: 20
            
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
                <header style={this.styles.header} >
                    <p>Keep track of your job applications with TYJA.</p>
                </header>
                <div style={this.styles.centerBackground}>
                    <section style={this.styles.centerContainer}>
                        <div>
                            <div style={this.styles.logoBar}>
                                <div style={this.styles.logoBox}>
                                    <h1>TYJA</h1>
                                </div>
                                <div style={this.styles.nameBox}>
                                    <p style={this.styles.logoName}>TRACK YOUR JOB APPLICATION</p>
                                </div>
                            </div>
                            {!newUser ? 
                            <div style={this.styles.loginContainer}>
                                <div style={this.styles.loginBoxLeft}>
                                    <div style={this.styles.loginWordBox}>
                                        <p>LOGIN</p>
                                    </div>
                                    <div style={this.styles.loginEmptyBox}></div>
                                    <div style={this.styles.loginLineBox}></div>
                                </div>
                                <div style={this.styles.inputContainer} >
                                    <div>
                                        <input style={this.styles.inputs} placeholder='Email' name="email" value={email} type="text" onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <div >
                                        <input style={this.styles.inputs} placeholder='Password' name="password" value={password} type="text" onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <div style={this.styles.btnContainer}>
                                        <button style={this.styles.btn} onClick={this.login}>Login</button>
                                        <button style={this.styles.btn} onClick={this.toggle}>Register</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div style={this.styles.loginContainer}>
                                <div style={this.styles.loginBoxLeft}>
                                    <div style={this.styles.loginWordBox}>
                                        <p>LOGIN</p>
                                    </div>
                                    <div style={this.styles.loginEmptyBox}></div>
                                    <div style={this.styles.loginLineBox}></div>
                                </div>
                                <div style={this.styles.inputContainer}>
                                    <div>
                                        {/* <p>Email: </p> */}
                                        <input style={this.styles.inputs} placeholder='Email' name="email" value={email} type="text" onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <div>
                                        {/* <p>Password: </p> */}
                                        <input style={this.styles.inputs} placeholder='Password' name="password" value={password} type="password" onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <div>
                                        {/* <p>First Name: </p> */}
                                        <input style={this.styles.inputs} placeholder='First Name' name="firstName" value={firstName} type="text" onChange={e => this.handleChange(e)}/>
                                    </div>
                                    <div>
                                        {/* <p>Last Name: </p> */}
                                        <input style={this.styles.inputs} placeholder='Last Name' name="lastName" value={lastName} type="text" onChange={e => this.handleChange(e)}/>
                                    </div>
                                
                                    <div style={this.styles.btnContainer} >
                                        <button style={this.styles.btn} onClick={this.register}>Register</button>
                                        <button style={this.styles.btn} onClick={this.toggle}>Back to Login</button>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </section>
                </div>
                <footer className='footer-text' style={this.styles.footer}>
                    <div style={this.styles.footerLinks}>
                        <p>TYJA © 2020</p>
                        {/* Make About Us a link */}
                        <p>About Us</p>
                        {/* Make Contact Us a link to send email with nodemailer */}
                        <p>Contact Us</p>
                    </div>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {loginUser})(Login);