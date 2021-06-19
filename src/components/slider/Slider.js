import React, { useState } from "react"
import { Carousel } from 'react-bootstrap';
import Modal from '../modal/Index'
import Rodal from 'rodal';
import axios from 'axios'
import FormData from 'form-data'
import validation from './validateModal'
import { Toast } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser'

import slidew from '../../assets/img/slide_w.jpg'
import slideww from '../../assets/img/slide_ww.jpg'
import slide3 from '../../assets/icon-slider/armon_sale1.jpg'
import iconPromt from '../../assets/icons/offer_2.svg'

import { Animated } from "react-animated-css";

import "./Slider.css";

export default function SliderWeb() {
    const [modalShow, setModalShow] = useState(false);
    const [validetAlert, setValidetAlert] = useState(null)
    const [showt, setShowt] = useState(false)
    const [form, setForm] = useState({
        username: null,
        phone: null
    })

    const [openImgModal, setOpenImgModal] = useState(
        { visible: false }
    )


    const show = () => {
        setOpenImgModal({ visible: true });
    }

    const hide = () => {
        setOpenImgModal({ visible: false });
    }

    const handleModalInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        const data = form
        data[name] = value
        setForm(data)
    }

    const submitForm = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('site', 'armon.tj');
        data.append('theme', '"Акция 30/30/30"');
        data.append('name', form.username);
        data.append('phone', form.phone);
        if (valideModal()) {
            axios.post(`https://armon.tj/freedom/telegramForm/php/send-message-to-telegram.php`, data)
                .then(res => {
                    setValidetAlert(res.data)
                    setShowt(true)
                })
                .catch((errors) => {
                    console.log('Ошибка', `${errors.message}`);
                })
        } else {
            return
        }
    }
    // jovid1242jivO

    const valideModal = () => {
        const err = validation.modalValidation(form)
        if (err.error) {
            setValidetAlert(err.message)
            setShowt(true)
            return false
        }
        return true
    }

    return (
        <>
            <div className="promo__modal">
                <Rodal visible={openImgModal.visible} onClose={hide.bind()} width="600">
                    <div className="modal-icon__promotions">
                        <img src={iconPromt} alt="" />
                    </div>
                    <div className="stock__wrapper">
                        <div className="stock__wrapper-title">
                            <p>Акция "УДОБНАЯ РАССРОЧКА "30/30/30"</p>
                        </div>
                        <div className="pdtext">
                            <div className="ddtt"></div>
                        </div>
                        <div className="stock__wrapper-text">
                            <p>
                                В рамках данной акции Вы можете приобрести
                                желаемую недвижимость
                                в ЖК "Freedom Residence" в рассрочку и без лишних переплат!
                                Вы вносите первоначальный взнос от 30%, и затем, в течение
                                30 месяцев выплачиваете фиксированную сумму.
                                "</p>
                        </div>
                        <div className="modal__input__group">
                            <Toast onClose={() => setShowt(false)} show={showt} delay={3000} autohide>
                                <Toast.Body>
                                    <span className="toasp__text-modal">
                                        {ReactHtmlParser(validetAlert)}
                                    </span>
                                </Toast.Body>
                            </Toast>
                            <form action="" onSubmit={submitForm}>
                                <ul>
                                    <li>
                                        <input
                                            type="text"
                                            name="username"
                                            onChange={handleModalInput}
                                            className="mdl__input"
                                            placeholder="Имя..."
                                        />
                                    </li>
                                    <li>
                                        <input
                                            type="text"
                                            name="phone"
                                            onChange={handleModalInput}
                                            className="mdl__input mt-2"
                                            placeholder="Тел... +992__"
                                        />
                                    </li>
                                </ul>
                                <div className="btn__promo">
                                    <button >
                                        Отправить
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Rodal>
            </div>
            <Carousel pause={false} fade style={{ animationDelay: "2.5s" }}>
                <Carousel.Item interval={5000} pause={false}>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
                            <h3 style={{ animationDelay: "3s" }}>Акция "УДОБНАЯ <br /><br />РАССРОЧКА "30/30/30""</h3>
                            <p style={{ animationDelay: "3s" }}>
                                В рамках данной акции Вы можете приобрести желаемую недвижимость в ЖК "Freedom Residence" в рассрочку и без лишних переплат! Вы вносите первоначальный взнос от 30%,
                                и затем, в течение 30 месяцев выплачиваете фиксированную сумму.
                            </p>
                        </Animated>
                        <div className="slide__btn d-flex" style={{ animationDelay: "3s" }}>
                            <button> <a href="#stackk">Узнать подробнее</a></button>
                            <button onClick={show.bind()}>Оставить заявку</button>
                        </div>
                        <div className="mob__btn-slider">
                            <button onClick={show.bind()}>Оставить заявку</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} pause={false}>
                    <img
                        className="d-block w-100"
                        src={slideww}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
                            <h3 style={{ animationDelay: "3s" }} >Ispechak Residence</h3>
                            <p style={{ animationDelay: "3s" }}>Рады представить Вам первый в Душанбе
                                продуманный архитектурный проект в
                                котором сочетаются красота и качество,
                                роскошь и уют, простота и обдуманность в деталях.</p>
                        </Animated>
                        <div className="slide__btn d-flex" style={{ animationDelay: "3s" }}>
                            <button>
                                <a href="https://arc.tj/project/ispechak-residence/">
                                    Узнать подробнее
                                </a>
                            </button>
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
                            <h3 style={{ animationDelay: "3s" }}>Freedom Residence</h3>
                            <p style={{ animationDelay: "3s" }}>
                                Freedom Residence - место, где красота и удобство, качество и уют,
                                безопасность и беззаботность никогда не будут спорить между собой.
                            </p>
                        </Animated>
                        <div className="slide__btn d-flex" style={{ animationDelay: "3s" }}>
                            <button> <a href="https://armon.tj/freedom">Узнать подробнее</a></button>
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
