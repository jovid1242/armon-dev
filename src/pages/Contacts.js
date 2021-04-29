import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/contacts/Index'

export default function Contacts() {
    return (
        <div>
            <Header header={false} />
            <Main />
            <Footer />
        </div>
    )
}
