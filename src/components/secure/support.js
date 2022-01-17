import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Sidebar from '../layout/sidebar';

export default class Support extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <div style={{ marginTop: '61px',textAlign:'right' }}>
                        <p >This is Support</p>
                    </div>
                    
                </div>
            </div>
        );
    }
}
