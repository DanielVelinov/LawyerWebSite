import React from 'react';
import { Link } from 'react-router-dom';
import Practices from '../../api/Practices';

const Practice = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className={`service-section ${props.sClass}`}>
            <div className="content-area clearfix">
                <div className="left-col">
                    <div className="inner-content">
                        <blockquote>“Тя показваше дама с кожена шапка и шал, която седеше изправена, вдигайки тежък кожен шал, който покриваше цялата долна част на ръката ѝ към зрителя.”</blockquote>

                        <h4>Джон Доу</h4>
                        <span>Изпълнителен директор на компанията</span>
                    </div>
                </div>
                <div className="right-col">
                    <div className="section-title-s2">
                        <div className="icon">
                            <i className="fi flaticon-balance"></i>
                        </div>
                        <span>В какво сме експерти</span>
                        <h2>Юридически области на практика</h2>
                        <p>Маеценас темпус, теллус егет кондиментум ронкус, сем куам семпер либеро, седи амет адиписинг сем некве сед ипсум. Нам куам нунк.</p>
                    </div>
                    <div className="service-grids clearfix">
                        {Practices.map((practice, Pitem) => (
                            <div className="grid" key={Pitem}>
                                <i className={`fi ${practice.sIcon}`}></i>
                                <h3><Link onClick={ClickHandler} to={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></h3>
                                <p>{practice.des2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Practice;
