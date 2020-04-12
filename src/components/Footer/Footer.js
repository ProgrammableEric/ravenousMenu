import React, { Component } from 'react';
import './Footer.css';
import logo from '../../assets/soup.png'
import gitcat from '../../assets/gitcat.png';
import facebook from '../../assets/facebook.png';
import ins from '../../assets/instagram.png';
import weibo from '../../assets/weibo.png';

class Footer extends Component {
    
    render() {
        return (
            <div className="footer">
                <div className="FooterWrapper">
                    <div className="upperFooter">
                        <div className="siteName">
                            <img className="logo" src={logo} alt="site logo"/>
                            <span>Ravenous</span>
                        </div>
                        <div className="AboutHelp">
                            <div className="About">
                                <a href="" className="listTitle">About Ravenous</a>
                                <a href="">Read our blog</a>
                                <a href="">Buy gift card</a>
                                <a href="">Create a business account</a>
                                <a href="">Add your restaurant</a>
                                <a href="">Sign up to deliver</a>
                            </div>
                            <div className="Help">
                                <a href="" className="listTitle">Get help</a>
                                <a href="">Read FAQs</a>
                                <a href="">View all cities</a>
                                <a href="">View all countries</a>
                                <a href="">Restaurants near me</a>
                                <a href="">Change language</a>
                            </div>
                        </div>
                        <div className="clearFloat"></div>
                    </div>
                    <div className="lowerFooter">
                        <div className="icons">
                            <img className="footerIcon" src={facebook}/>
                            <img className="footerIcon" src={ins}/>
                            <img className="footerIcon" src={weibo}/>
                            <img className="footerIcon" src={gitcat}/>
                        </div>
                        <div className="links">
                            <a href="">Privacy Policy</a>
                            <a href="">Terms</a>
                            <a href="">Pricing</a>
                            <a href="">@2020 Ravenous Inc.</a>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Footer;