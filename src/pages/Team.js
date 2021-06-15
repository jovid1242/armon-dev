import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/team/Index'

import muzf from '../assets/team/m.png'
import fh from '../assets/team/fh.png'
import fn from '../assets/team/fn.png'

import http from '../http'

export default function Team() {
    const [group, setGroup] = useState([])

    useEffect(() => {
        http.get(`get_team?page/1`)
            .then((response) => {
                setGroup(response.data.team)
            })
            .catch((err) => {
                console.log(`ошибка: ${err}`);
            })
    }, [])
    return (
        <>
            <Header header={false} />
            <Main team={group} />
            <Footer />
        </>
    )
}
