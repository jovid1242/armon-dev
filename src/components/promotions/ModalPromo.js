import React, { useState, useEffect } from 'react'
import Rodal from 'rodal';

import iconPromt from '../../assets/icons/offer_2.svg'

export default function ModalPromo({ show }) {
    const [vsModal, setvsModal] = useState({
        visible: false
    })
    useEffect(() => {
        setvsModal({ visible: show })
    }, [])

    const hide = () => {
        setvsModal({ visible: false });
    }
    return (
        <>
            <Rodal visible={vsModal.visible} onClose={() => { hide() }} width="600">
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
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Rodal>
        </>
    )
}
