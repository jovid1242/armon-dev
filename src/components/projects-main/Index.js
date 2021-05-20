import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'

export default function Index({ projects }) {
    return (
        <>
            <div className="ofices-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            Проекты
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | Проекты
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | Проекты
                        </p>
                        <h2 className="about__title" id="textStart">
                            Проекты
                        </h2>
                    </div>
                    <div className="row">
                        {
                            projects.map((item, index) => {
                                return (
                                    // <a href={item.url} >
                                    //     <div className="wrapper-card">
                                    //         <div className="project-card">
                                    //             <img src={item.img} alt="" />
                                    //             <h2>{item.title}</h2>
                                    //             <span>{item.text.substr(0, 65) + '...'}</span>
                                    //             <p>{item.address}</p>
                                    //         </div>
                                    //     </div>
                                    // </a>
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="ofices-card">
                                            <div className="card__img">
                                                <a href={item.url}>
                                                    <img src={item.img} alt="" />
                                                </a>
                                            </div>
                                            <p className="card__title-text"><a href={item.url}>{item.title}</a></p>
                                            <p className="card__text">Адреc:<br />{item.address}</p>
                                            <p className="card__text">Наш номер:<br /><a href="tel:+992987229000">+992 987 22 9000</a></p>
                                            <p className="card__text">Рабочее время:<br /> Пон-Суб: 08:00–19:00, Вcк: 10:00-17:00 <br />Наша почта: <a href="mailto:info@armon.tj">sales@armon.tj</a></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
