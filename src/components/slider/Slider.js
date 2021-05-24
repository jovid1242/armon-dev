import React, { useState } from "react"
import { Carousel } from 'react-bootstrap';
import Modal from '../modal/Index'
import slidew from '../../assets/img/slide_w.jpg'
import slideww from '../../assets/img/slide_ww.jpg'

import { Animated } from "react-animated-css";

import "./Slider.css";

export default function SliderWeb() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>

            <Carousel pause={false} fade style={{ animationDelay: "2.5s" }}>
                <Carousel.Item interval={5000} pause={false}>
                    <img
                        className="d-block w-100"
                        src={slideww}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
                            <a href="https://arc.tj/project/ispechak-residence/">
                                <h3 style={{ animationDelay: "3s" }} >Ispechak Residence</h3>
                                <p style={{ animationDelay: "3s" }}>Рады представить Вам первый в Душанбе
                                продуманный архитектурный проект в
                                котором сочетаются красота и качество,
                            роскошь и уют, простота и обдуманность в деталях.</p>

                            </a>
                        </Animated>
                        <div className="slide__btn d-flex" style={{ animationDelay: "3s" }}>
                            <button>Узнать подробнее</button>
                            <button onClick={() => setModalShow(true)}>Оставить заявку</button>
                        </div>
                        <div className="mob__btn-slider">
                            <button onClick={() => setModalShow(true)}>Оставить заявку</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} pause={false}>
                    <img
                        className="d-block w-100"
                        src={slidew}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
                            <a href="https://armon.tj/freedom">
                                <h3 style={{ animationDelay: "3s" }}>Freedom Residence</h3>
                                <p style={{ animationDelay: "3s" }}>
                                    Freedom Residence - место, где красота и удобство, качество и уют,
                                    безопасность и беззаботность никогда не будут спорить между собой.
                            </p>

                            </a>
                        </Animated>
                        <div className="slide__btn d-flex" style={{ animationDelay: "3s" }}>
                            <button>Узнать подробнее</button>
                            <button onClick={() => setModalShow(true)}>Оставить заявку</button>
                        </div>
                        <div className="mob__btn-slider">
                            <button onClick={() => setModalShow(true)}>Оставить заявку</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
