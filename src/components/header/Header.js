import React from 'react'
import Logo from './components/logo/Logo'
import Menu from './components/menu/Menu'
import MobileMenu from './components/menu/mobileMenu/mobileMenu'

import './Header.css'

export default function Header({ header }) {
    window.onscroll = function (e) {
        const nav = document.querySelector('.navbar')
        if (window.scrollY > 0) {
            nav.classList.add('affix');
        }
        if (header === true) {
            if (window.scrollY === 0) {
                nav.classList.remove('affix')
            }
        }
    };
    return (
        <>
            <div className="header">
                <nav className={header === true ? "navbar navbar-expand-lg fixed-top bg-transparent" : "navbar navbar-expand-lg fixed-top affix"}>
                    <div className="containert head-m">
                        <Logo />
                        <Menu />
                        <MobileMenu />
                    </div>
                </nav>
            </div>
        </>
    )
}
