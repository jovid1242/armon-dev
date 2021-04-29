import React, { useState, useRef } from "react"
import Swiper from 'react-id-swiper';
import PaginateBtn from './components/paginate/Index'
import Slide from './components/slide/Slide'
import SlideOne from './components/slide/Slide2'
import SlideTwo from './components/slide/Slide3'
import 'swiper/css/swiper.css'
import "./Slider.css";



export default function SliderWeb({ slide }) {
    const [swiper, setSwiper] = useState(null);
    const ref = useRef(null);

    const goNext = () => {
        console.log('hiii');
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext()
        }
    };

    const goPrev = () => {
        console.log('helllo');
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev();
        }
    }
    // const urlSlider = ["/", "https://armon.tj/freedom/", "/"]
    const text = ["Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором...", "Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором...", "Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором..."]
    const title = ["Ispechak Residence", "Freedom residence", "Скоро в продаже"]
    const number = ["1", "2", "3"]
    const params = {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // renderBullet: (index, className) => {
            //     return '<span class="' + className + '">' + (index + 1) + '</span>';
            // }
            renderBullet: function (index, className) {
                return '<div class="' + className + ' paginate-item"><span>' + (number[index]) + '</span><div class="text-under"></div><h1>' + (title[index]) + '</h1><p>' + (text[index]) + '</p></div>';
            }
        }
    }
    return (
        <Swiper {...params} ref={ref}>
            <div><Slide /></div>
            <div><SlideOne /></div>
            <div><SlideTwo /></div>
        </Swiper>
    )
}
