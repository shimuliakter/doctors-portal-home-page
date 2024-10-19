import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-container py-3'>

            <div className="container pt-4">
                <div className="row">
                    <div className="col-md-3 text-secondary main-part">
                        <p>Emergency Dental Care</p>
                        <p>Check Up</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>Check Up</p>
                    </div>

                    <div className="col-md-3 footer-link">
                        <h6 className='footer-title'>Services</h6>
                        <a href="#">Emergency Dental Care</a>
                        <a href="#">Check Up</a>
                        <a href="#">Treatment of Personal Diseases</a>
                        <a href="#">Tooth Extraction</a>
                        <a href="#">Check Up</a>
                        <a href="#">Check Up</a>
                        <a href="#">Check Up</a>
                    </div>

                    <div className="col-md-3 footer-link">
                        <h6 className='footer-title'>Oral Health</h6>
                        <a href="#">Emergency Dental Care</a>
                        <a href="#">Check Up</a>
                        <a href="#">Treatment of Personal Diseases</a>
                        <a href="#">Tooth Extraction</a>
                        <a href="#">Check Up</a>
                        <a href="#">Check Up</a>
                        <a href="#">Check Up</a>
                    </div>

                    <div className="col-md-3">
                        <h6 className='footer-title'>Our Address</h6>

                        <p className='text-secondary'>New York - 101010 Hudson <br /> Yards</p>

                        <div className='footer-icon my-5'>
                            <FontAwesomeIcon className='brand-icon p-2' icon={faFacebookF} />
                            <FontAwesomeIcon className='brand-icon p-2' icon={faGooglePlusG} /> <FontAwesomeIcon className='brand-icon p-2' icon={faTwitter} />
                        </div>

                        <div className='pb-5'>
                            <p className='mb-2 mt-5 text-secondary'>Call Now</p>
                            <button style={{ backgroundColor: '#18d3b6', fontWeight: '600' }} className="btn text-white">+2025550295</button>

                        </div>

                    </div>

                    
                    <div className='text-center pt-4'>
                            <small>Copyright © {(new Date()).getFullYear()} - All right reserved</small>
                        </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;