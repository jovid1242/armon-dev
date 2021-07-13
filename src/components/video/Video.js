import React, { useState } from 'react'
import Carousel from 'react-grid-carousel'
import 'react-responsive-modal/styles.css'
import { Modal, Form } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'
import Drawer from 'react-drag-drawer'


import playBtn from '../../assets/img/play-button 1.svg'
import './Video.css'

export default function Video({ videoGallery }) {
    const [modalShow, setModalShow] = useState(false);
    const [urlModal, setUrlModal] = useState();

    const handleVideo = (url) => {
        setUrlModal(url);
        setModalShow(true)
    }
    return (
        <>
            <div className="video-gallery">
                <div className="container">
                    <div className="video-gallery-header">
                        <p>видео</p>
                        <div className="under-test"></div>
                        <span>Наш ютуб канал</span>
                    </div>
                    <div className="row">
                        <Modal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            size="xl"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                {/* <h1 className="text-center text-loading my-auto">Загрузка...</h1> */}
                                <ReactPlayer
                                    playing={false}
                                    controls={true}
                                    className='react-player react-yt-pl overflow-hideen'
                                    url={urlModal}
                                    width='100%'
                                    height='550px'
                                />
                            </Modal.Body>
                        </Modal>
                    </div>
                    <Carousel cols={2} rows={1} gap={15} dotColorActive={'#000'} hideArrow={false} showDots={false} loop>
                        {videoGallery.map((item, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <div className="video-container">
                                        <img data-toggle="modal" className="image" data-target="#exampleModalLong" src={item.img} />
                                        <div className="middle">
                                            <div className="play-btn">
                                                <img src={playBtn} alt="play-btn" onClick={() => { handleVideo(item.url) }} />
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </>
    )
}
