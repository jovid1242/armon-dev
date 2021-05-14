import React, { useState } from 'react'
import { Modal, Form, Toast } from 'react-bootstrap';
import axios from 'axios'
import FormData from 'form-data'
import validation from './validateModal'
import ReactHtmlParser from 'react-html-parser'
import './Index.css'

export default function Index(props) {
    const [validetAlert, setValidetAlert] = useState(null)
    const [show, setShow] = useState(false)
    const [res, setRes] = useState(null)
    const [form, setForm] = useState({
        name: null,
        phone: null
    })

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
        data.append('theme', 'Заказать звонок');
        data.append('name', form.name);
        data.append('phone', form.phone);
        if (valideModal()) {
            axios.post(`https://armon.tj/freedom/telegramForm/php/send-message-to-telegram.php`, data)
                .then(res => {
                    setRes(res.data)
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
            setShow(true)
            return false
        }
        return true
    }

    return (
        <div className="modal__wrapper">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-center text__modal">ЗАДАТЬ ВОПРОС</p>
                    {res === null ? "" : ReactHtmlParser(res)}
                    {/* {validetAlert === null ? "" : <p className="alert__paginate">{validetAlert}</p>} */}
                    <Toast onClose={() => setShow(false)} show={show} delay={30000} autohide>
                        <Toast.Body>{validetAlert}</Toast.Body>
                    </Toast>
                    <div className="under__modal-text d-flex justify-content-center">
                        <div className="under__text"></div>
                    </div>
                    <p className="text-center text__modal-fdb">Оставьте свои контакты и наши консультанты свяжутся с вами</p>
                    <Form action="#" onSubmit={submitForm}>
                        <label>ФИО*</label>
                        <Form.Group controlId="formBasicName">
                            <Form.Control
                                name="name"
                                className="input__modal"
                                onChange={handleModalInput}
                                type="text"
                            />
                        </Form.Group>
                        <label>e-mail*</label>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Control
                                name="phone"
                                className="input__modal"
                                onChange={handleModalInput}
                                type="phone"
                            />
                        </Form.Group>
                        <div className="modal__button">
                            <input className="btn btn-primary modal__btn d-flex justify-content-center" type="submit" value="Отправить" />
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
