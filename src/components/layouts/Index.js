import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Toast } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
// import Modalf from './ModalLayouts'

import './Index.css'
import Imglayouts from '../../assets/img/layouts-1.jpg'
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';
import icon1 from '../../assets/icons/1.svg'
import icon2 from '../../assets/icons/2.svg'
import icon3 from '../../assets/icons/3.svg'
import mf1 from '../../assets/icons/mf1.svg'
import mf2 from '../../assets/icons/mf2.svg'
import mf3 from '../../assets/icons/mf3.svg'
import lybtn from '../../assets/icons/ly-btn-e.svg'
import lyiconh from '../../assets/icons/ly-icon-h.svg'
import http from '../../http'
import validation from './validateModal'

export default function Index({ post }) {
    const [layout, setLayot] = useState(null)
    const [activeBtn , setActiveBtn] = useState(false)
    const [activeBtn1, setActiveBtn1] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [showNotif, setShowNotif] = useState(false)
    const [modalfShow, setModalfShow] = useState(false);
    const [validetAlert, setvalidetAlert] = useState("")
    const [residences, setResidences] = useState([])
    const [applications, setApplications] = useState({
        id: null,
        username: null,
        phone: null
    })
    const [jkdesc, setJkdesc] = useState([])

    const activate = (a , b) => {
        if(a !== false) {
            setActiveBtn(true)
            setActiveBtn1(false)
        } else if (b !== false) {
            setActiveBtn(false)
            setActiveBtn1(true)
        }
    }

    const [Img, setImg] = useState([])

    const getImg = el => {
        setImg(el.img)
    }

    const onsales = post?.filter((e) => {
        if (!layout || layout === null) {
            return e
        } else if (e.residences.toLowerCase().includes(layout.toLowerCase())) {
            return e
        }
    })
    console.log('fffffffffff', onsales);

    useEffect(() => {
        http.get('get_residences')
            .then(res => {
                setResidences(res.data)
            })
            .catch((errors) => {
                console.log('Ошибка', `${errors.message}`);
            })
    }, [])

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

    const showFromjk = el => {
        const arr = [el];
        setJkdesc(arr);
        setApplications({ ...applications, id: el.id });
        showMForm();
        getImg(el);
    }

    // const [validetAlert, setValidetAlert] = useState(null)
    const handleModalInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        const data = applications
        data[name] = value
        setApplications(data)
    }

    const submitForm = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('name', applications.name);
        data.append('phone', applications.phone);
        if (valideModal()) {
            http.post(`create_order/${applications.id}`, data)
                .then((res) => {
                    setvalidetAlert('Ваша заявка успешно отправлена!')
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
        const err = validation.modalValidation(applications)
        if (err.error) {
            setvalidetAlert(err.message)
            setShowNotif(true)
            return false
        }
        return true
    }

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
                                            <button onClick={showMForm.bind()} className="jk__form" >Оставить заявку</button>
                                        </div>
                                        <TransformComponent>
                                            <img src={Img} className="img__trasformw" alt="big" />
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
                                <h3>{jkdesc?.map(el => el.residences) }
                                    <Toast onClose={() => setShowNotif(false)} show={showNotif} delay={3000} autohide>
                                        <Toast.Body>{validetAlert}</Toast.Body>
                                    </Toast></h3>
                                <img src={Img} alt="Img" />
                            </div>
                            <div className="wraper-modal-2">
                                <div className="form__group">

                                    {
                                        jkdesc?.map((el, index) => {
                                            return (
                                                <ul className="list__t" key={index}>
                                                    <li>
                                                        <div className="sales-wrapper-inner d-flex align-items-center ">
                                                            <img className="sales-icon sales-icon2" src={mf2} alt="sdc" />
                                                            <p className="floor">{el.floor}</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="sales-wrapper-inner d-flex align-items-center ">
                                                            <img className="sales-icon  sales-icon2" src={mf3} alt="sdc" />
                                                            <p className="area">{el.square}</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="sales-wrapper-inner d-flex align-items-center">
                                                            <img className="sales-icon sales-icon2" src={mf1} alt="sdc" />
                                                            <p className="room">{el.rooms}</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            )
                                        })
                                    }
                                    <div className="input__group">
                                        <form action="" onSubmit={submitForm}>
                                            <input
                                                type="text"
                                                name="username"
                                                onChange={handleModalInput}
                                                placeholder="Имя..."
                                            />
                                            <input
                                                type="text"
                                                name="phone"
                                                onChange={handleModalInput}
                                                className="midle-input"
                                                placeholder="Телефон..."
                                            />
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
                        <div className="mb-5">
                            <div className="filter__layouts">
                                <button className="btn__filter" onClick={() => { setLayot(null); setActiveBtn(false); setActiveBtn1(false) }}>Жилые комплексы:</button>
                                <button className={!activeBtn ? "btns__filter" : "btns__filter activeBtn"} onClick={() => { setLayot('Ispechak Residence'); activate(true, false) }}>Ispechak Residence</button>
                                <button className={!activeBtn1 ? "btns__filter" : "btns__filter activeBtn"} onClick={() => { setLayot('Freedom Residence'); activate(false, true) }}>Freedom Residence</button>     
                            </div>
                        </div>
                    </div>
                    <div className="row lyts">
                        {
                         onsales?.length === 0 ? <div className="nosales">
                             <h2>Все квартиры проданы</h2>
                             <div className="mb__200"></div>
                         </div> :  onsales?.map((el, index) => {
                                return (
                                    <div className="col-lg-3 col-md-12 mb-4" key={index}>
                                        <div className="layouts__wrapper">
                                            <div className="layouts__card">
                                                <div className="img__hover" onClick={() => { getImg(el) }}>
                                                    <img className="sales-image" src={el.img} alt="sdc" onClick={show.bind()} />
                                                    <img src={lyiconh} className="icon-h" alt="lyiconh" onClick={show.bind()} />
                                                </div>
                                                <div className="d-flex">
                                                    <div className="sales-wrapper-inner d-flex align-items-center ">
                                                        <img className="sales-icon" src={icon2} alt="sdc" />
                                                        <p className="floor">{el.floor}</p>
                                                    </div>
                                                    <div className="sales-wrapper-inner d-flex align-items-center ml-1">
                                                        <img className="sales-icon ml-1" src={icon3} alt="sdc" />
                                                        <p className="area">{el.square}</p>
                                                    </div>
                                                </div>
                                                <div className="sales-wrapper-inner d-flex align-items-center ml-1">
                                                    <img className="sales-icon icon3" src={icon1} alt="sdc" />
                                                    <p className="room">{el.rooms}</p>
                                                </div>
                                                <div className="d-flex justify-content-between align-items mt-3 mb-2">
                                                    <p className="text__w">
                                                        {el.residences}
                                                    </p>
                                                    <button className="btn__h-effects" onClick={() => { showFromjk(el) }}>
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
