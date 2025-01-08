import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const ServiceTab = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div className="project-single-tab clearfix">
            <ul className="nav">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Предизвикателство
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Решение
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Резултати
                        </NavLink>
                    </NavItem>
                </Nav>
            </ul>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <p>Мостри от текстил лежаха разпръснати на масата - Самса беше пътуващ търговец - и над нея висеше картина, която наскоро беше изрязал от илюстровано списание и поставил в хубава, позлатена рамка. Тя показваше дама с кожена шапка и шал, която седеше изправена, вдигайки тежък кожен шал, който покриваше цялата долна част на ръката ѝ към зрителя. След това Грегор се обърна към прозореца и мрачното време.</p>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <p>Колекция от текстилни мостри лежеше разпръсната на масата и над нея висеше картина, която наскоро беше изрязал от илюстровано списание и поставил в хубава, позлатена рамка. Тя показваше дама с кожена шапка и шал, която седеше изправена, вдигайки тежък кожен шал, който покриваше цялата долна част на ръката ѝ към зрителя. След това Грегор се обърна към прозореца и мрачното време.</p>
                </TabPane>
                <TabPane tabId="3">
                    <p>Колекция от текстилни мостри лежеше разпръсната на масата - Самса беше пътуващ търговец - и над нея висеше картина, която наскоро беше изрязал от илюстровано списание и поставил в хубава, позлатена рамка. Тя показваше дама с кожена шапка и шал, която седеше изправена, вдигайки тежък кожен шал, който покриваше цялата долна част на ръката ѝ към зрителя. След това Грегор се обърна към прозореца и мрачното време.</p>
                </TabPane>
            </TabContent>
        </div>
    );
};

export default ServiceTab;
