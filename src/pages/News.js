import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/news-main/Index'
import Pagination from '../components/pagination/Index'

import http from '../http'

export default function News() {

    const [pagePost, setPagePost] = useState(1)
    const [pagTotal, setPagTotal] = useState()
    const [post, setPost] = useState(null)
    useEffect(() => {
        http.get(`get_news?page=${pagePost}`)
            .then((response) => {
                setPost(response.data.news)
                setPagTotal(response.data.count)
            })
    }, [pagePost])


    const onUpdateCurrentPage = async (page) => {
        await setPagePost(page)
    }
    return (
        <div>
            <Header header={false} />
            <Main news={post} />
            <Pagination total={pagTotal} currentPage={pagePost} onChangeCurrentPage={onUpdateCurrentPage} />
            <Footer />
        </div>
    )
}