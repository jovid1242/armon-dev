import React from 'react'
import { Link } from 'react-router-dom'

import fon1 from '../../assets/img/рост.svg'
import fon2 from '../../assets/img/чап.svg'
import author from '../../assets/img/author.png'
import logoAbout from '../../assets/img/logo-about.svg'

import './About.css'
// import '../pages-fon-css/main.css'

export default function About() {
    return (
        <>
            <div className="about-section1">
                <div className="container">
                    <div className="about-wrapper pc__about-wrapper about-wrapper_center mt-4 mb-4">
                        <h2 className="about__title">
                            О компании
                        </h2>
                        <p className="about__text">
                            <Link to="/">Главная</Link> | О компании
                        </p>
                    </div>
                    <div className="mobile__about-wrapper about-wrapper_center mt-4 mb-">
                        <p className="about__text" id="textEnd">
                            <Link to="/">Главная</Link> | О компании
                        </p>
                        <h2 className="about__title" id="textStart">
                            О компании
                        </h2>
                    </div>
                    <div className="about-wrapper">
                        <div className="about-wrapper__inner">
                            <p className="about__text about__text_margin">
                                <img src={author} alt="" className="about__img" />
                                Деятельность нашей компании направлена на создание уникального жилого комплекса, отличающегося особым подходом и высоким качеством. Нашей целью является - предложить жильцам достойные решения с высокими эксплуатационными показателями и длительным сроком службы. Для этого мы намерены возвести такой ЖК, который будет продуман до всех мелочей и будет максимально полезен для жильцов - поэтому наш ЖК "Freedom" включает подземную парковку, просторную детскую площадку во дворе жилого комплекса, а также бассейн, смотровую площадку и даже work-out зону на крыше здания, которые обеспечат жильцов комфортным и приятным времяпрепровождением в ЖК  "Freedom".
                                <span className="about__text_span">Данный проект совмещает в себе всё для благоустроенной жизни - продуманный дизайн холлов, коридоров и лестничных площадок,
                                которые каждый день будут радовать глаза жителей комплекса, развитая инфраструктура, подразумевающая удобное расположение социальных, торговых и спортивных объектов, круглосуточное видеонаблюдение, которое обеспечит исключительно высокий уровень безопасности. </span>
                            </p>
                        </div>

                    </div>
                    <div className="about-wrapper">
                        <div className="about-wrapper__inner2">
                            <p className="abount__text ">

                            </p>
                            <p className="about__text">
                                Мы намерены обеспечить индивидуальный подход к каждому клиенту с учетом его возможностей и пожеланий при выборе жилья, помочь решить самые разные вопросы и постоянно взаимодействовать с покупателями.
                            </p>
                            <p className="about__text_bold">
                                Генеральный Директ Ромиш Солимов
                            </p>
                        </div>
                    </div>
                    <div className="about-wrapper">
                        <div className="about-wrapper__inner about-wrapper__inner_flex">
                            <div className="about-wrapper__content">
                                <p className="about__text about__text_1">
                                    <img src={logoAbout} alt="" className="about__logo-svg" />
                                    <span className="about__text_bold"> Armon Development</span>- передовая строительная компания, которая ведёт свою деятельность на рынке недвижимости Таджикистана уже более 5 лет.

                                </p>
                                <p className="about__text">
                                    Целью  компании является не количество объектов, а их качество, тем самым обеспечивая своих покупателей долгосрочной гарантией приобретённого жилья.
                            </p>

                            </div>

                        </div>

                    </div>
                    <div className="about-wrapper">
                        <div className="about-wrapper__inner2">
                            <p className="about__text">
                                Деятельность Armon Development направлена на создание уникальных жилых комплексов, отвечающих самым современным требованиям к материалам и технологиям строительства, а также на воздвижение устойчивых жилых зданий, которые сохранят свой вид и ценность на десятилетия.
                            </p>
                            <p className="about__text">
                                Тщательно изучив рынок недвижимости, мы пришли к выводу, что необходим особый подход и внимание к воздвижению недвижимости. Мы же, в свою очередь, обращаем особое внимание на все - от качества фасадных работ до обслуживания.
                            </p>
                            <p className="about__text">
                                Armon Development — это мир больших перспектив, в котором Вам удастся осуществить выгодную инвестицию
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
