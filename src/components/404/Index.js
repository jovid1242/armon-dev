import React from 'react'
import { Link } from 'react-router-dom'
import svg404 from '../../assets/img/404.svg'

export default function Index() {
    return (
        <>
            <div className="ofices-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            404 NOT FOUND
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | 404 NOT FOUND
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | 404 NOT FOUND
                        </p>
                        <h2 className="about__title" id="textStart">
                            404 NOT FOUND
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <img src={svg404} alt="sdcds" className="d-flex justify-content-center" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
