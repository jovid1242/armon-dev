import React from 'react'
import image1 from '../../../../assets/img/slider.jfif'
export default function Slide3() {
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                    <div className="">
                        <div className="container">
                            <div className="hero-slider-content py-5">
                                <h1>Скоро в продаже</h1>
                                <p>Рады представить Вам первый в Душанбе продуманный архитектурный проект вкотором сочетаются красота и качество, роскошь и уют, простота и обдуманность в деталях.</p>
                            </div>
                            <div className="pgn-slider"><span>1/3</span></div>
                        </div>
                    </div>
                </div>
                <img className="" src={image1} alt="First slide" />
            </div>
        </div>
    )
}
