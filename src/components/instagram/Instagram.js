import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Carousel from 'react-grid-carousel'
// import 'react-responsive-modal/styles.css';
import './Instagram.css'

export default function Instagram({ post }) {
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
            <div className="instagram">
                <div className="container">
                    <div className="instagram-projects-header">
                        <p>instagram</p>
                        <div className="under-test"></div>
                        <div className="projects-inner">
                            <span>Будьте в курсе новостей</span>
                        </div>
                    </div>
                    <div className="instagram-projects-cards">
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
                                post.map((item, index) => {
                                    return (
                                        <a href={item.url} target="_blank" key={index}>
                                            <div className="instagram-card">
                                                <img src={item.img} alt="" />
                                                <div className="like-inst">
                                                    <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 36C21.5979 36 22.1744 35.7913 22.6236 35.4122C24.3203 33.9828 25.9562 32.6396 27.3994 31.4548L27.4068 31.4486C31.6381 27.9746 35.292 24.9745 37.8344 22.0192C40.6763 18.7153 42 15.5828 42 12.1606C42 8.83576 40.8166 5.76836 38.6681 3.52307C36.494 1.25123 33.5107 0 30.267 0C27.8426 0 25.6223 0.738449 23.6679 2.19466C22.6816 2.92972 21.7876 3.82931 21 4.87864C20.2121 3.82931 19.3184 2.92972 18.3317 2.19466C16.3774 0.738449 14.1571 0 11.7327 0C8.48927 0 5.50571 1.25123 3.33156 3.52307C1.18304 5.76836 0 8.83576 0 12.1606C0 15.5828 1.32339 18.7153 4.16533 22.0189C6.70766 24.9745 10.3613 27.9743 14.5919 31.448C16.0378 32.6347 17.6761 33.9801 19.3767 35.4128C19.8256 35.7913 20.4024 36 21 36ZM30.267 2.37032C32.8154 2.37032 35.1565 3.35019 36.8596 5.12963C38.588 6.93592 39.54 9.43282 39.54 12.1606C39.54 15.0388 38.4297 17.6129 35.9403 20.5068C33.5341 23.3041 29.9552 26.2424 25.8113 29.6448L25.8036 29.6509C24.3549 30.8404 22.7127 32.1889 21.0035 33.6288C19.2841 32.1861 17.6393 30.8355 16.1877 29.6442C12.0442 26.2418 8.46556 23.3041 6.05942 20.5068C3.57028 17.6129 2.45998 15.0388 2.45998 12.1606C2.45998 9.43282 3.41199 6.93592 5.14041 5.12963C6.8432 3.35019 9.18462 2.37032 11.7327 2.37032C13.5996 2.37032 15.3136 2.94206 16.827 4.0695C18.1757 5.07468 19.1152 6.34535 19.666 7.23445C19.9493 7.69166 20.4479 7.96457 21 7.96457C21.5521 7.96457 22.0507 7.69166 22.334 7.23445C22.8845 6.34535 23.824 5.07468 25.173 4.0695C26.6864 2.94206 28.4004 2.37032 30.267 2.37032Z" fill="#C4C4C4" />
                                                    </svg>
                                                    {/* <span>{item.like}</span> */}
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}
