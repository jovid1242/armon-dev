import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'
import Imglayouts from '../../assets/img/layouts-1.jpg'

import icon1 from '../../assets/icons/1.svg'
import icon2 from '../../assets/icons/2.svg'
import icon3 from '../../assets/icons/3.svg'
import lybtn from '../../assets/icons/ly-btn-e.svg'

export default function Index() {
    return (
        <>
            <div className="ofices-section">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            В продаже
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | В продаже
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | В продаже
                        </p>
                        <h2 className="about__title" id="textStart">
                            В продаже
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="filter__layouts d-flex">
                                <button className="btn__filter">Фильтры</button>
                                <button className="btns__filter ml-4">ЖК Freedom Residence </button>
                                <button className="btns__filter ml-4">ЖК Ispechak Residence </button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3 mt-4">
                                    <div className="layouts__wrapper">
                                        <div className="layouts__card">
                                            <img className="sales-image" src={Imglayouts} alt="sdc" />
                                            {/* <div className="">
                                                <img data-toggle="modal" className="sales-image" data-target="#exampleModalLong" src={Imglayouts} />
                                                <div className="middle">
                                                    <div className="play-btn">
                                                        <img src={icon2} alt="play-btn" />
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="d-flex">
                                                <div className="sales-wrapper-inner d-flex align-items-center ">
                                                    <img className="sales-icon" src={icon2} alt="sdc" />
                                                    <p className="floor">3-13 этажи</p>
                                                </div>
                                                <div className="sales-wrapper-inner d-flex align-items-center ml-1">
                                                    <img className="sales-icon ml-1" src={icon3} alt="sdc" />
                                                    <p className="area">250 м\кв</p>
                                                </div>
                                            </div>
                                            <div className="sales-wrapper-inner d-flex align-items-center ml-1">
                                                <img className="sales-icon" src={icon1} alt="sdc" />
                                                <p className="room">3-х комнаты</p>
                                            </div>
                                            <div className="d-flex justify-content-between mt-3">
                                                <p className="text__w">
                                                    ЖК Ispechak Residence
                                            </p>
                                                <button className="btn__h-effects">
                                                    <img src={lybtn} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mt-4">
                                    <div className="layouts__wrapper">
                                        <div className="layouts__card">
                                            <img className="sales-image" src={Imglayouts} alt="sdc" />
                                            <div className="sales-wrapper-inner d-flex align-items-center ">
                                                <img className="sales-icon" src={icon2} alt="sdc" />
                                                <p className="floor">3-13 этажи</p>
                                            </div>
                                            <div className="sales-wrapper-inner d-flex align-items-center">
                                                <img className="sales-icon" src={icon3} alt="sdc" />
                                                <p className="area">250 м\кв</p>
                                            </div>
                                            <div className="sales-wrapper-inner d-flex align-items-center">
                                                <img className="sales-icon" src={icon1} alt="sdc" />
                                                <p className="room">3-х комнаты</p>
                                            </div>
                                            <p className="text__w">
                                                ЖК Ispechak Residence
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mt-4">
                                    <div className="layouts__wrapper">
                                        <div className="layouts__card">
                                            <img className="sales-image" src={Imglayouts} alt="sdc" />
                                            <div className="sales-wrapper-inner d-flex align-items-center ">
                                                <img className="sales-icon" src={icon2} alt="sdc" />
                                                <p className="floor">3-13 этажи</p>
                                            </div>
                                            <div className="sales-wrapper-inner d-flex align-items-center">
                                                <img className="sales-icon" src={icon3} alt="sdc" />
                                                <p className="area">250 м\кв</p>
                                            </div>
                                            <div className="sales-wrapper-inner d-flex align-items-center">
                                                <img className="sales-icon" src={icon1} alt="sdc" />
                                                <p className="room">3-х комнаты</p>
                                            </div>
                                            <p className="text__w">
                                                ЖК Ispechak Residence
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mt-4">
                                    <div className="layouts__wrapper">
                                        <div className="layouts__card">
                                            <img className="sales-image" src={Imglayouts} alt="sdc" />
                                            <div className="sales-wrapper-inner d-flex align-items-center ">
                                                <img className="sales-icon" src={icon2} alt="sdc" />
                                                <p className="floor">3-13 этажи</p>
                                            </div>
                                            <div className="sales-wrapper-inner d-flex align-items-center">
                                                <img className="sales-icon" src={icon3} alt="sdc" />
                                                <p className="area">250 м\кв</p>
                                            </div>
                                            <div className="sales-wrapper-inner d-flex align-items-center">
                                                <img className="sales-icon" src={icon1} alt="sdc" />
                                                <p className="room">3-х комнаты</p>
                                            </div>
                                            <p className="text__w">
                                                ЖК Ispechak Residence
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mt-4">
                                    <div className="layouts__wrapper">
                                        <div className="layouts__card">
                                            <img className="sales-image" src={Imglayouts} alt="sdc" />
                                            <div className="sales-wrapper-inner d-flex align-items-center ">
                                                <img className="sales-icon" src={icon2} alt="sdc" />
                                                <p className="floor">3-13 этажи</p>
                                            </div>
                                            <div className="sales-wrapper-inner d-flex align-items-center">
                                                <img className="sales-icon" src={icon3} alt="sdc" />
                                                <p className="area">250 м\кв</p>
                                            </div>
                                            <div className="sales-wrapper-inner d-flex align-items-center">
                                                <img className="sales-icon" src={icon1} alt="sdc" />
                                                <p className="room">3-х комнаты</p>
                                            </div>
                                            <p className="text__w">
                                                ЖК Ispechak Residence
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
