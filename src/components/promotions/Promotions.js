import React, { useRef, useState, useEffect } from 'react'
import Rodal from 'rodal';
import './promotions.css'

import iconPromt from '../../assets/icons/offer_2.svg'

export default function Promotions() {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('july 15, 2021 00:00:00').getTime()
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
    return (
        <>
            <div className="promotions-section">
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
                                <form action="" >
                                    <ul>
                                        <li>
                                            <input
                                                type="text"
                                                className="mdl__input"
                                                placeholder="Имя..."
                                            />
                                        </li>
                                        <li>
                                            <input
                                                type="text"
                                                className="mdl__input mt-2"
                                                placeholder="Тел... +992__"
                                            />
                                        </li>
                                    </ul>
                                    <div className="btn__promo">
                                        <button >
                                            Узнать подробнее
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
