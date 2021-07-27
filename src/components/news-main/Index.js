import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
// import moment from 'moment'
import ReactHtmlParser from 'react-html-parser'
import 'moment-timezone';
// import 'moment/locale/ru';
import './Index.css'

export default function Index({ news }) {
    return (
        <>
            <div className="news-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            Новости
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | Новости
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | Новости
                        </p>
                        <h2 className="about__title" id="textStart">
                            Новости
                        </h2>
                    </div>
                    <div className="row">
                        {
                            news?.map((el, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <Link to={`/news/${el.id}`}>
                                            <div className="news__card">
                                                <div className="news__card-title">
                                                    <p>{el.title}</p>
                                                </div>
                                                <div className="news__card-text">
                                                    <p>{ReactHtmlParser(el.text.substr(0, 65))}</p>
                                                </div>
                                                <div className="news__card-date">
                                                    <p className="news-dates">
                                                    <Moment locale="ru" format="DD MMMM YYYY">
                                                        {el.data}
                                                    </Moment>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
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
