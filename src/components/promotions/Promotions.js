import React, { useRef, useState, useEffect } from 'react'
import iconPromt from '../../assets/icons/offer_2.svg'
import Rodal from 'rodal';
import './promotions.css'
import axios from 'axios'
import FormData from 'form-data'
import validation from './validateModal'
import { Toast } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser'

export default function Promotions() {
    const [validetAlert, setValidetAlert] = useState(null)
    const [showt, setShowt] = useState(false)
    const [form, setForm] = useState({
        username: null,
        phone: null
    })


    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('july 15, 2021 18:00:00').getTime()
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hourse = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // console.log(days);
            if (distance < 0) {
                // stop time
                clearInterval(interval.current)
            } else {
                //update time
                // console.log(days);
                setTimerDays(days);
                setTimerHours(hourse);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    }
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
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
            const stock = {
                theme: "Акция 30/30/30",
                name: form.username,
                phone: form.phone
            }
            axios.post(`https://api.armon.tj/stock/create`, stock)
                .then(res => {
                    setValidetAlert('Спасибо за отправку вашего сообщения')
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
            <div className="promotions-section" id="stackk">
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
                <div className="container">
                    <div className="promotions__wrapper">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="pro__wrapper-title">
                                    <p>Успейте приобрести</p>
                                    <span>квартиру мечты на самых выгодных условиях! <br />
                                        Количество квартир ограничено</span>
                                </div>
                                <div className="pro__wr-text">
                                    <p>до конца акции осталось:</p>
                                </div>
                                {/* <h2>
                                    {timerDays}  , 
                                </h2> */}
                                <div className="promo__time">
                                    <div className="d-flex">
                                        <div className="promo__days">
                                            <p>
                                                {timerDays} &nbsp; &nbsp;
                                            </p>
                                            <span>дней</span>
                                        </div>
                                        <div className="promo__days">
                                            <p>
                                                {timerHours} : &nbsp;
                                            </p>
                                            <span>часов</span>
                                        </div>
                                        <div className="promo__days">
                                            <p>
                                                {timerMinutes} : &nbsp;
                                            </p>
                                            <span>минут</span>
                                        </div>
                                        <div className="promo__days">
                                            <p>
                                                {timerSeconds}
                                            </p>
                                            <span>секунд</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="icon__promotions">
                                    <img src={iconPromt} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="btn__promo">
                            <button onClick={show.bind()}>
                                Узнать подробнее
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
