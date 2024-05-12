import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="Footer shadow-sm" style={{backgroundColor:'lightgrey'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>Blog</span>Bridge</h3>
                            <h6>© 2024 BlogBridge All rights reserved</h6>
                            <p>Your seamless connection to the world of blogging. Create, share, and engage with ease.</p>
                            <div className="footer-icons">
                                <FaFacebook className="icon" />
                                <FaTwitter className="icon" />
                                <FaInstagram className="icon" />
                                <FaLinkedinIn className="icon" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <Link to='/'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/'>Career</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/'>Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/'>Help & Support</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/'>Services</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contact Us</h5>
                            <p><i className="fa-solid fa-phone-volume"></i>+91 7989359469</p>
                            <p><i className="fa-solid fa-envelope"></i>viveklakum2005@gmail.com</p>
                            <p><i className="fa-solid fa-paper-plane"></i>Hyderabad, India.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer bg-black'>
                <p>Design By Vivek Lakum</p>
            </div>
        </>
    );
}

export default Footer;
