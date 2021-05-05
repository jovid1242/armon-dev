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
    const news = [
        {
            id: "1",
            title: "Стоит ли переезжать в новостройки?",
            text: "Ловите 3 причины почему стоит сносить старые жилые здания...",
            date: "12 марта 2021"
        },
        {
            id: "2",
            title: "О компании 'Armon Development'",
            text: "Целью нашей компании является не количество объектов, а их качество...",
            date: "12 марта 2021"
        },
        {
            id: "3",
            title: "Партнерство с AR Construction",
            text: "Вместе с «AR Construction» мы являемся партнерами в сфере недвижимости...",
            date: "12 марта 2021"
        },
        {
            id: "4",
            title: "О комплексе 'Freedom Residence'",
            text: "ЖК 'Freedom Residence' является идеальным местом для комфортной жизни Вашей семьи...",
            date: "12 марта 2021"
        },
        {
            id: "5",
            title: "Почему 'Freedom Residence'?",
            text: "ЖК 'Freedom Residence' совмещает в себе всё для благоустроенной жизни...",
            date: "12 марта 2021"
        },
        {
            id: "6",
            title: "Открытие офиса продаж",
            text: "Индивидуальный офис продаж создан для максимального удобства покупателей...",
            date: "12 марта 2021"
        }
    ]

    const onUpdateCurrentPage = async (page) => {
        await setPagePost(page)
        console.log('async update', page);
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
