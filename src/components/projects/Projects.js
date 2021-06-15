import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Projects.css'

export default function Projects({ projects }) {
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
            <div className="projects overflow-hidden">
                <div className="container">
                    <div className="projects-header">
                        <p>проекты</p>
                        <div className="under-test"></div>
                        <div className="projects-inner">
                            <span>Узнайте подробнее о наших проектах </span>
                        </div>
                    </div>
                    <div className="mobile-projects-cards">
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
                                projects?.map((item, index) => {
                                    return (
                                        <a href={item.url} key={index}>
                                            <div className="wrapper-card">
                                                <div className="project-card">
                                                    <img src={item.img} alt="" />
                                                    <h2>{item.title}</h2>
                                                    <span>{item.text.substr(0, 57) + '...'}</span>
                                                    <p>{item.address}</p>
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
