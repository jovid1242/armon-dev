import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/404/Index'

export default function NotFound() {
    return (
        <div>
            <Header header={false} />
            <Main />
            <Footer />
        </div>
    )
}
