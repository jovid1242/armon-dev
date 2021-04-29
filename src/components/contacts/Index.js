import React from 'react'

import fon1 from '../../assets/img/l1.svg'
import fon2 from '../../assets/img/r1.svg'

import './Index.css'
import '../pages-fon-css/main.css'
export default function Index() {
    return (
        <div>
            <div className="about-section">
                <div className="left-fon">
                    <img src={fon1} alt="" />
                    <img src={fon1} alt="" />
                    <img src={fon1} alt="" />
                </div>
                <div className="about-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-6">
                                <div className="about-section-head">
                                    <h2 className="text-contacts">Контакты</h2>
                                </div>
                            </div>
                            <div className="col-md-6 col-6">
                                <div className="about-section-head">
                                    <span><a href="#">главная</a>\контакты</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-main">
                            <ul>
                                <div className="row">
                                    <div className="col-md-3">
                                        <li><span>Колл Центр</span></li>
                                        <li><p>+992 98-722-90-00</p></li>
                                        <li><p>+992 90-722-90-00</p></li>
                                    </div>
                                    <div className="col-md-9">
                                        <li><span>WhatsApp</span></li>
                                        <li><p>+992 98-722-90-00</p></li>
                                    </div>
                                </div>
                                <li><span>Адрес:</span></li>
                                <li><p>г. Душанбе, Испечак М2-14</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-fon">
                    <img src={fon2} alt="" />
                    <img src={fon2} alt="" />
                    <img src={fon2} alt="" />
                </div>
            </div>
        </div>
    )
}
