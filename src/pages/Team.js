import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/team/Index'

import imgI from '../assets/img/seles-offices-freedon.jpg'

export default function Team() {
    const group = [
        {
            url: "#",
            img: imgI,
            name: "Музаффар Юнусзода",
            desc: "developer"
        },
        {
            url: "#",
            img: imgI,
            name: "Фируз Хамидов",
            desc: "Full Stack программист"
        },
        {
            url: "#",
            img: imgI,
            name: "Фирдавс Намозов",
            desc: "Руководитель отдела качества"
        }, {
            url: "#",
            img: imgI,
            name: "Музаффар Юнусзода",
            desc: "developer"
        },
        {
            url: "#",
            img: imgI,
            name: "Фируз Хамидов",
            desc: "Full Stack программист"
        },
        {
            url: "#",
            img: imgI,
            name: "Фирдавс Намозов",
            desc: "Руководитель отдела качества"
        }
    ]
    return (
        <>
            <Header header={false} />
            <Main team={group} />
            <Footer />
        </>
    )
}
