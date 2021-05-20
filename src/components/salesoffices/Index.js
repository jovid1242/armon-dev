import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'

import freedom from '../../assets/img/seles-offices-freedon.jpg'
import oficesImg from '../../assets/img/Rectangle.png'


export default function Index({ projects }) {

    return (
        <>
            <div className="ofices-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            Офисы продаж
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | Офисы продаж
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | Офисы продаж
                        </p>
                        <h2 className="about__title" id="textStart">
                            Офисы продаж
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="ofices-card">
                                <div className="card__img">
                                    <a href="https://arc.tj/project/ispechak-residence/">
                                        <img src={oficesImg} alt="" />
                                    </a>
                                </div>
                                <p className="card__title-text"><a href="https://arc.tj/project/ispechak-residence/">Ispechak Residence</a></p>
                                <p className="card__text">Адреc:<br />Душанбе, Испечак М2-14</p>
                                <p className="card__text">Наш номер:<br /><a href="tel:+992987229000">+992 987 22 9000</a></p>
                                <p className="card__text">Рабочее время:<br /> Пон-Суб: 08:00–19:00, Вcк: 10:00-17:00 <br />Наша почта: <a href="mailto:info@armon.tj">sales@armon.tj</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="ofices-card">
                                <div className="card__img">
                                    <a href="https://armon.tj/freedom/">
                                        <img src={freedom} alt="" />
                                    </a>
                                </div>
                                <p className="card__title-text"><a href="https://armon.tj/freedom/">Freedom Residence</a></p>
                                <p className="card__text">Адреc:<br />ул. Н. Махсум 156 (102-й мкр)</p>
                                <p className="card__text">Наш номер:<br /><a href="tel:+992987229000">+992 987 22 9000</a></p>
                                <p className="card__text">Рабочее время:<br /> Пон-Суб: 08:00–19:00, Вcк: 10:00-17:00 <br />Наша почта: <a href="mailto:info@armon.tj">sales@armon.tj</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="ofices-card">
                                <div className="card__img">
                                    <img src={oficesImg} alt="" />
                                </div>
                                <p className="card__title-text">Скоро начнем!</p>
                                <p className="card__text">Адреc:<br />Душанбе, Испечак М2-14</p>
                                <p className="card__text">Наш номер:<br /><a href="tel:+992987229000">+992 987 22 9000</a></p>
                                <p className="card__text">Рабочее время:<br /> Пон-Суб: 08:00–19:00, Вcк: 10:00-17:00 <br />Наша почта:<a href="mailto:info@armon.tj">sales@armon.tj</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
