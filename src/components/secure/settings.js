import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Sidebar from '../layout/sidebar';

export default class Settings extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <div style={{ marginTop: '61px' }}>
                        <p >This is Settings</p>
                    </div>
                    
                </div>
            </div>
        );
    }
}
