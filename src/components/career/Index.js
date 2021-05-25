import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Form } from 'react-bootstrap';
import './Index.css'

import careerImg1 from '../../assets/img/career1.png'
import careerImg2 from '../../assets/img/career2.png'
import careerImg3 from '../../assets/img/career3.png'

export default function Index() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-wrapper__text">
                        <p className="d-flex justify-content-center text__modal-title">Проект Менеджер</p>
                        <div className="under__modal-text d-flex justify-content-center">
                            <div className="under__text"></div>
                        </div>
                        <p className="text-center text__modal-text">What is Lorem Ipsum? <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className="bnt__modal-wrapper"><button className="btn__modal" onClick={() => { setModalShow(false) }}>закрыть</button></div>
                    </div>
                </Modal.Body>
            </Modal>
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
                                <button className="career-card__button" onClick={() => { setModalShow(true) }}>Подробнее</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="career-card">
                                <div className="career-card-card__img">
                                    <img src={careerImg2} alt="" />
                                </div>
                                <p className="career-card_card__title-text">Проект Менеджер</p>
                                <p className="career-card_card__text">В строительную компанию требуется: Проект-менеджер Описание работы: -управление проектом в целом; -проектирование и расстановка приоритетов; – планирование выполнения задач; -контроль,…</p>
                                <button className="career-card__button" onClick={() => { setModalShow(true) }}>Подробнее</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="career-card">
                                <div className="career-card-card__img">
                                    <img src={careerImg3} alt="" />
                                </div>
                                <p className="career-card_card__title-text">Проект Менеджер</p>
                                <p className="career-card_card__text">В строительную компанию требуется: Проект-менеджер Описание работы: -управление проектом в целом; -проектирование и расстановка приоритетов; – планирование выполнения задач; -контроль,…</p>
                                <button className="career-card__button" onClick={() => { setModalShow(true) }}>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
