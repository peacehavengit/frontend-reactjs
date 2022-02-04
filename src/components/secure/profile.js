import React, { Component } from 'react';
import '../css/profile.css';
import Sidebar from '../layout/sidebar';
import axios from "axios";
import auth from '../../config/auth';
import serverUrl from '../../environments/environment';
import { NotificationManager } from 'react-notifications';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: {}
        }
        this.form = {};
        if (!auth.isLoggedIn()) {
            this.props.history.push('/');
        } else {
            this.getCsrf();
        }
    }
    getCsrf() {
        axios.get(serverUrl + 'users/userdetail', null).then((response) => {
            console.log(response);
            this.setState({ userdata: response.data.data })
        }).catch((error) => {
            NotificationManager.error('', error, 2200);
        });
    }
    render() {
        return (
            <div>
                <div>
                    <Sidebar />
                    <div className="custom-margin">
                        <div className="dashboard-heading">
                            <h2 className="page-heading text-center mb-4">Profile</h2>
                        </div>

                        <div className="card profile-card">
                            <div className="row">
                                <div className="col-md-6 detail">
                                    <h5 className="usertitle">{this.state.userdata.fname} {this.state.userdata.lname}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 detail">
                                    <p><span>Email </span>:  {this.state.userdata.email}</p>
                                </div>

                                <div className="col-md-12 detail">
                                    <p><span>Phone </span>: --</p>
                                </div>
                                {/* <div className="col-md-12 detail">
                                    <p><span>KYC </span>:gvhbjnkm </p><br />

                                    <p ><b>Reason : v bnm</b> </p>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}
