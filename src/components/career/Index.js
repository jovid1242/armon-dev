import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'

import careerImg1 from '../../assets/img/career1.png'
import careerImg2 from '../../assets/img/career2.png'
import careerImg3 from '../../assets/img/career3.png'

export default function Index() {
    return (
        <>
            <div className="career-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            Карьера
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | Карьера
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 ">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | Карьера
                        </p>
                        <h2 className="about__title" id="textStart">
                            Карьера
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="career-card">
                                <div className="career-card-card__img">
                                    <img src={careerImg1} alt="" />
                                </div>
                                <p className="career-card_card__title-text">Проект Менеджер</p>
                                <p className="career-card_card__text">В строительную компанию требуется: Проект-менеджер Описание работы: -управление проектом в целом; -проектирование и расстановка приоритетов; – планирование выполнения задач; -контроль,…</p>
                                <button className="career-card__button">Подробнее</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="career-card">
                                <div className="career-card-card__img">
                                    <img src={careerImg2} alt="" />
                                </div>
                                <p className="career-card_card__title-text">Проект Менеджер</p>
                                <p className="career-card_card__text">В строительную компанию требуется: Проект-менеджер Описание работы: -управление проектом в целом; -проектирование и расстановка приоритетов; – планирование выполнения задач; -контроль,…</p>
                                <button className="career-card__button">Подробнее</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="career-card">
                                <div className="career-card-card__img">
                                    <img src={careerImg3} alt="" />
                                </div>
                                <p className="career-card_card__title-text">Проект Менеджер</p>
                                <p className="career-card_card__text">В строительную компанию требуется: Проект-менеджер Описание работы: -управление проектом в целом; -проектирование и расстановка приоритетов; – планирование выполнения задач; -контроль,…</p>
                                <button className="career-card__button">Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
