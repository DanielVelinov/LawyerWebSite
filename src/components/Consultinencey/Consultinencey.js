import React from 'react'
import ConsultingForm from '../ConsultingForm/ConsultingForm';

const Consultinencey = (props) => {
    return (
        <section className={`contact-section ${props.contactClass}`}>
            <div className="content-area clearfix">
                <div className="contact-info-col">
                    <div className="contact-info">
                        <ul>
                            <li>
                                <i className="fi flaticon-home-3"></i>
                                <h4>Адрес</h4>
                                <p>България, обл. София, общ. София, 1000 гр. София, бул. "Витоша" №43, ет. 3, ап. 1.</p>
                            </li>
                            <li>
                                <i className="fi flaticon-email"></i>
                                <h4>Email</h4>
                                <p>ekaterinadimitrova@gmail.com</p>
                            </li>
                            <li>
                                <i className="fi flaticon-support"></i>
                                <h4>Телефон</h4>
                                <p>+3598705647</p>
                            </li>
                            <li>
                                <i className="fi flaticon-clock"></i>
                                <h4>Работно Време</h4>
                                <p>Пон-Съб: 10:00 – 19:00</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact-form-col">
                    <div className="section-title-s2">
                        <div className="icon">
                            <i className="fi flaticon-balance"></i>
                        </div>
                        <span>Contact form</span>
                        <h2>Имате нужда от консултация, <br />поискайте безплатна оферта</h2>
                        <p> Ако имате нужда от адвокат по конкретен правен казус, то можете да използвате формата за контакти по-долу, за да ни пишете.</p>
                    </div>

                    <div className="contact-form">
                        <ConsultingForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Consultinencey;