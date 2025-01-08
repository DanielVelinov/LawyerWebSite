import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/footer-logo.png';
import Practices from '../../api/Practices';

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <footer className="site-footer">
            <div className="social-newsletter-area">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="social-newsletter-content clearfix">
                                <div className="social-area">
                                    <ul className="clearfix">
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-pinterest"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="logo-area">
                                    <img src={Logo} alt="" />
                                </div>
                                <div className="newsletter-area">
                                    <div className="inner">
                                        <h3>Абонамент за бюлетин</h3>
                                        <form onSubmit={SubmitHandler}>
                                            <div className="input-1">
                                                <input type="email" className="form-control" placeholder="Имейл адрес *" required="" />
                                            </div>
                                            <div className="submit clearfix">
                                                <button type="submit"><i className="fi flaticon-paper-plane"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="widget-title">
                                    <h3>За нас</h3>
                                </div>
                                <p>Екатерина Димитрова е юрист с повече от 20 годишен стаж, представлявала е едни от най- известните хора в държавата, два пъти е била Адвокат на годината и два пъти – носител на приза Адвокат в медиите, който се връчва за най-много спечелени медийни дела.</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget contact-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>Нашият адрес</h3>
                                </div>
                                <ul>
                                    <li>4България, обл. София, общ. София, 1000 гр. София, бул. "Витоша" №43, ет. 3, ап. 1.</li>
                                    <li><span>Телефон:</span> +359888705647</li>
                                    <li><span>Имейл:</span> ekaterina_dimitrova@gbg.bg</li>
                                    <li><span>Работно време:</span> 10:00 - 17:00</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Полезни връзки</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">За нас</Link></li>
                                    <li><Link onClick={ClickHandler} to="/services">Нашите услуги</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Контакт с нас</Link></li>
                                    <li><Link onClick={ClickHandler} to="/team">Екипът</Link></li>
                                </ul>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/contact">Политика за поверителност</Link></li>
                                    <li><Link onClick={ClickHandler} to="/testimonials">Отзиви</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">Новини</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">ЧЗВ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget line-widget-2">
                                <div className="widget-title">
                                    <h3>Области на практика</h3>
                                </div>
                                <ul>
                                    {Practices.slice(0, 4).map((practice, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} to={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <div className="col col-xs-12">
                            <p className="copyright">Авторско право &copy; 2025 Екатерина Димитрова. Всички права запазени.</p>
                            <div className="extra-link">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/contact">Политика за поверителност</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Условия</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">За нас</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">ЧЗВ</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
