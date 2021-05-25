import React from 'react'
import { Link } from 'react-router-dom'

import './Index.css'

export default function Index({ team }) {
    return (
        <>
            <div className="team-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            Наши сотрудники
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | Наши сотрудники
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | Наши сотрудники
                        </p>
                        <h2 className="about__title" id="textStart">
                            Наши сотрудники
                        </h2>
                    </div>
                    <div className="row">
                        {
                            team.map((el, index) => {
                                return (
                                    <div className="col-lg-4 col-md-4" key={index}>
                                        <div className="team-card">
                                            <div className="team-card__img">
                                                <img src={el.img} alt={el.img} />
                                            </div>
                                            <p className="team-name">{el.name}</p>
                                            <p className="team-desc">{el.desc}</p>
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
