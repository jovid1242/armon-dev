import React, { useState } from 'react'
import Modal from '../modal/Index'
import './Index.css'

import btnsvg from '../../assets/img/t-inbtn.svg'

export default function Index() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="feedback__wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="feedback-main">
                                <div className="text__feedback">
                                    <p>Затрудняетесь с выбором? Мы ответим на ваши вопросы!</p>
                                    <span>Оставьте свои данные и наши консультанты свяжутся с вами в ближайшее время.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="feedback__btn">
                                <button onClick={() => setModalShow(true)}>
                                    <img src={btnsvg} alt="t-inbtn" />
                                        получить консультацию
                                    </button>
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
