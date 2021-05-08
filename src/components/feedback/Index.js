import React, { useState } from 'react'
import Modal from '../modal/Index'
import './Index.css'

export default function Index() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="feedback__wrapper">
                <div className="container">
                    {/* <div className="feedback-main">
                        <div className="text__feedback">
                            <p>Оставьте свои контакты и наши консультанты свяжутся с вами</p>
                        </div>
                        <div className="feedback__button">
                            <input className="btn btn-primary feedback__btn" onClick={() => setModalShow(true)} type="submit" value="Оставить заявок" />
                        </div>
                    </div> */}

                </div>
            </div>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
