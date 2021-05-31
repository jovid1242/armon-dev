import React from 'react'
import { Link } from 'react-router-dom'
import svg404 from '../../assets/img/404.svg'
import './Index.css'

export default function Index() {
    return (
        <>
            <div className="notf-section">
                <div className="container">
                    {/* <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            404 СТРАНИЦА НЕ НАЙДЕНА
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | 404 СТРАНИЦА НЕ НАЙДЕНА
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | 404 СТРАНИЦА НЕ НАЙДЕНА
                        </p>
                        <h2 className="about__title" id="textStart">
                            404 СТРАНИЦА НЕ НАЙДЕНА
                        </h2>
                    </div> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-center">
                                <img src={svg404} alt="sdcds" className="img__notf" />
                            </div>
                            <div className="text__notf">
                                <p className="notf__title d-flex justify-content-center">ошибка 404</p>
                                <p className="page__not d-flex justify-content-center">Страница не найдена </p>
                                <p className="notf__text d-flex justify-content-center">Извините! Страница, которую Вы ищете, не может быть найдена</p>
                                <div className="notf__btn d-flex justify-content-center">
                                    <button className="">Оставить заявку</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
