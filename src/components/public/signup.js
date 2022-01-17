import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import auth from '../../config/auth';
import serverUrl from '../../environments/environment';
import { NotificationManager } from 'react-notifications';

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            cpassword: '',
            error: {
                fnameError: '',
                fnameBool: false,
                lnameError: '',
            }
        }
        if (auth.isLoggedIn()) {
            console.log('history', this.props.history);
            this.props.history.push('/homepage');
        } else {
            this.Signup = this.Signup.bind(this);
        }
    }

    handleUserInput(e) {
        console.log(e.target.name, e.target.value);
        const name = /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/;
        if (e.target.name === 'fname') {
            // console.log('success');
            const result = name.test(e.target.value);
            if (result === true && e.target.value.length > 2) {
                this.setState({
                    fname: e.target.value,
                    error: {
                        fnameError: '',
                        fnameBool: false
                    }
                })
            } else {
                console.log('fxdghjkl', e.target.value.length);
                if (result === true && e.target.value.length <= 2) {
                    console.log('check');
                    this.setState({
                        fname: '',
                        error: {
                            fnameError: 'Length should be greater than 2',
                            fnameBool: true
                        }

                    })
                } else if (result === false && e.target.value.length <= 2 && e.target.value.length >0) {
                    this.setState({
                        fname: '',
                        error: {
                            fnameError: 'Enter valid name',
                            fnameBool: true
                        }

                    })
                } else if (result === false && e.target.value.length === 0) {
                    this.setState({
                        fname: '',
                        error: {
                            fnameError: 'Please enter name',
                            fnameBool: true
                        }

                    })
                }
            }
        }
        console.log(this.state, e);
    }

    Signup(e) {
        e.preventDefault();
        console.log('form', this.state);
        axios.post(serverUrl + 'users/signup', {
            email: this.state.email,
            password: this.state.password,
            fname: this.state.fname,
            lname: this.state.lname,
            cpassword: this.state.cpassword,
            // _csrf: this.state._csrf
        }).then((response) => {
            if (response.data.success === true) {
                NotificationManager.success('', response.data.message, 2200);
                this.props.history.push('/');
            } else {
                NotificationManager.error('', response.data.message, 2200);
            }

        }).catch((error) => {
            NotificationManager.error('', "Something Went Wrong", 2200);
        });
    }

    render() {
        return (
            <div className="container position-relative">
                <div className="register-box center reg-form">
                    <div >
                        {/* <div id="first"> */}
                        <div className="data-form form ">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Signup</h1>
                                </div>
                            </div>
                            <form>
                                <div className="form-group">
                                    <input type="fname" name="fname" className="form-control" id="fname" required aria-describedby="emailHelp" placeholder="Enter First name" onChange={(e) => this.handleUserInput(e)} />
                                    if (this.state.error.fnameBool === true) {
                                        <span style={{ color: "red" }}>{this.state.error.fnameError}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="lname" name="lname" className="form-control" id="lname" required aria-describedby="emailHelp" placeholder="Enter Last name" onChange={(e) => { this.setState({ lname: e.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" id="Email" required aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" id="password" className="form-control" required aria-describedby="emailHelp" placeholder="Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="cpassword" id="cpassword" className="form-control" required aria-describedby="emailHelp" placeholder="Confirm Password" onChange={(e) => { this.setState({ cpassword: e.target.value }) }} />
                                </div>
                                <div className="form-group text-right btn-center" style={{ fontSize: '14px', color: "#6ca8e9" }}>
                                    {/* <Link to="/forgot">Forgot password</Link> */}
                                </div>
                                <p className="form-note">
                                    A valid password should contain a minimum length of 6 characters & meet the following criteria. A
                                    CAPITAL letter, a small letter, a number and a special character.
                                </p>
                                <div className="btn-center">
                                    <button type="button" className="registerbtn" onClick={this.Signup} >Create Account</button>
                                </div>
                            </form>
                            <div className='btn-center'>
                                <p className='colortext'> Already have an account?<Link to="/">Sign in</Link></p>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>

            </div>
        );
    }
}
