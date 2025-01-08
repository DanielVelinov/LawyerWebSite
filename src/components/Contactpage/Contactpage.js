import React from 'react';
import ContactFrom from '../ContactFrom';

const Contactpage = (props) => {
    return (
        <div>
            <section className="contact-section-s3">
                <div className="content-area clearfix">
                    <div className="contact-info-col">
                        <div className="contact-info">
                            <ul>
                                <li>
                                    <i className="fi flaticon-home-3"></i>
                                    <h4>Централен офис</h4>
                                    <p>София, бул. Витоша №43, ет. 3, ап. 1</p>
                                </li>
                                <li>
                                    <i className="fi flaticon-email"></i>
                                    <h4>Имейл адрес</h4>
                                    <p>ekaterinadimitrova@gmail.com</p>
                                </li>
                                <li>
                                    <i className="fi flaticon-support"></i>
                                    <h4>Телефон</h4>
                                    <p>+3598705647</p>
                                </li>
                                <li>
                                    <i className="fi flaticon-clock"></i>
                                    <h4>Работно време</h4>
                                    <p>Пон-Събота: 10:00 – 19:00</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-form-col">
                        <div className="section-title-s2">
                            <div className="icon">
                                <i className="fi flaticon-balance"></i>
                            </div>
                            <span>Пишете Ни</span>
                            <h2>Need Consultancy, <br />Request A Free Quote</h2>
                            <p>Наш сътрудник ще отговори на всички получени запитвания...</p>
                        </div>

                        <div className="contact-form">
                            <ContactFrom />
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-map-section section-padding pb-0">
                <div className="contact-map">
                    <iframe 
                        title="contact-map" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.2618669733043!2d23.317566316148667!3d42.69563797916759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa858183aa365f%3A0x2d093b9a3b52e15a!2sBulgaria%2C%20Sofia%2C%20Vitosha%20Blvd%2043%2C%20et.%203%2C%20ap.%201!5e0!3m2!1sen!2sbg!4v1681234567890" 
                        allowFullScreen>
                    </iframe>
                </div>
            </section>
        </div>
    )
}

export default Contactpage;
