import React from 'react'
import { Modal, Form } from 'react-bootstrap';
import './Index.css'

export default function Index(props) {
    return (
        <div className="modal__wrapper">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <p className="text-center text__modal">ЗАКАЗАТЬ ЗВОНОК</p>
                    <div className="under__modal-text d-flex justify-content-center">
                        <div className="under__text"></div>
                    </div>
                    <p className="text-center text__modal">Оставьте свои контакты и наши консультанты свяжутся с вами</p>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Control type="text" placeholder="Ваше имя" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Control type="phone" placeholder="Телефон" />
                        </Form.Group>
                        <div className="modal__button">
                            <input class="btn btn-primary modal__btn d-flex justify-content-center" type="submit" value="Отправить" />
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
