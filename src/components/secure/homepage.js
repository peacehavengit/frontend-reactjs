import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Sidebar from '../layout/sidebar';
import './home.css'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <Sidebar />
                    <div className="custom-margin">
                        <div className="card kyc-card mb-4">
                            <div className="dashboard-heading mb-3">
                                <h3 className="page-heading text-center mb-4">Peace Haven Git</h3>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-4 col-md-6 col-lg-4 col-xl-4 equel-grid">
                                    <div className="grid d-flex flex-column align-items-center justify-content-center">
                                        <div className="grid-body text-center">
                                            <div className="profile-img img-rounded bg-inverse-primary no-avatar component-flat mx-auto mb-4">
                                                <i className="fas fa-layer-group"></i>
                                            </div>
                                            <h2 className="font-weight-medium">
                                                <span className="animated-count">Repositories</span>
                                            </h2>
                                            <p className="text-gray d-block mt-3" > 0 Available</p>
                                            {/* <p className="text-gray d-block mt-3" >0 Available </p> */}
                                            <div> <button className="btn add-btn-view" > View All</button></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4 col-md-6 col-lg-4 col-xl-4 equel-grid">
                                        <div className="grid d-flex flex-column align-items-center justify-content-center">
                                            <div className="grid-body text-center">
                                                <div className="profile-img img-rounded bg-inverse-primary no-avatar component-flat mx-auto mb-4">
                                                    <i className="fas fa-user-tag"></i>
                                                </div>
                                                <h2 className="font-weight-medium">
                                                    <span className="animated-count">Pull Request</span>
                                                </h2>
                                                <p className="text-gray d-block mt-3"> Available</p>

                                                <div> <button className="btn add-btn-view"> View All</button></div>

                                            </div>
                                        </div>
                                    </div>
                                <div className="col-12 col-sm-4 col-md-6 col-lg-4 col-xl-4 equel-grid">
                                        <div className="grid d-flex flex-column align-items-center justify-content-center">
                                            <div className="grid-body text-center">
                                                <div className="profile-img img-rounded bg-inverse-primary no-avatar component-flat mx-auto mb-4">
                                                    <i className="fas fa-file-download"></i>
                                                </div>
                                                <h2 className="font-weight-medium">
                                                    <span className="animated-count">Submissions</span>
                                                </h2>
                                                <p className="text-gray d-block mt-3">+ 12 New</p>

                                                <div> <button className="btn add-btn-view"> View All</button></div>

                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
