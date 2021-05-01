import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
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
                    <p className="text-center text__modal">Оставьте свои контакты и наши консультанты свяжутся с вами</p>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Control type="text" placeholder="Ваше имя" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Control type="phone" placeholder="Телефон" />
                        </Form.Group>
                        <input class="btn btn-primary modal__btn d-flex justify-content-center" type="submit" value="Отправить" />
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
