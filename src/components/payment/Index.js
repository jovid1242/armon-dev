import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../modal/Index'

import './Index.css'

import btnsvg from '../../assets/img/t-inbtn.svg'
import imgtin from '../../assets/img/paym.png'

export default function Index() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="ofices-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            РАССРОЧКА
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | Рассрочка
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | Рассрочка
                        </p>
                        <h2 className="about__title" id="textStart">
                            РАССРОЧКА
                        </h2>
                    </div>
                    <div className="payment-main">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="payment-wrapper">
                                    <div className="payment__text-title">
                                        <p>УДОБНАЯ РАССРОЧКА</p>
                                    </div>
                                    <div className="payment__text">
                                        <p>В отношении рассрочки все намного проще - Вам всего лишь необходимо внести предоплату 30% от стоимости квартиры, а остальные 70% будут рассчитаны на оставшиеся месяцы.
Одной из главных преимуществ рассрочки состоит в отсутствии залогов и дополнительных процентов.</p>
                                    </div>
                                    <div className="payment__btn">
                                        <button onClick={() => setModalShow(true)}>
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
                    <div className="payment__wrapper-main">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <div className="payment-wrapper">
                                    <div className="payment__text-title">
                                        <span>Стандартная рассрочка</span>
                                    </div>
                                    <div className="payment__btn payment__btn-mt">
                                        <button onClick={() => setModalShow(true)}>
                                            <img src={btnsvg} alt="t-inbtn" />
                                            Оставить заявку
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="installment">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-5">
                                            <div className="percent">
                                                <p>50%</p>
                                            </div>
                                            <div className="installment__text">
                                                <p>
                                                    взнос <br />
                                                    Без скидки
                                                </p>
                                            </div>
                                            <div className="percent">
                                                <p>6%</p>
                                            </div>
                                            <div className="installment__text">
                                                <p>
                                                    Надбавка, свыше 6<br />
                                                    месяцев до СМР
                                                </p>
                                            </div>
                                            <div className="percent">
                                                <p>3%</p>
                                            </div>
                                            <div className="installment__text">
                                                <p>
                                                    Надбавка, до 6 месяцев<br />
                                                    до СМР
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-5">
                                            <div className="percent">
                                                <p>70%</p>
                                            </div>
                                            <div className="installment__text">
                                                <p>
                                                    взнос <br />
                                                    Без скидки
                                                </p>
                                            </div>
                                            <div className="percent">
                                                <p>4%</p>
                                            </div>
                                            <div className="installment__text">
                                                <p>
                                                    Надбавка, свыше 6<br />
                                                    месяцев до СМР
                                                </p>
                                            </div>
                                            <div className="percent">
                                                <p>2%</p>
                                            </div>
                                            <div className="installment__text">
                                                <p>
                                                    Надбавка, до 6 месяцев<br />
                                                    до СМР
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
