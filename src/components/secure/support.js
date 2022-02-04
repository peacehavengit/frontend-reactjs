import React, { Component } from 'react';
import imgsupport from '../../assets/img/support.png'
import Sidebar from '../layout/sidebar';
import '../css/support.css';

export default class Support extends Component {
    render() {
        return (
            // <div >
            <div >
                <Sidebar />
                <div className="custom-margin" >
                    <div className="dashboard-heading">
                        <h2 className="page-heading text-center mb-4">Support</h2>
                    </div>
                    <div className="card mt-2 support-card text-center">
                        <h4>Need Help?</h4>
                        <h6>We are here for you, Search our FAQ, or get in touch with us.</h6>
                        <img src={imgsupport} alt="support" />
                        <h6 className="mb-0">Send us your query</h6>
                        <a className="orange-btn" href="mailto:git@peacehaven.co"><i className="fa fa-envelope" style={{ paddingRight: '8px' }}></i>Email
                            Us</a>
                    </div>
                </div>

            </div>
            // </div>
        );
    }
}
