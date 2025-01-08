import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import { connect } from "react-redux";
import Logo from '../../images/logo.png';
import HeaderTopbar from '../HeaderTopbar';

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <header id="header" className={`site-header header-style-1 ${props.hclass}`}>
            <HeaderTopbar container={'container'} />
            <nav className="navigation navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="navbar-header">
                        <MobileMenu />
                        <Link onClick={ClickHandler} className="navbar-brand" to="/home">
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                            <li>
                                <Link onClick={ClickHandler} to="/home">Home</Link>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/about">About Company</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about-me">About Me</Link></li>
                                    <li><Link onClick={ClickHandler} to="/testimonials">Testimonials</Link></li>
                                    <li><Link onClick={ClickHandler} to="/testimonials-s2">Testimonials Style 2</Link></li>
                                    <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                    <li><Link onClick={ClickHandler} to="/attorneys-single/Michel-Troat">Team Single</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Services</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/practice-single/Business-Law">Business Law</Link></li>
                                    <li><Link onClick={ClickHandler} to="/practice-single/Family-Law">Family Law</Link></li>
                                    <li><Link onClick={ClickHandler} to="/practice-single/Real-Estate-Law">Real State Law</Link></li>
                                    <li><Link onClick={ClickHandler} to="/practice-single/Education-Law">Education Law</Link></li>
                                    <li><Link onClick={ClickHandler} to="/practice-single/Criminal-Law">Criminal Law</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Projects</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/case-studies">Case Studies</Link></li>
                                    <li><Link onClick={ClickHandler} to="/case-single/Real-Estate">Case Studies Single</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Blog</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog Left sidebar</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog full width</Link></li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/">Blog single</Link>
                                        <ul className="sub-menu">
                                            <li><Link onClick={ClickHandler} to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">Blog single</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/Provide-insight-into-how-canna-businesspeople-can-use">Blog single Left sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/Provide-insight-into-how-canna-businesspeople-can-use">Blog single full width</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="cart-search-contact">
                        <div className="header-search-form-wrapper">
                            <button
                                onClick={() => setMenuState(!menuActive)}
                                className="search-toggle-btn"
                            >
                                <i className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i>
                            </button>
                            <div
                                className={`header-search-form ${
                                    menuActive ? "header-search-content-toggle" : ""
                                }`}
                            >
                                <form onSubmit={SubmitHandler}>
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search here..."
                                        />
                                        <button type="submit">
                                            <i className="ti-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
