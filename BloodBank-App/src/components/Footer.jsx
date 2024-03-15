import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { IoMdPin } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <div className="footer-icon">
                        <FaHeartbeat />
                    </div>
                    <div className="footer-text">
                        <h4>About Us</h4>
                        <p>We are dedicated to saving lives by connecting blood donors with those in need.</p>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-icon">
                        <IoMdPin />
                    </div>
                    <div className="footer-text">
                        <h4>Contact Us</h4>
                        <p>123 Blood Drive, City, Country</p>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-icon">
                        <GrLocation />
                    </div>
                    <div className="footer-text">
                        <h4>Find Us</h4>
                        <p>Visit our locations across the country for blood donation.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
