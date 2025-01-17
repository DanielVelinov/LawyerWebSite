import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import { connect } from 'react-redux';
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
                            {/* Home */}
                            <li>
                                <Link onClick={ClickHandler} to="/home">
                                    НАЧАЛО 
                                </Link>
                            </li>

                            {/* Pages */}
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">
                                    ЗА НАС
                                </Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link onClick={ClickHandler} to="/about">
                                            About Company
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/about-me">
                                            About Me
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/testimonials">
                                            Testimonials
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/testimonials-s2">
                                            Testimonials Style 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/team">
                                            Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/attorneys-single/Michel-Troat">
                                            Team Single
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/faq">
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Services (Голямото меню) */}
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">
                                    СФЕРИ НА ДЕЙНОСТ
                                </Link>
                                <ul className="sub-menu">
                                    {/* Линк към страница с обобщени услуги, ако имате такава */}
                                    <li>
                                        <Link onClick={ClickHandler} to="/services">
                                            Всички услуги
                                        </Link>
                                    </li>

                                    {/* 1) Търговско право */}
                                    <li className="menu-item-has-children">
                                        <Link
                                            onClick={ClickHandler}
                                            to="/practice-single/targovsko-pravo"
                                        >
                                            Търговско право
                                        </Link>
                                        <ul className="sub-menu">
                                            {/* Подточки */}
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/aruzhestveno-pravo"
                                                >
                                                    Аружствено право
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/registracia-na-firma"
                                                >
                                                    Регистрация на фирма, фондация и сдружение
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/promyana-na-obstoyatelstva"
                                                >
                                                    Промяна на обстоятелства в Търговски регистър
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/preobrazuavane-na-drujestva"
                                                >
                                                    Преобразуване на търговски дружества
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/obzhalvane-na-aktove"
                                                >
                                                    Обжалване на актове в Търговски регистър
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/aport"
                                                >
                                                    Апорт
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/klon-predstavitelstvo"
                                                >
                                                    Регистрация на търговско представителство и клон
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/nasledyavane-drujestveni-dyalove"
                                                >
                                                    Наследяване на дружествени дялове
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/likvidacia-na-firma-yulnc"
                                                >
                                                    Ликвидация на фирма и ЮЛНЦ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/targovski-sporove"
                                                >
                                                    Търговски спорове
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/sabirane-na-vzemania"
                                                >
                                                    Дела за събиране на вземания
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/osporvane-na-upravitel"
                                                >
                                                    Оспорване на управителя
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/otmyana-na-reshenia-os"
                                                >
                                                    Отмяна на решения на общо събрание
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/transportni-sporove"
                                                >
                                                    Транспортни спорове
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/nesastoyatelnost"
                                                >
                                                    Несъстоятелност на търговски дружества
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/proizvodstvo-po-nesastoyatelnost"
                                                >
                                                    Молба за откриване на производство
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/predyavyavane-na-vzemania"
                                                >
                                                    Предявяване на вземания
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/zashtita-na-dlazhnika"
                                                >
                                                    Защита на длъжника в производство по несъстоятелност
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/vazrajenie-sreshtu-spisaci"
                                                >
                                                    Възражения срещу списъци на вземания и отменителни искове
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* 2) Недвижими имоти */}
                                    <li className="menu-item-has-children">
                                        <Link
                                            onClick={ClickHandler}
                                            to="/practice-single/nedvizhimi-imoti"
                                        >
                                            Недвижими имоти
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/konsultacia-pri-sdelki"
                                                >
                                                    Консултация при сделки с недвижими имоти
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/predvaritelen-dogovor"
                                                >
                                                    Предварителен договор за покупко-продажба
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/notarialen-akt"
                                                >
                                                    Изготвяне на нотариален акт
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/pridobivane-imot-davnost"
                                                >
                                                    Придобиване на имот по давност
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/dogovor-za-naem"
                                                >
                                                    Договор за наем
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/delba-na-imot"
                                                >
                                                    Доброволна и съдебна делба на недвижим имот
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/pravo-na-polzvane"
                                                >
                                                    Право на ползване
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/pravo-na-stroezh"
                                                >
                                                    Право на строеж
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/etajna-sobstvenost"
                                                >
                                                    Етажна собственост
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/spor-susobstvenici"
                                                >
                                                    Дело при спор между съсобственици
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* 3) Семейно и наследствено право */}
                                    <li className="menu-item-has-children">
                                        <Link
                                            onClick={ClickHandler}
                                            to="/practice-single/semeino-i-nasledstveno-pravo"
                                        >
                                            Семейно и наследствено право
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/razvod-po-vzaimno-suglasie"
                                                >
                                                    Развод по взаимно съгласие
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/razvod-pri-vina"
                                                >
                                                    Развод при вина на един от съпрузите
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/delo-za-izdrushka"
                                                >
                                                    Дело за издръжка
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/roditelski-prava"
                                                >
                                                    Дело за родителски права
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/razreshenie-za-patuvane"
                                                >
                                                    Разрешение за пътуване в чужбина
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/smyana-na-ime"
                                                >
                                                    Дело за смяна на име
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/brachen-dogovor"
                                                >
                                                    Изготвяне на брачен договор
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/priemane-otkaz-nasledstvo"
                                                >
                                                    Приемане и отказ от наследство
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/vazstanovyavane-zapazena-chast"
                                                >
                                                    Дело за възстановяване на запазена част от наследство
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/sporove-mezhdu-naslednici"
                                                >
                                                    Спорове между наследници
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/izgotvyane-na-zaveshtanie"
                                                >
                                                    Изготвяне на завещание
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* 4) Трудово право */}
                                    <li className="menu-item-has-children">
                                        <Link
                                            onClick={ClickHandler}
                                            to="/practice-single/trudovo-pravo"
                                        >
                                            Трудово право
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/obezshteteniya-po-trudov-dogovor"
                                                >
                                                    Дело за обезщетение по трудов договор
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/neizplateno-vaznagrajdenie"
                                                >
                                                    Дело за неизплатено трудово възнаграждение
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/zashtita-pri-nezakonno-uvolnenie"
                                                >
                                                    Защита при незаконно уволнение
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/obzhalvane-discipl-uvolnenie"
                                                >
                                                    Обжалване на дисциплинарно уволнение
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/trudovi-zaporizheniya"
                                                >
                                                    Трудови залози/гаранции
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/zashtita-na-rabotodatel"
                                                >
                                                    Защита на работодателя
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/trudovi-sporove-konsult"
                                                >
                                                    Консултации при трудови спорове
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* 5) Процесуално представителство */}
                                    <li className="menu-item-has-children">
                                        <Link
                                            onClick={ClickHandler}
                                            to="/practice-single/procesualno-predstavitelstvo"
                                        >
                                            Процесуално представителство
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/targovski-dela"
                                                >
                                                    Търговски дела
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/imotni-dela"
                                                >
                                                    Имотни дела
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/semeini-i-nasledstveni-dela"
                                                >
                                                    Семейни и наследствени дела
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/trudovi-dela"
                                                >
                                                    Трудови дела
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/dela-sreshtu-banki"
                                                >
                                                    Дела срещу банки
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/dela-sreshtu-kolektorski-firmi"
                                                >
                                                    Дела срещу колекторски фирми
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/dela-sreshtu-barzi-krediti"
                                                >
                                                    Дела срещу фирми за "бързи кредити"
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/otmyana-na-notarialni-aktove"
                                                >
                                                    Отмяна на нотариални актове
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/obezpechavane-na-badesht-isk"
                                                >
                                                    Обезпечаване на бъдещ иск
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/zapovedno-proizvodstvo"
                                                >
                                                    Заповедно производство
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* 6) Административно право */}
                                    <li className="menu-item-has-children">
                                        <Link
                                            onClick={ClickHandler}
                                            to="/practice-single/administrativno-pravo"
                                        >
                                            Административно право
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/obzhalvane-nakazatelni-postanovlenia"
                                                >
                                                    Обжалване на наказателни постановления
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/vazrajenia-sreshtu-auan"
                                                >
                                                    Възражения срещу АУАН
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/obzhalvane-admin-aktove"
                                                >
                                                    Обжалване на административни актове
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/licenzi-registracii"
                                                >
                                                    Издаване на лицензи, разрешения и регистрации
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/delo-sreshtu-nap-noi-kzp"
                                                >
                                                    Дело срещу НАП, НОИ, КЗП, КЗД, ИА "АА", Агенция „Митници“, КФН
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* 7) Изпълнително дело */}
                                    <li className="menu-item-has-children">
                                        <Link
                                            onClick={ClickHandler}
                                            to="/practice-single/izpalnitelno-delo"
                                        >
                                            Изпълнително дело
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/konsultacia-izpalnitelno-delo"
                                                >
                                                    Преглед и консултация по изпълнително дело
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/obzhalvane-deystvia-chsi"
                                                >
                                                    Обжалване на незаконносъобразни действия на ЧСИ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/zashtita-na-dlazhnik"
                                                >
                                                    Защита на длъжника
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/zashtita-na-vziskatel"
                                                >
                                                    Защита на взискателя
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/practice-single/prekratyavane-na-izpalnitelno-delo"
                                                >
                                                    Прекратяване на изпълнително дело
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* 8) Медицинско право */}
                                    <li>
                                        <Link
                                            onClick={ClickHandler}
                                            to="/practice-single/medicinsko-pravo"
                                        >
                                            Медицинско право
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Projects */}
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">
                                    ПРОЕКТИ
                                </Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link onClick={ClickHandler} to="/case-studies">
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/case-single/Real-Estate">
                                            Case Studies Single
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Blog */}
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">
                                    БЛОГ
                                </Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link onClick={ClickHandler} to="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/blog-left-sidebar">
                                            Blog Left sidebar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/blog-fullwidth">
                                            Blog full width
                                        </Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/">
                                            Blog single
                                        </Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use"
                                                >
                                                    Blog single
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/blog-single-left-sidebar/Provide-insight-into-how-canna-businesspeople-can-use"
                                                >
                                                    Blog single Left sidebar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to="/blog-single-fullwidth/Provide-insight-into-how-canna-businesspeople-can-use"
                                                >
                                                    Blog single full width
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            {/* Contact */}
                            <li>
                                <Link onClick={ClickHandler} to="/contact">
                                    КОНТАКТИ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Търсене (search) */}
                    <div className="cart-search-contact">
                        <div className="header-search-form-wrapper">
                            <button
                                onClick={() => setMenuState(!menuActive)}
                                className="search-toggle-btn"
                            >
                                <i className={`fi ti-search ${menuActive ? 'ti-close' : 'fi '}`}></i>
                            </button>
                            <div
                                className={`header-search-form ${
                                    menuActive ? 'header-search-content-toggle' : ''
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
