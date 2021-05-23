import React, { useState } from "react"
import { Carousel } from 'react-bootstrap';
import Modal from '../modal/Index'
import slidew from '../../assets/img/slide_w.jpg'
import slideww from '../../assets/img/slide_ww.jpg'
// import Swiper from 'react-id-swiper';
// import PaginateBtn from './components/paginate/Index'
// import Slide from './components/slide/Slide'
// import SlideOne from './components/slide/Slide2'
// import SlideTwo from './components/slide/Slide3'
// import 'swiper/css/swiper.css'
import "./Slider.css";

export default function SliderWeb({ slide }) {
    const [modalShow, setModalShow] = useState(false);
    // const [swiper, setSwiper] = useState(null);
    // const ref = useRef(null);

    // const goNext = () => {
    //     if (ref.current !== null && ref.current.swiper !== null) {
    //         ref.current.swiper.slideNext()
    //     }
    // };

    // const goPrev = () => {
    //     if (ref.current !== null && ref.current.swiper !== null) {
    //         ref.current.swiper.slidePrev();
    //     }
    // }
    // const text = ["Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором...", "Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором...", "Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором..."]
    // const title = ["Ispechak Residence", "Freedom residence", "Скоро в продаже"]
    // const number = ["1", "2", "3"]
    // const params = {
    //     spaceBetween: 0,
    //     centeredSlides: true,
    //     autoplay: {
    //         delay: 5000,
    //         disableOnInteraction: false
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return '<div class="' + className + ' paginate-item"><span>' + (number[index]) + '</span><div class="text-under"></div><h1>' + (title[index]) + '</h1><p>' + (text[index]) + '</p></div>';
    //         }
    //     }
    // }
    return (
        <>
            {/* // <Swiper {...params} ref={ref}>
                //     <div><Slide /></div>
        //     <div><SlideOne /></div>
        //     <div><SlideTwo /></div>
        // </Swiper> */}
            <Carousel pause={false} fade style={{ animationDelay: "2.5s" }}>
                <Carousel.Item interval={5000} pause={false}>
                    <img
                        className="d-block w-100"
                        src={slideww}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <a href="https://arc.tj/project/ispechak-residence/">
                            <h3 style={{ animationDelay: "3s" }} >Ispechak Residence</h3>
                            <p style={{ animationDelay: "3s" }}>Рады представить Вам первый в Душанбе
                            продуманный архитектурный проект в
                            котором сочетаются красота и качество,
                    роскошь и уют, простота и обдуманность в деталях.</p>

                        </a>
                        <div className="slide__btn d-flex" style={{ animationDelay: "3s" }}>
                            <button>Узнать подробнее</button>
                            <button onClick={() => setModalShow(true)}>Оставить заявку</button>
                        </div>
                        <div className="mob__btn-slider">
                            <button onClick={() => setModalShow(true)}>Оставить заявку</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000} pause={false}>
                    <img
                        className="d-block w-100"
                        src={slidew}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <a href="https://armon.tj/freedom">
                            <h3 style={{ animationDelay: "3s" }}>Freedom Residence</h3>
                            <p style={{ animationDelay: "3s" }}>
                                Freedom Residence - место, где красота и удобство, качество и уют,
                                безопасность и беззаботность никогда не будут спорить между собой.
                            </p>

                        </a>
                        <div className="slide__btn d-flex" style={{ animationDelay: "3s" }}>
                            <button>Узнать подробнее</button>
                            <button onClick={() => setModalShow(true)}>Оставить заявку</button>
                        </div>
                        <div className="mob__btn-slider">
                            <button onClick={() => setModalShow(true)}>Оставить заявку</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={slideww}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ animationDelay: "3s" }}>Скоро начнем!</h3>
                        <p style={{ animationDelay: "3s" }}> Уже совсем скоро! Следите за нашими обновлениями,
                         чтобы быть в курсе самых последних новостей</p>

                        <div className="slide__btn d-flex" style={{ animationDelay: "3s" }}>
                            <button>узнать подробнее</button>
                            <button onClick={() => setModalShow(true)}>оставить заявку</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
