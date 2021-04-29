import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/about/About'

export default function About() {
    return (
        <div>
            <Header header={false} />
            <Main />
            <Footer />
        </div>
    )
}
