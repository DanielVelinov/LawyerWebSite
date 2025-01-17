// src/pages/PracticeSinglePage/PracticeSinglePage.js

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import Practices from '../../api/Practices';
import ServiceTab from './ServiceTab';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const PracticeSinglePage = () => {
    const { slug } = useParams();

    // Намираме съответния обект от масива (Practices.js) по slug
    const PracticeDetails = Practices.find(item => item.slug === slug);

    // Ако не намерим услуга, може да върнем проста грешка/404
    if (!PracticeDetails) {
        return (
            <Fragment>
                <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
                <PageTitle pageTitle="Грешка" pagesub="Несъществуваща услуга" />
                <section className="service-single-section section-padding">
                    <div className="container">
                        <h2>Услугата не е намерена.</h2>
                    </div>
                </section>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            {/* Показваме заглавието на услугата в PageTitle */}
            <PageTitle pageTitle={PracticeDetails.sTitle} pagesub={'Услуга'} />

            <section className="service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        {/* Основна колона */}
                        <div className="col col-lg-9 col-12 order-lg-2 order-1">
                            <div className="service-single-content">
                                {/* Заглавие на услугата */}
                                <h2>{PracticeDetails.sTitle}</h2>
                                <p>
                                    Тук може да сложите въвеждащ текст за “{PracticeDetails.sTitle}”. 
                                    Например: 
                                    - Регистрация на фирма, 
                                    - Промяна на обстоятелства, 
                                    - Обжалване на актове и т.н. 
                                    (спрямо това, което се вижда на скрийншота).
                                </p>

                                {/* Примерна картинка (ако има) */}
                                <div className="service-pic">
                                    <img
                                        src={PracticeDetails.sImg}
                                        alt={PracticeDetails.sTitle}
                                    />
                                </div>

                                <p>
                                    Още конкретика за услугата: 
                                    какви документи са нужни, как протича процесът, 
                                    срокове, такси и т.н.
                                </p>

                                <div className="service-features-grids clearfix">
                                    <div className="grid">
                                        <i className="fi flaticon-standard"></i>
                                        <h4>Професионализъм</h4>
                                        <p>Кратко описание...</p>
                                    </div>
                                    <div className="grid">
                                        <i className="fi flaticon-balance"></i>
                                        <h4>Актуалност</h4>
                                        <p>Кратко описание...</p>
                                    </div>
                                    <div className="grid">
                                        <i className="fi flaticon-courthouse-1"></i>
                                        <h4>Гъвкавост</h4>
                                        <p>Кратко описание...</p>
                                    </div>
                                </div>

                                <h3>Ползи от услугата</h3>
                                <p>
                                    Опишете защо клиентът би се възползвал, какво ще спести 
                                    (време/разходи/рискове).
                                </p>
                                <div className="service-features">
                                    <ul>
                                        <li><i className="ti-check"></i>Полза №1</li>
                                        <li><i className="ti-check"></i>Полза №2</li>
                                        <li><i className="ti-check"></i>Полза №3</li>
                                    </ul>
                                    <ul>
                                        <li><i className="ti-check"></i>Полза №4</li>
                                        <li><i className="ti-check"></i>Полза №5</li>
                                        <li><i className="ti-check"></i>Полза №6</li>
                                    </ul>
                                </div>

                                <h3>Допълнителна информация</h3>
                                <p>
                                    Тук може да сложите изчерпателни подробности, 
                                    процедури, необходими документи и т.н.
                                </p>

                                {/* Примерна таб-навигация, ако ви е нужна */}
                                <ServiceTab/>

                                <Link onClick={ClickHandler} to="/" className="theme-btn">
                                    Свържете се с нас
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar колона */}
                        <div className="col col-lg-3 col-12 order-lg-1 order-2">
                            <div className="service-sidebar">
                                <div className="widget service-list-widget">
                                    <ul>
                                        {/* Линк към /services (всички услуги) */}
                                        <li className='current'>
                                            <Link onClick={ClickHandler} to="/services">
                                                Всички услуги
                                            </Link>
                                        </li>
                                        {/* Автоматично изреждаме всички от Practics */}
                                        {Practices.map((practice, index) => (
                                            <li key={index}>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to={`/practice-single/${practice.slug}`}
                                                >
                                                    {practice.sTitle}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="widget download-widget">
                                    <ul>
                                        <li>
                                            <Link onClick={ClickHandler} to="/">
                                                <i className="ti-zip"></i>
                                                Фирмена презентация
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget contact-widget">
                                    <div>
                                        <h4>Нуждаете се от помощ?</h4>
                                        <p>
                                            Кратка информация как да ни потърсите,
                                            телефон, имейл или форма за контакт.
                                        </p>
                                        <Link onClick={ClickHandler} to="/contact">
                                            Свържете се
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default PracticeSinglePage;
