import React, { useState, useEffect } from 'react'
import Banner from '../components/banner/Banner'
import Header from '../components/header/Header'
import Projects from '../components/projects/Projects'
import SliderWeb from '../components/slider/Slider'
import News from '../components/News/News'
import Video from '../components/video/Video'
import Instagram from '../components/instagram/Instagram'
import Feedback from '../components/feedback/Index'
import Footer from '../components/footer/Footer'
import Promotions from '../components/promotions/Promotions'

import http from '../http'

import projectsImg1 from '../assets/img/projects-1.jfif'
import projectsImg2 from '../assets/img/projects-2.jfif'


export default function Home() {
    const [projects, setProjects] = useState([])
    const [news, setNews] = useState([])
    const [video, setVideo] = useState([])
    const [instagram, setInstagram] = useState([])
  
    const [dateEnd , setDateEnd] = useState({
        date: null
    })
    const [sale , setSale] = useState([])

    useEffect(() => {
        http.get('/sale/get?page=1')
        .then((res) => {
            setDateEnd({date: res.data.Sale[0]?.data_end.split(', ')[1]})
            setSale(res.data.Sale[0])
        })
        .catch((err) => {
            console.log('Ошибка в акции исправтье бистрее ' + err.message);
        })
    }, [])


    useEffect(() => {
        http.get(`get_project?page=1`)
            .then((response) => {
                setProjects(response.data.projects)
            })
            .catch((err) => {
                console.log(`ошибка: ${err}`);
            })
    }, [])

    useEffect(() => {
        http.get(`get_news?page=1`)
            .then((response) => {
                setNews(response.data.news)
            })
            .catch((err) => {
                console.log(`ошибка: ${err}`);
            })
    }, [])

    useEffect(() => {
        http.get(`get_video?page=1`)
            .then((response) => {
                setVideo(response.data.videogallery)
            })
            .catch((err) => {
                console.log(`ошибка: ${err}`);
            })
    }, [])

    useEffect(() => {
        http.get(`get_insta?page=1`)
            .then((response) => {
                setInstagram(response.data.Instagram)
            })
            .catch((err) => {
                console.log(`ошибка: ${err}`);
            })
    }, [])


    const slide = [
        {
            text: "Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором...",
            title: "Ispechak Residence",
            img: projectsImg2
        },
        {
            text: "Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором...",
            title: "Freedom residence",
            img: projectsImg1
        },
        {
            text: "Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором...",
            title: "Скоро в продаже",
            img: projectsImg2
        }

    ]

    return (
        <>
            <Header header={true} />
            <SliderWeb slide={slide} />
            <Promotions sale={sale} dateEnd={dateEnd.date} />
            <Banner />
            <Projects projects={projects} />
            <News news={news} />
            <Video videoGallery={video} />
            <Instagram post={instagram} />
            <Feedback />
            <Footer />
        </>
    )
}
