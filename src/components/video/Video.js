import React, { useState } from 'react'
import Carousel from 'react-grid-carousel'
import 'react-responsive-modal/styles.css'
import ReactPlayer from 'react-player/lazy'
import Drawer from 'react-drag-drawer'


import playBtn from '../../assets/img/play-button 1.svg'
import './Video.css'

export default function Video({ videoGallery }) {
    const [urlModal, setUrlModal] = useState();
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleVideo = (url) => {
        setUrlModal(url);
        onOpenModal();
    }
    return (
        <>
            <div className="video-gallery">
                <div className="container">
                    <div className="video-gallery-header">
                        <p>видео</p>
                        <div className="under-test"></div>
                        <span>Глазами строителей</span>
                    </div>
                    <Drawer
                        open={open}
                        onRequestClose={onCloseModal}
                    >
                        <div className="row">
                            <div className="col-md-12">
                                <div className="video-modal-armon">
                                    <ReactPlayer
                                        playing={false}
                                        controls={true}
                                        className='react-player react-yt-pl'
                                        url={urlModal}
                                        width='800px'
                                        height='400px'
                                    />
                                </div>
                            </div>
                        </div>
                    </Drawer>
                    <Carousel cols={2} rows={1} gap={15} dotColorActive={'#000'} hideArrow={false} showDots={false} loop>
                        {videoGallery.map((item, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <div className="video-container">
                                        <img data-toggle="modal" className="image" data-target="#exampleModalLong" src={item.img} />
                                        <div className="middle">
                                            <div className="play-btn">
                                                <img src={playBtn} alt="play-btn" onClick={() => { handleVideo(item.videoUrl) }} />
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
