import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import svg404 from '../../assets/img/404.svg'
import Modal from '../modal/Index'
import './Index.css'

export default function Index() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="notf-section">
                <div className="container">
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
                                    <button className="" onClick={() => setModalShow(true)}>Оставить заявку</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
