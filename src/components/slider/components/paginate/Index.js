import React from 'react'
import './Index.css'

export default function Index({ slider }) {
    return (
        <>
            <div className="swiper-pagination overflow-hidden">
                <div className="container">
                    <div className="row">
                        <ol className="carousel-indicators"></ol>
                        <div className="col-md-4 col-6">
                            <div className="swiper-pagination-item">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                                    <span>1</span>
                                    <div className="text-under"></div>
                                    <h1>Ispechak Residence</h1>
                                    <p>Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором...</p>
                                </li>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="swiper-pagination-item">
                                <li data-target="#carouselExampleIndicators" data-slide-to="1">
                                    <span>2</span>
                                    <div className="text-under"></div>
                                    <h1>Ispechak Residence</h1>
                                    <p>Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором...</p>
                                </li>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="swiper-pagination-item item-none">
                                <li data-target="#carouselExampleIndicators" data-slide-to="2">
                                    <span>3</span>
                                    <div className="text-under"></div>
                                    <h1>Ispechak Residence</h1>
                                    <p>Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором...</p>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
