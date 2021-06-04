import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Form } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Modalf from './ModalLayouts'

import './Index.css'
import Imglayouts from '../../assets/img/layouts-1.jpg'
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';
import vvv from '../../assets/img/vvv.jpg'
import icon1 from '../../assets/icons/1.svg'
import icon2 from '../../assets/icons/2.svg'
import icon3 from '../../assets/icons/3.svg'
import mf1 from '../../assets/icons/mf1.svg'
import mf2 from '../../assets/icons/mf2.svg'
import mf3 from '../../assets/icons/mf3.svg'
import lybtn from '../../assets/icons/ly-btn-e.svg'
import lyiconh from '../../assets/icons/ly-icon-h.svg'

export default function Index() {
    const [modalShow, setModalShow] = useState(false);
    const [modalfShow, setModalfShow] = useState(false);

    const [openImgModal, setOpenImgModal] = useState(
        { visible: false }
    )

    const [openFormModal, setOpenFormModal] = useState(
        { visible: false }
    )

    const show = () => {
        setOpenImgModal({ visible: true });
    }

    const hide = () => {
        setOpenImgModal({ visible: false });
    }

    const showMForm = () => {
        setOpenFormModal({ visible: true })
    }

    const hideMForm = () => {
        setOpenFormModal({ visible: false })
    }

    const [post, setPost] = useState([
        "d", "a", "s", "d", "sd", "f", "s", "d"
    ])
    return (
        <>
            <div className="ofices-section">
                <div className="layouts-modal__wrapper">
                    <div>

                        <Rodal visible={openImgModal.visible} onClose={hide.bind()}>
                            <TransformWrapper
                                defaultScale={1}
                                defaultPositionX={200}
                                defaultPositionY={100}
                            >
                                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                    <React.Fragment>
                                        <div className="tools">
                                            <button onClick={zoomIn} className="tol__button" ><FontAwesomeIcon icon={faPlus} color="white" /></button>
                                            <button onClick={zoomOut} className="tol__button"  ><FontAwesomeIcon icon={faMinus} color="white" /></button>
                                            <button onClick={resetTransform} className="tol__button" > <FontAwesomeIcon icon={faUndo} color="white" /></button>
                                            <button onClick={showMForm.bind()} className="jk__form">Оставить заявку</button>
                                        </div>
                                        <TransformComponent>
                                            <img src={vvv} className="img__trasformw" alt="big" />
                                        </TransformComponent>
                                    </React.Fragment>
                                )}
                            </TransformWrapper>
                        </Rodal>
                    </div>
                </div>
                <div className="layouts-form__modal__wrapper">
                    <Rodal visible={openFormModal.visible} onClose={hideMForm.bind()}>
                        <div className="wrapper-modal-window d-flex flex-column flex-lg-row  justify-content-lg-between align-items-center">
                            <div className="wraper-modal-1">
                                <h3>ЖК Ispechak</h3>
                                <img src={Imglayouts} alt="" />
                            </div>
                            <div className="wraper-modal-2">
                                <div className="form__group">
                                    <ul className="list__t">
                                        <li>
                                            <div className="sales-wrapper-inner d-flex align-items-center ">
                                                <img className="sales-icon sales-icon2" src={mf2} alt="sdc" />
                                                <p className="floor">от 3-го до 13-го</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sales-wrapper-inner d-flex align-items-center ">
                                                <img className="sales-icon  sales-icon2" src={mf3} alt="sdc" />
                                                <p className="area">250 кв\м</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sales-wrapper-inner d-flex align-items-center">
                                                <img className="sales-icon sales-icon2" src={mf1} alt="sdc" />
                                                <p className="room">2 комнаты</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="input__group">
                                        <form action="">
                                            <input type="text" placeholder="Имя..." />
                                            <input type="text" className="midle-input" placeholder="Телефон..." />
                                            <button className="btn__form-group">Отправить</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Rodal>
                </div>
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
                        <div className="img__jk-modal d-flex justify-content-center">
                            <img className="sales-image" src={Imglayouts} alt="sdc" />
                        </div>
                    </Modal.Body>
                </Modal>
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            В продаже
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | В продаже
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | В продаже
                        </p>
                        <h2 className="about__title" id="textStart">
                            В продаже
                        </h2>
                    </div>
                    <div className="rowr">
                        <div className="mb-3">
                            <div className="filter__layouts">
                                <button className="btn__filter">Жилые комплексы:</button>
                                <button className="btns__filter">Freedom Residence </button>
                                <button className="btns__filter">Ispechak Residence </button>
                            </div>
                        </div>
                    </div>
                    <div className="row lyts">
                        {
                            post?.map((el, index) => {
                                return (
                                    <div className="col-lg-3 col-md-12 mt-4" key={index}>
                                        <div className="layouts__wrapper">
                                            <div className="layouts__card">
                                                <div className="img__hover">
                                                    <img className="sales-image" src={Imglayouts} alt="sdc" onClick={show.bind()} />
                                                    <img src={lyiconh} className="icon-h" alt="lyiconh" onClick={show.bind()} />
                                                </div>
                                                <div className="d-flex">
                                                    <div className="sales-wrapper-inner d-flex align-items-center ">
                                                        <img className="sales-icon" src={icon2} alt="sdc" />
                                                        <p className="floor">3-13 этажи</p>
                                                    </div>
                                                    <div className="sales-wrapper-inner d-flex align-items-center ml-1">
                                                        <img className="sales-icon ml-1" src={icon3} alt="sdc" />
                                                        <p className="area">250 м\кв</p>
                                                    </div>
                                                </div>
                                                <div className="sales-wrapper-inner d-flex align-items-center ml-1">
                                                    <img className="sales-icon icon3" src={icon1} alt="sdc" />
                                                    <p className="room">3-х комнаты</p>
                                                </div>
                                                <div className="d-flex justify-content-between align-items mt-3 mb-2">
                                                    <p className="text__w">
                                                        ЖК Ispechak Residence
                                                            </p>
                                                    <button className="btn__h-effects" onClick={showMForm.bind()}>

                                                        <p className="">Оставить заявку</p>
                                                        <div className="icon">
                                                            <img src={lybtn} alt="" />
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
