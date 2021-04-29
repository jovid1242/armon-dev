import React from 'react'
import image1 from '../../../../assets/img/projects-2.jfif'
export default function Slide2() {
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                    <div className="">
                        <div className="container">
                            <div className="hero-slider-content py-5">
                                <a href="https://armon.tj/freedom">
                                    <h1>Freedom residence</h1>
                                    <p>Рады представить Вам первый в Душанбе продуманный архитектурный проект вкотором сочетаются красота и качество, роскошь и уют, простота и обдуманность в деталях.</p>
                                </a>
                            </div>
                            <div className="pgn-slider"><span>1/2</span></div>
                        </div>
                    </div>
                </div>
                <img className="d-block w-100" src={image1} alt="First slide" />
            </div>
        </div>
    )
}
