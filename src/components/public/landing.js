import React, { Component } from 'react';
import '../css/landing.css';
// import logo from '../../assets/img/logo.png';
import logo from '../../assets/img/phlogo.png';
export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.routeto = this.routeto.bind(this);
        this.routetwo = this.routetwo.bind(this);

    }
    routeto() {
        this.props.history.push('/login');
    }
    routetwo() {
        this.props.history.push('/signup');
    }

    render() {
        return (
            <div className="container backcolor">
                <div className="header">
                    <div> <img src={logo} className="logo" alt='vh' /><h4 className='logotext'>Peace Haven Git</h4></div>
                    <nav>
                        {/* <ul>
                                <li><a href="/login">Home</a></li>
                                <li><a href="/login">Products</a></li>
                                <li><a href="/login">Community</a></li>
                                <li><a href="/login">Contact</a></li>
                            </ul> */}
                    </nav>
                    <button className="btn" id="btn1" onClick={this.routeto}>Log In</button>
                    <button className="btn" id="btn2" onClick={this.routetwo}>Sign Up</button>
                </div>
                <div className="content">
                    <div className="text">
                        <h1>Welcome to,<br /> <span>Peace Haven Git</span></h1>
                        <p>Peace Haven Corp is a reputed company which deals with DevOps and Cloud engineering. <br /> Peace Haven Git is a subsidiary of Peace haven corp to provide people a substitute to Github , Jfrog etc.</p>
                        {/* <button className="btn3">Buy Now</button> */}
                    </div>
                </div>


                <div className="w3-container w3-padding-32 mt-5" id="about">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16 heads">Other Products</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p> */}
                </div>

                <div className="w3-row-padding w3-grayscale">
                    <div className="w3-col l6 m6 w3-margin-bottom">
                        {/* <img src="/w3images/team2.jpg" alt="John" style={{width:'100%'}} /> */}
                        <h3 className='h3Size'>Peace Haven Auth-User</h3>
                        <p className="w3-opacity">CEO & Founder</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <p><button className="w3-button w3-light-grey w3-block">Coming Soon....</button></p>
                    </div>
                    <div className="w3-col l6 m6 w3-margin-bottom">
                        {/* <img src="/w3images/team1.jpg" alt="Jane" style={{width:'100%'}} /> */}
                        <h3 className='h3Size'>Peace Haven Secure</h3>
                        <p className="w3-opacity">Architect</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <p><button className="w3-button w3-light-grey w3-block">Coming Soon....</button></p>
                    </div>

                </div>


                <div className="w3-container w3-padding-32 contact" id="contact">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16 heads">Contact Us</h3>
                    <p>Lets get in touch and talk about your next project.</p>
                    <form >
                        <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
                        <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" />
                        <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" />
                        <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment" />
                        <button className="w3-button w3-black w3-section" type="submit">
                            <i className="fa fa-paper-plane"></i> SEND MESSAGE
                        </button>
                    </form>
                </div>

            </div>
        );
    }
}
