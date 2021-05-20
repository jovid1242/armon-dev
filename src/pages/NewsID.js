import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/news-main/newsById'

import http from '../http'

export default function NewsID() {
    const [newsContent, setNewsContent] = useState([])
    const { id } = useParams();
    useEffect(() => {
        http.get(`get_news/${id}`)
            .then((response) => {
                setNewsContent(response.data)
            })
    }, [])

    return (
        <>
            <Header header={false} />
            <Main news={newsContent} />
            <Footer />
        </>
    )
}
