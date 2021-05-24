import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'

import projectsImg1 from '../../assets/img/projects-1.jfif'
import projectsImg2 from '../../assets/img/projects-2.jfif'
import projectsImg3 from '../../assets/img/29.1.jpg'

export default function Index({ projects }) {
    return (
        <>
            <div className="ofices-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            Проекты
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | Проекты
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | Проекты
                        </p>
                        <h2 className="about__title" id="textStart">
                            Проекты
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="ofices-card">
                                <div className="card__img">
                                    <a href="https://arc.tj/project/ispechak-residence/">
                                        <img src={projectsImg1} alt="" />
                                    </a>
                                </div>
                                <p className="card__title-text"><a href="https://arc.tj/project/ispechak-residence/">Ispechak Residence</a></p>
                                <p className="card__text">Адреc:<br />Испечак 2 М14</p>
                                <p className="card__text">Наш номер:<br /><a href="tel:+992987229000">+992987229000</a></p>
                                <p className="card__text">Рабочее время:<br /> ПН-СБ - с: 08:00 до 19:00, ВСК - выходной <br />Наша почта: <a href="mailto:info@armon.tj">sales@armon.tj</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="ofices-card">
                                <div className="card__img">
                                    <a href="https://armon.tj/freedom">
                                        <img src={projectsImg2} alt="" />
                                    </a>
                                </div>
                                <p className="card__title-text"><a href="https://armon.tj/freedom">Freedom Residence</a></p>
                                <p className="card__text">Адреc:<br />ул. Н. Махсум 156 (102-й мкр)</p>
                                <p className="card__text">Наш номер:<br /><a href="tel:+992987229000">+992987229000</a></p>
                                <p className="card__text">Рабочее время:<br /> ПН-СБ - с: 08:00 до 19:00, ВСК - выходной <br />Наша почта: <a href="mailto:info@armon.tj">sales@armon.tj</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="ofices-card">
                                <div className="card__img">
                                    <a href="#">
                                        <img src={projectsImg3} alt="" />
                                    </a>
                                </div>
                                <p className="card__title-text"><a href="#">Скоро начнем!</a></p>
                                <p className="card__text">Следите за нашими обновлениями</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
