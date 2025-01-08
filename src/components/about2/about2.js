import React from 'react';
import abimg from '../../images/about-2.jpg';
import abimg2 from '../../images/about-3.jpg';
import { Link } from 'react-router-dom';

const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };
    
    return (
        <section className="about-section-s2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4 col-12">
                        <div className="left-col">
                            <div className="section-title-s5">
                                <span>За Екатерина Димитрова</span>
                                <h2>Имате ли нужда от най-добрите адвокати?</h2>
                                <p>Маеценас темпус, теллус егет кондиментум ронкус, сем куам семпер либеро, седи амет адиписинг сем некве сед ипсум. Нам куам нунк.</p>
                                <Link onClick={ClickHandler} to="/about" className="theme-btn">Разгледайте повече</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-8 col-12">
                        <div className="right-col clearfix">
                            <div>
                                <img src={abimg} alt="Екатерина Димитрова" />
                            </div>
                            <div>
                                <img src={abimg2} alt="Екатерина Димитрова" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;
