import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubMenu from './SubMenu'
import Modal from '../../../modal/Index'
import './Menu.css'

import hicon1 from '../../../../assets/img/h1.svg'
import hicon2 from '../../../../assets/img/h2.svg'

import hicon1black from '../../../../assets/img/h1black.svg'
import hicon2black from '../../../../assets/img/h2black.svg'

export default function Menu() {
    const [modalShow, setModalShow] = useState(false);
    const projectsLink = [
        {
            url: "https://arc.tj/project/ispechak-residence/",
            text: "Ispechak Residence"
        },
        {
            url: "https://armon.tj/freedom/",
            text: "Freedom Residence"
        },
        {
            url: "https://arc.tj/project/ispechak-residence/",
            text: "Санаторий (скоро)"
        }
    ]
    const aboutLink = [
        {
            url: "https://armon.tj/#/about",
            text: "О компании"
        },
        {
            url: "https://armon.tj/#/news",
            text: "Новости"
        },
        {
            url: "https://armon.tj/#/career",
            text: "Карьера"
        }
    ]
    return (
        <>
            <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto menu">
                    <li><Link className="links-headers">О нас</Link>
                        <SubMenu projectsLink={aboutLink} />
                    </li>
                    <li><Link to="/projects" className="links-headers">Проекты</Link>
                        <SubMenu projectsLink={projectsLink} />
                    </li>
                    <li><Link to="/sales-offices" className="links-headers">Офисы продаж</Link></li>
                    <li><Link to="/contacts" className="links-headers">Контакты</Link></li>
                </ul>
                <div className="header-icon ml-3">
                    <a href="tel:++992907229000">
                        <img src={hicon1black} alt="header-icon-phone" />
                    </a>
                    <img src={hicon2black} onClick={() => setModalShow(true)} alt="header-icon-modal" />
                </div>
                <div className="header-icon-black">
                    <a href="tel:++992907229000">
                        <img src={hicon1black} alt="header-icon-phone" />
                    </a>
                    <img src={hicon2black} onClick={() => setModalShow(true)} alt="header-icon-modal" />
                </div>
            </div>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
