import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/payment/Index'

export default function Payment() {
    return (
        <>
            <Header header={false} />
            <Main />
            <Footer />
        </>
    )
}
