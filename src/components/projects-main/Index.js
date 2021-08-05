import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Index.css'

import ReactHtmlParser from 'react-html-parser'

import projectsImg1 from '../../assets/img/projects-1.jfif'
import projectsImg2 from '../../assets/img/projects-2.jfif'
import projectsImg3 from '../../assets/img/29.1.jpg'

export default function Index({ projects }) {
 const [state, setState] = useState([]);

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
                    
                                            {/* 992987229000 */}
                    <div className="row">
                        {
                            projects?.map((el, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        {el.id !== 8 ? <div className="ofices-card">
                                            <div className="card__img">
                                                <a href={el.url}>
                                                    <img src={el.img} alt="" />
                                                </a>
                                            </div>
                                            <p className="card__title-text"><a href={el.url}>{el.title}</a></p>
                                            <p className="card__text">Адреc:<br />{el.address}</p>
                                            <p className="card__text">Наш номер:<br /><a href={"tel:" + el.phone}>{el.phone}</a></p>
                                            <p className="card__text">Рабочее время:<br /> ПН-СБ - с: 08:00 до 18:00, ВСК - выходной <br />Наша почта: <a href="mailto:info@armon.tj">sales@armon.tj</a></p>
                                        </div> : 
                                        <div className="ofices-card">
                                        <div className="card__img mb-4">
                                            <a href={el.url}>
                                                <img src={el.img} alt="" />
                                            </a>
                                        </div>
                                        <p className="card__text mt-4">{ReactHtmlParser(el.text)}</p>
                                        
                                    </div>
                                        }
                                        
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
