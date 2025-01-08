import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Cases from '../../api/case';
import ServiceTab from './ServiceTab';

const CaseSinglePage = (props) => {
    const { slug } = useParams();

    const caseDetails = Cases.find(item => item.slug === slug);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={caseDetails.cTitle} pagesub={'Проект'} />
            <section className="project-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-12">
                            <div className="img-holder">
                                <img src={caseDetails.cImg} alt="" />
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="project-details">
                                <h2>Гражданско съдебно производство и минимални стандарти за поддръжка</h2>
                                <h3>Вдигайки тежък кожен шал, който покриваше цялата долна част на ръката ѝ към зрителя. След това Грегор се обърна към прозореца и мрачното време</h3>
                                <p>Махаше безпомощно, докато гледаше. "Какво се случи с мен?" помисли си той. Това не беше сън. Стаята му, правилна човешка стая, макар и малко прекалено малка, лежеше спокойно между четирите си познати стени. Колекция от текстилни мостри беше разпръсната на масата. Самса беше пътуващ търговец - и над него висеше картина, която наскоро беше</p>
                                <p>Човешка стая, макар и малко прекалено малка, лежеше спокойно между четирите си познати стени. Колекция от текстилни мостри беше разпръсната на масата. Самса беше пътуващ търговец - и над него висеше</p>
                                <p>Колекция в хубава, позлатена рамка. Тя показваше дама с кожена шапка и шал, която седеше изправена, вдигайки тежък кожен шал, който покриваше цялата долна част на ръката ѝ към зрителя. След това Грегор се обърна към прозореца и мрачното време. Капки</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <ServiceTab />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="related-case-studies">
                                <h2>Свързани проучвания на случаи</h2>
                                <div className="case-studies-grids">
                                    {Cases.slice(0, 3).map((cases, i) => (
                                        <div className="grid" key={i}>
                                            <div className="img-holder">
                                                <img src={cases.cImg} alt="" />
                                            </div>
                                            <div className="overlay">
                                                <div className="content">
                                                    <p className="cat">Правни услуги</p>
                                                    <h3><Link onClick={ClickHandler} to={`/case-single/${cases.slug}`}>{cases.cTitle}</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
export default CaseSinglePage;
