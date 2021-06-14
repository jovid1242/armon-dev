import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/layouts/Index'
import Pagination from '../components/pagination/Index'

import http from '../http'

export default function Team() {

    const [pagePost, setPagePost] = useState(1)
    const [pagTotal, setPagTotal] = useState()
    const [post, setPost] = useState(null)

    useEffect(() => {
        http.get(`get_layout?page/${pagePost}`)
            .then((response) => {
                setPost(response.data.Layout)
                setPagTotal(response.data.count)
            })
    }, [pagePost])


    const onUpdateCurrentPage = async (page) => {
        await setPagePost(page)
    }
    return (
        <>
            <Header header={false} />
            <Main post={post} />
            <Pagination total={pagTotal} currentPage={pagePost} onChangeCurrentPage={onUpdateCurrentPage} />
            <Footer />
        </>
    )
}
