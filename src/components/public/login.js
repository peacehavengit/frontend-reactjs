import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import auth from '../../config/auth';
import serverUrl from '../../environments/environment';
import { NotificationManager } from 'react-notifications';
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        if (auth.isLoggedIn()) {
            console.log('history', this.props.history);
            this.props.history.push('/homepage');
        } else {
            this.login = this.login.bind(this);
        }
    }


    login(e) {
        e.preventDefault();
        axios.post(serverUrl + 'users/login', {
            email: this.state.email,
            password: this.state.password,
            // _csrf: this.state._csrf
        }).then((response) => {
            if (response.data.success === true) {
                NotificationManager.success('', response.data.message, 2200);
                console.log('token', response);
                let token = response.data.token
                localStorage.setItem('token', token);
                this.props.history.push('/homepage');
            } else {
                NotificationManager.error('', response.data.message, 2200);
            }

        }).catch((error) => {
            NotificationManager.error('', "Something Went Wrong", 2200);
        });
    }

    render() {
        return (
            <div>
            <div className="center">
                <div className="col-md-5 mx-auto">
                    {/* <div id="first"> */}
                    <div className="data-form">
                        <div className=" mb-3">
                            <div className="col-md-12 text-center">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <form>
                            <div className="form-group">
                                {/* <label>Email address</label> */}
                                <input type="email" name="email" className="form-control" id="Email" required aria-describedby="emailHelp" placeholder="Enter email"  onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            </div>
                            <div className="form-group" id="passwords">
                                {/* <label>Password</label> */}
                                <input type="password" name="password" id="password" className="form-control" required aria-describedby="emailHelp" placeholder="Enter Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                {/* <span className="fa fa-eye" id="fa-eye-1"></span> */}
                            </div>
                            <div className="form-group text-right btn-center" style={{ fontSize: '14px', color: "#6ca8e9" }}>
                                <Link to="/forgot">Forgot password</Link>
                            </div>
                            <div className="btn-center">
                                <button type="button" className="registerbtn" onClick={this.login} >Sign In</button>
                            </div>
                        </form>
                        <div className='btn-center'>
                            <p className='colortext'> New User? <Link to="/signup">Register
                                here</Link> </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            // </div>
        );
    }
}
