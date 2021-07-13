import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser'
import http from '../../http'

import newsidimg from '../../assets/img/newsid1.png'
import './newsById.css'

export default function NewsById({ news }) {
    return (
        <div>
            <div className="news-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            Новости
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | <Link to="/news">Новости</Link> | {news?.map(el => el.title)}
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | <Link to="/news">Новости</Link> | {news?.map(el => el.title)}
                        </p>
                        <h2 className="about__title" id="textStart">
                            Новости
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="news__img">
                                <img src={news?.map(el => el.img)} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="news__wrapper-about">
                                <p className="news__title-text">{news?.map(el => el.title)}</p>
                                <p className="news__text">{ReactHtmlParser(news?.map(el => el.text))}</p>
                                {/* <p className="news__text">Друзья, мы с радостью сообщаем Вам об открытии офиса продаж ЖК "Freedom Residence"!</p> */}
                                {/* <p className="news__text">Индивидуальный офис продаж создан для максимального удобства покупателей и экономии их времени: всего за один визит можно оценить расположение ЖК "Freedom Residence" и его окружение, изучить все презентационные материалы, получить профессиональную консультацию менеджера и подобрать квартиру по своему запросу.</p> */}
                                {/* <p className="news__text">Добро пожаловать в "Freedom Residence" - место, где красота и удобство, качество и уют, безопасность и беззаботность никогда не будут спорить между собой.</p> */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
