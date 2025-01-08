import React from 'react';
import { Link } from 'react-router-dom';
import Cases from '../../api/case';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const CaseStudies2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className={`case-studies-section-s2 section-padding ${props.cClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-6 col-md-8">
                        <div className="section-title-s6">
                            <span>Нашите най-добри проекти</span>
                            <h2>Последни проучвания на случаи</h2>
                            <p>Маеценас темпус, теллус егет кондиментум ронкус, сем куам семпер либеро сит амет адиписцинг.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-area">
                <div className="case-studies-grids case-studies-slider">
                    <Slider {...settings}>
                        {Cases.slice(0, 6).map((cases, i) => (
                            <div className="grid" key={i}>
                                <div className="img-holder">
                                    <img src={cases.cImg} alt="" />
                                </div>
                                <div className="overlay">
                                    <div className="content">
                                        <p className="cat">Правни услуги</p>
                                        <h3><Link onClick={ClickHandler} to={`/case-single/${cases.slug}`}>{cases.cTitle}</Link></h3>
                                        <p>Покриваше цялата долна част на ръката ѝ към зрителя. След това Грегор се обърна към прозореца.</p>
                                        <Link onClick={ClickHandler} to={`/case-single/${cases.slug}`}><i className="ti-arrow-circle-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies2;
