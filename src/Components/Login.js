import React, {useState} from 'react';
import axios from 'axios';
import '../styles/components/Login.scss';
import {loginUser} from '../redux/authReducer';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import '../styles/components/Login.scss';
import styled from 'styled-components';
// import { Simulate } from 'react-dom/test-utils';
// import { registerUser} from '../../redux/reducer';

//used hooks
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newUser, setNewUser] = useState(false);

    // width: unquote("calc( 100% - #{$leftnav-width} )")

    const styles = {
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
            letterSpacing: 1
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
            width: 700,
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
            width: 700,
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
            width: 700,
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
            width: 150,
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
        // footerLinks: {
        //     width: '60%',
        //     display: 'flex',
        //     flexDirection: 'row',
        //     justifyContent: 'space-around',
        //     alignItems: 'flex-end',
        //     fontFamily: 'Roboto Condensed, sans-serif',
        //     fontWeight: 'bold',
        //     color: 'black',
        //     fontSize: 16

        // },
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

    const toggle = () => {
        setNewUser(!newUser)   
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value)
    };
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    };
    const handleLastName = (e) => {
        setLastName(e.target.value)
    };

    const login = () => {
        axios.post('/auth/login', {email, password}).then(res => {
            console.log("this is res.data from login post axios call in Login.js", res.data)
            props.loginUser(res.data)
            props.history.push('/dashboard')
        }).catch(err => {
            console.log(err)
            alert("Login Failed. Email or password incorrect.")
        })
    };

    const register = () => {
        if(email && password && firstName && lastName){
            axios.post('/auth/register', {email, password, firstName, lastName}).then(res => {
               props.loginUser(res.data)
               props.history.push('/dashboard') 
            }).catch(err => {
                console.log(err)
                alert("Registration failed. Try another email address.")
            })
        } else {
            alert("Registration failed. All fields must have a value.")
        }
    }
        //The following is to see what's on the user object, which is created by the axios call...and is put as res.data on the function that corresponds with the action builder in the reducer function. 
        // console.log(this.props.user)
    
    return (
        <div style={styles.page}>    
            <header className='header-login' style={styles.header} >
                <p>Keep track of your job applications with TYJA.</p>
            </header>
            <div style={styles.centerBackground}>
                <section style={styles.centerContainer}>
                    <div>
                        <div className='logo-bar' style={styles.logoBar}>
                            <div style={styles.logoBox}>
                                <h1>TYJA</h1>
                            </div>
                            <div style={styles.nameBox}>
                                <p style={styles.logoName}>TRACK YOUR JOB APPLICATION</p>
                            </div>
                        </div>
                        {!newUser ? 
                        <div style={styles.loginContainer}>
                            <div style={styles.loginBoxLeft}>
                                <div style={styles.loginWordBox}>
                                    <p>LOGIN</p>
                                </div>
                                <div style={styles.loginEmptyBox}></div>
                                <div style={styles.loginLineBox}></div>
                            </div>
                            <div style={styles.inputContainer} >
                                <div>
                                    <input style={styles.inputs} placeholder='Email' name="email" value={email} type="text" onChange={e => handleEmail(e)}/>
                                </div>
                                <div >
                                    <input style={styles.inputs} placeholder='Password' name="password" value={password} type="password" onChange={e => handlePassword(e)}/>
                                </div>
                                <div style={styles.btnContainer}>
                                    <button style={styles.btn} onClick={login}>Login</button>
                                    <button style={styles.btn} onClick={() => toggle()}>Register</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div style={styles.loginContainer}>
                            <div style={styles.loginBoxLeft}>
                                <div style={styles.loginWordBox}>
                                    <p>LOGIN</p>
                                </div>
                                <div style={styles.loginEmptyBox}></div>
                                <div style={styles.loginLineBox}></div>
                            </div>
                            <div style={styles.inputContainer}>
                                <div>
                                    {/* <p>Email: </p> */}
                                    <input style={styles.inputs} placeholder='Email' name="email" value={email} type="text" onChange={e => handleEmail(e)}/>
                                </div>
                                <div>
                                    {/* <p>Password: </p> */}
                                    <input style={styles.inputs} placeholder='Password' name="password" value={password} type="password" onChange={e => handlePassword(e)}/>
                                </div>
                                <div>
                                    {/* <p>First Name: </p> */}
                                    <input style={styles.inputs} placeholder='First Name' name="firstName" value={firstName} type="text" onChange={e => handleFirstName(e)}/>
                                </div>
                                <div>
                                    {/* <p>Last Name: </p> */}
                                    <input style={styles.inputs} placeholder='Last Name' name="lastName" value={lastName} type="text" onChange={e => handleLastName(e)}/>
                                </div>
                            
                                <div style={styles.btnContainer} >
                                    <button style={styles.btn} onClick={register}>Register</button>
                                    <button style={styles.btn} onClick={() => toggle()}>Back to Login</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </section>
            </div>
            <footer className='footer-text' style={styles.footer}>
                <div style={styles.footerLinks}>
                    {/* This would be nice, but I have to figure out how to get it to go to About Us when not logged in. */}
                    {/* <p>TYJA © 2020</p> */}
                    {/* Make About Us a link */}
                    {/* <Link to='/about'>
                        <p>About Us</p>
                    </Link> */}
                    {/* Make Contact Us a link to send email with nodemailer */}
                    {/* <p>Contact Us</p> */}
                </div>
            </footer>
        </div>
    )
    // }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {loginUser})(Login);