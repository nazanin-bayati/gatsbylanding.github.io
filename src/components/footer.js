import React from "react"
import instagram from "../img/instagram.svg"
import twitter from "../img/twitter.svg"
import linkedin from "../img/linkedin.svg"
import email from "../img/email.svg"

const Footer = () => {
    return (
    <footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="call-to-action-content"> Looking to hire for long-term or full-time assignments? Hire top
                        notch talents in Wish Work</p>
                    <div class="call-to-action-button">
                        <a class="hire-button button-product-outsource"
                                href="{{ ADDRESS }}/projects/submit/category"
                        >Outsource Your Product</a>
                    </div>
                    <div class="horizontal-line"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <ul id="footer-content">
                        <li class="footer-details-header">Most In-Demand Talent</li>
                        <li class="footer-details" onclick="location.href='/projects/submit/category'">Web Development</li>
                        <li class="footer-details" onclick="location.href='/projects/submit/category'">AR/VR Development</li>
                        <li class="footer-details" onclick="location.href='/projects/submit/category'"> Data Analysis</li>
                        <li class="footer-details" onclick="location.href='/projects/submit/category'"> Game Development</li>
                    </ul>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <ul id="footer-content">
                        <li class="footer-details-header">About</li>
                        <li class="footer-details" onclick="location.href='/projects/submit/category'">Freelance Product Managers</li>
                        <li class="footer-details" onclick="location.href='/projects/submit/category'">Freelance Developers</li>
                        <li class="footer-details" onclick="location.href='/projects/submit/category'">About us</li>
                    </ul>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <ul id="footer-content">
                        <li class="footer-details-header">Contact</li>
                        <li class="footer-details" onclick="location.href='/projects/submit/category'">Careers</li>
                        <li class="footer-details" onclick="location.href='/projects/submit/category'">FAQ</li>
                        <li class="footer-details" onclick="location.href='/projects/submit/category'">Privacy & Policy</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="horizontal-line"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 social-media">
                    <ul id="Social-media-icons">
                        <li class="social-media-content"> Follow Us</li>
                        <li class="footer-social-media-items"><a
                                href="https://www.instagram.com/wishworkofficial/?hl=en" target="_blank"><img
                                src={instagram} alt="wishwork-instagram" class="wishwork-instagram"/></a></li>
                        <li class="footer-social-media-items"><a href="https://twitter.com/wishworkco?s=11"
                                                                 target="_blank"><img
                                src={twitter} alt="wishwork-twitter"/></a></li>
                        <li class="footer-social-media-items"><a href="https://www.linkedin.com/company/wishwork/"
                                                                 target="_blank"><img
                                src={linkedin} alt="wishwork-linkedin"/></a></li>
                    </ul>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="footer-email">
                        <img class="email-icon" src={email} alt=""/>
                        <p class="email">info@wishwork.org</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="horizontal-line"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="licence">© 2018 - 2020 Wish Work® Global Inc.</p>
                </div>
            </div>
        </div>
    </footer>
        )
}

export default Footer