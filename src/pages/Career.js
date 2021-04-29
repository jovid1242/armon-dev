import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/career/Index'

export default function Career() {
    return (
        <>
            <Header header={false} />
            <Main />
            <Footer />
        </>
    )
}
