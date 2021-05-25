import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/team/Index'

import muzf from '../assets/team/m.png'
import fh from '../assets/team/fh.png'
import fn from '../assets/team/fn.png'

export default function Team() {
    const group = [
        {
            img: muzf,
            name: "Музаффар Юнусзода",
            desc: "developer"
        },
        {
            img: fh,
            name: "Фируз Хамидов",
            desc: "Html программист"
        },
        {
            img: fn,
            name: "Фирдавс Намозов",
            desc: "Руководитель отдела качества"
        }, {
            img: muzf,
            name: "Музаффар Юнусзода",
            desc: "developer"
        },
        {
            img: fh,
            name: "Фируз Хамидов",
            desc: "Full Stack программист"
        },
        {
            img: fn,
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
