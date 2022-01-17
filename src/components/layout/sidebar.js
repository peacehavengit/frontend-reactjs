import React, { Component } from 'react';
import './sidebar.css'
import logo from '../../assets/img/phlogo.png'
import { Link } from "react-router-dom";
import auth from '../../config/auth';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.auth = auth.logout.bind(this);
    }
    render() {
        return (
            <div id="sidebar">
                <Link to="/homepage" className="sidebar-content"><img src={logo} alt="Logo"
                    className="logo" />
                    <p><b>PEACE HAVEN</b></p>
                </Link>
                <div className='side-links'>
                    <Link to="/homepage" className="sidebar-content colorMenu"><i
                        className="fas fa-th-large"></i>
                        <span>Dashboard</span></Link>
                </div>
                <div className='side-links'>
                    <Link to="/create-repo" className="sidebar-content colorMenu"><i
                        className="fas fa-shopping-bag"></i>
                        <span>Create Repository</span></Link>
                </div>
                <div className='side-links'>
                    <Link to="/repositories" className="sidebar-content colorMenu"><i
                        className="fas fa-money-check-alt"></i>
                        <span>Repositories</span></Link>
                </div>
                <div className='side-links'>
                    <Link to="/profile" className="sidebar-content colorMenu"><i
                        className="fas fa-ticket-alt"></i>
                        <span>Profile</span></Link>
                </div>
                <div className='side-links'>
                    <Link to="/settings" className="sidebar-content colorMenu"><i
                        className="fas fa-money-check-alt"></i>
                        <span>Setting</span></Link>
                </div>
                <div className='side-links'>
                    <Link to="/support" className="sidebar-content colorMenu"><i
                        className="fas fa-history"></i>
                        <span>Support</span></Link>
                </div>
                <div className='side-links'>
                    <Link to="/faq" className="sidebar-content colorMenu"><i
                        className="fas fa-money-check-alt"></i>
                        <span>FAQ</span></Link>
                </div>
                <div className='side-links'>
                    <Link to="/" className="sidebar-content" style={{ color: 'red' }}><i
                        className="fas fa-sign-out-alt"></i>
                        <span onClick={this.auth}>Logout</span></Link>
                </div>
            </div>
        );
    }
};
