import react from "react";
import {Link} from "react-router-dom";
import './App.css';
import Logo from '../images/logo.png';

const Footer = () => {
    return(
        <>
            <div className="ui services menu d-flex flex-wrap m-0">
                <div className="foot-head flex-fill item d-flex align-items-center p-0">
                    <div className="d-flex align-items-center">
                        <img src={Logo} alt="logo" width="40px" height="40px" />
                    </div>
                    <div className="text-light header">
                        <h3>Pick Parts.</h3>
                        <h3>Build Your PC.</h3>
                    </div>
                </div>
                <div className="foot-link flex-fill ui item vertical menu">
                    <div className="item header">Information</div>
                    <div className="item">
                        <Link to='/home' className="link">Home</Link>
                    </div>
                    <div className="link item">
                        <Link to="/about" className="link">About</Link>
                    </div>
                    <div className="link item">
                        <Link to='/' className="link">Contact</Link>
                    </div>
                </div>
                <div className="foot-link flex-fill ui item vertical menu">
                    <div className="item header">Support</div>
                    <div className="item">
                        <Link to='/' className="link">
                            <i className="icon discord"></i>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='/' className="link">
                            <i className="icon patreon"></i>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='/' className="link">
                            <i className="icon mail"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="ui socials segment d-flex flex-wrap align-items-center justify-content-between m-0">
                <div className="ui compact menu">
                    <div className="item">
                        <Link to='' className="link"><i className="icon facebook"></i>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='' className="link"><i aria-hidden="true" className="icon twitter"></i>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='' className="link"><i aria-hidden="true" className="icon instagram"></i>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='' className="link"><i aria-hidden="true" className="icon reddit"></i>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <p className="text-light"><i className="icon copyright"></i>2022, All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;