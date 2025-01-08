import React from 'react'
import { Link } from 'react-router-dom'

const Features = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="feature-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="info-col">
                            <h4>Няколко стъпки, които трябва да направите, за да получите най-добрите услуги от Екатерина Димитрова</h4>
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn-s2">Свържете се с нас</Link>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="feature-grid">
                            <i className="fi flaticon-standard"></i>
                            <h3>Квалифицирани адвокати</h3>
                            <p>Мека козина, която покрива цялата й долна ръка. Грегор след това се обърна, за да погледне през прозореца при мрачното време.</p>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="feature-grid">
                            <i className="fi flaticon-balance"></i>
                            <h3>Правна защита</h3>
                            <p>Мека козина, която покрива цялата й долна ръка. Грегор след това се обърна, за да погледне през прозореца при мрачното време.</p>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="feature-grid">
                            <i className="fi flaticon-mace"></i>
                            <h3>99% спечелени дела</h3>
                            <p>Мека козина, която покрива цялата й долна ръка. Грегор след това се обърна, за да погледне през прозореца при мрачното време.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
