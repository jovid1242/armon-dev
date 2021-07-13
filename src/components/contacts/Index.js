import React from 'react'
import { Link } from 'react-router-dom'
// import { YMaps } from 'react-yandex-maps';

import emailsvg from '../../assets/img/email.svg'
import pindrop from '../../assets/img/pin_drop.svg'
import phonealt from '../../assets/img/phone-alt.svg'

import './Index.css'

export default function Index() {
    return (
        <>
            <div className="about-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            Контакты
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | Контакты
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | Контакты
                        </p>
                        <h2 className="about__title" id="textStart">
                            Контакты
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="info_wrapper">
                                <div className="info__text">
                                    <p>Есть вопросы? Свяжитесь с нами, и наши консультанты с радостью Вам ответят</p>
                                </div>
                                <div className="info__phone">
                                    <ul className="info__contact">
                                        <li>
                                            <img src={phonealt} className="info__img" alt="" />
                                            <p className="info__phone-text">
                                                <a href="tel:+992987229000"> +992 98-722-90-00</a>
                                            </p>
                                        </li>
                                        <li>
                                            <img src={phonealt} className="info__img" alt="" />
                                            <p className="info__phone-text">
                                                <a href="tel:+992110220000"> +992 11-022-00-00</a>
                                            </p>
                                        </li>
                                        <li>
                                            <img src={emailsvg} className="info__img" alt="" />
                                            <p className="info__phone-text">
                                                <a href="mailto:info@armon.tj">info@armon.tj</a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="info__text">
                                    <p>Основной офис продаж находится по адресу:</p>
                                </div>
                                <div className="info__address-text">
                                    <img src={pindrop} className="info__img img__adress" alt="" />
                                    <p>
                                        <a href="https://yandex.ru/maps/-/CCU4aDBiGC">г. Душанбе, ул. Н. Махсум 156 (102-й мкр)</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div style={{ position: "relative", overflow: "hidden", borderRadius: "20px", outline: "none", boxShadow: "0 0 10px 3px rgb(0 0 0 / 10%)" }} className="map__about"><a href="https://yandex.ru/maps/10318/dushanbe/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Душанбе</a><a href="https://yandex.ru/maps/10318/dushanbe/?ll=68.724163%2C38.585049&utm_medium=mapframe&utm_source=maps&z=15.54" style={{ color: "#fff", fontSize: "12px", position: "absolute", top: "14px" }}>Душанбе — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCU4QHuwXB" width="100%" height="443px" frameBorder="0" allowFullScreen="true" style={{ osition: "relative" }}></iframe></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
