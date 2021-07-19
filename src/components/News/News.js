import React from 'react'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import Moment from 'react-moment'
import 'moment-timezone';
import 'moment/locale/ru';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import Carousel from 'react-grid-carousel'
// import 'react-responsive-modal/styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './News.css'

export default function News({ news }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.
        }
    }
    return (
        <>
            <div className="news">
                <div className="container">
                    <div className="news-header">
                        <p>новости</p>
                        <div className="under-test"></div>
                        <div className="projects-inner">
                            <span>Будьте в курсе наших последних новостей</span>
                            <button><Link to="/news">Смотреть ещё</Link></button>
                        </div>
                    </div>
                    <div className="news-cards">
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={true}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-10-px" >
                            {
                                news?.map((item, index) => {
                                    return (
                                        <div className="wrapper-news-card overflow-hidden" key={index}>
                                            <Link to={`/news/${item.id}`}>
                                                <div className="news-card" >
                                                    <h2>{item.title}</h2>
                                                    <span className="text__news-t">{ReactHtmlParser(item.text.substr(0, 55) + '...')}</span>
                                                    <p className="news-dates"><Moment format="LL">{item.date}</Moment></p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <div className="mobile-btn">
                        <button><Link to="/news" >Смотреть ещё</Link></button>
                    </div>
                </div>
            </div >
        </>
    )
}
