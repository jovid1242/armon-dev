import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'

import btnsvg from '../../assets/img/t-inbtn.svg'
import imgtin from '../../assets/img/t-in.png'

export default function Index() {
    return (
        <>
            <div className="ofices-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            TRADEE-IN
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | TRADEE-IN
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | TRADEE-IN
                        </p>
                        <h2 className="about__title" id="textStart">
                            TRADEE-IN
                        </h2>
                    </div>
                    <div className="tradein-main">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="tradein-wrapper">
                                    <div className="tradein__text-title">
                                        <p>Нужно оглавление</p>
                                    </div>
                                    <div className="tradein__text">
                                        <p>Trade - in - схема не просто взаимозачётная, но и взаимовыгодная.
                                        Это редкая для обычного человека возможность приобрести квартиру в новостройке,
                                        не влезая ради неё в ипотеку. Это быстрый и удобный способ улучшить жилищные условия,
                                        в данной опции в качестве оплаты принимается автомобиль/квартира.</p>
                                    </div>
                                    <div className="tradein__btn">
                                        <button>
                                            <img src={btnsvg} alt="t-inbtn" />
                                            Оставить заявку
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="img-wrapper">
                                    <img src={imgtin} alt="imgtin" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
