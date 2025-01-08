import React from 'react';
import abimg from '../../images/about.jpg';
import signature from '../../images/signature.png';
import { Link } from 'react-router-dom';

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="about-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4 col-12">
                        <div className="left-col">
                            <div className="section-title">
                                <div className="icon">
                                    <i className="fi flaticon-home-3"></i>
                                </div>
                                <span>За Екатерина Димитрова</span>
                                <h2>Ние сме най-популярната адвокатска кантора с разнообразни правни услуги!</h2>
                                <p>Маеценас темпус, теллус егет кондиментум ронкус, сем куам семпер либеро, седи амет адиписинг сем некве сед ипсум.</p>
                                <Link onClick={ClickHandler} to="/about" className="more-about">Прочетете повече за нас <i className="fi flaticon-next-1"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-12">
                        <div className="mid-col">
                            <img src={abimg} alt="" />
                        </div>
                    </div>
                    <div className="col col-lg-4 col-12">
                        <div className="right-col">
                            <p>Маеценас темпус, теллус егет кондиментум ронкус, сем куам семпер либеро, седи амет адиписинг сем некве сед ипсум. Нам куам нунк, бландит вел, луксус пулвинар, хендрит ид, лорем. Маеценас нек одио ет анте тинцидунт темпус. Донец витае сапиен либеро.</p>
                            <div className="quoter">
                                <h4>Мишел Джон</h4>
                                <span>- Изпълнителен директор на компанията</span>
                            </div>
                            <div className="signature">
                                <img src={signature} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
