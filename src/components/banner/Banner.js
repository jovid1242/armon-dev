import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Modal from '../modal/Index'
import operator from '../../assets/img/operator1.svg'
import Group from '../../assets/img/Group.svg'
import frames from '../../assets/img/Frame.svg'
import './Banner.css'

export default function Banner() {
    const [modalShow, setModalShow] = useState(false);
    const history = useHistory();
    const payment = () => {
        history.push('/payment')
    }
    const tradein = () => {
        history.push('/tradein')
    }
    return (
        <div className="banner-section">
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="wrapper  d-flex align-items-center" onClick={() => { payment() }}>
                            <div className="wrapper-inner" style={{ padding: "81px 0 81px 41px" }}>
                                <h4 className="wrapper-inner__title" style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "19px" }}>
                                    Оплата
                                </h4>
                                <p className="wrapper-inner__text" style={{ fontSize: "25px", letterSpacing: "-1px" }}>
                                    В рассрочку
                                </p>
                            </div>
                            <img src={Group} alt="" className="wrapper__img" style={{ marginRight: "-24px", marginLeft: "auto" }} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="wrapper wrapper_orange d-flex align-items-center" onClick={() => setModalShow(true)} >
                            <div className="wrapper-inner" style={{ padding: "81px 0 81px 50px" }}>
                                <h4 className="wrapper-inner__title" style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "19px" }}>
                                    Получить
                                </h4>
                                <p className="wrapper-inner__text" style={{ fontSize: "25px", letterSpacing: "-1px" }}>
                                    консультацию
                                </p>
                            </div>
                            <img src={operator} alt="" className="wrapper__img" style={{ marginRight: "-36px", marginLeft: "auto" }} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="wrapper wrapper_green d-flex align-items-center wrapper_height" onClick={() => { tradein() }}>
                            <div className="wrapper-inner" style={{ padding: "130px 0px 106px 50px" }}>
                                <h4 className="wrapper-inner__title" style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "19px" }}>
                                    Traide in
                                    </h4>
                                <p className="wrapper-inner__text" style={{ fontSize: "25px", letterSpacing: "-1px" }}>
                                    на выгодных
                                    условиях
                                    </p>
                            </div>
                            <img src={frames} alt="" className="wrapper__img wrapper__img_height" style={{ marginRight: "-24px", marginLeft: "auto" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
