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


    // const sliderPaginate = [
    //     {
    //         number: "1",
    //         title: "Ispechak Residence",
    //         text: "Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором..."
    //     },
    //     {
    //         number: "2",
    //         title: "Ispechak Residence",
    //         text: "Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором..."
    //     },
    //     {
    //         number: "3",
    //         title: "Ispechak Residence",
    //         text: "Рады представить Вам первый в Душанбе продуманный архитектурный проект в котором..."
    //     }
    // ]
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
    // const projectss = [
    //     {
    //         url: "https://arc.tj/project/ispechak-residence/",
    //         img: projectsImg1,
    //         title: "Ispechak Residence",
    //         text: "Один из первых проектов, который мы реализовали в Душанбе...",
    //         address: "Испечак 2, М14"
    //     },
    //     {
    //         url: "https://armon.tj/freedom",
    //         img: projectsImg2,
    //         title: "Freedom Residence",
    //         text: "Станет идеальным местом для комфортной жизни Вашей семьи...",
    //         address: "Ул. Н. Махсум 156"
    //     },
    //     {
    //         url: "#",
    //         img: projectsImg3,
    //         title: "Скоро начнем!",
    //         text: "Уже совсем скоро! Следите за нашими обновлениями, чтобы быть в курсе самых последних новостей",
    //         address: "Скоро начнем!"
    //     }
    // ];
    // const newss = [
    //     {
    //         id: "6",
    //         title: "ОТКРЫТИЕ ОФИСА ПРОДАЖ ЖК 'FREEDOM RESIDENCE'",
    //         text: "Индивидуальный офис продаж ЖК 'Freedom Residence' создан для максимального удобства покупателей и экономии их времени: всего за один визит можно...",
    //         data: "12 марта 2021"
    //     },
    //     {
    //         id: "7",
    //         title: "СОТРУДНИЧЕСТВО С КОМПАНИЕЙ 'AR CONSTRUCTION'",
    //         text: "Строительные компании «Armon Development» и «AR Construction» являются партнерами в сфере недвижимости и строительстве объектов...",
    //         data: "11 марта 2021"
    //     },
    //     {
    //         id: "8",
    //         title: "Покупка недвижимости: что самое важное?",
    //         text: "Во избежание дальнейших проблем, если Вы думаете приобрести недвижимость, необходимо провести тщательный анализ, исходя из которого нужно...",
    //         data: "10 марта 2021"
    //     }
    // ];
    // const videoGallery4 = [
    //     // https://alexbruni.ru/youtube2images/index.php?id=-QYoYRsIXQ0
    //     {
    //         img: videoImg1,
    //         videoUrl: "https://www.youtube.com/watch?v=xM-OsROu0Kw"
    //     }
    // ];
    // const instagrame = [
    //     {
    //         img: inst1,
    //         like: "",
    //         url: "https://www.instagram.com/p/COJ_WyxLpvS/?utm_source=ig_web_copy_link"
    //     },
    //     {
    //         img: inst2,
    //         like: "",
    //         url: "https://www.instagram.com/p/COJ_Q0wLOae/?utm_source=ig_web_copy_link"
    //     },
    //     {
    //         img: inst3,
    //         like: "",
    //         url: "https://www.instagram.com/p/COJ_EKBLk-o/?utm_source=ig_web_copy_link"
    //     }
    // ]

    return (
        <>
            <Header header={true} />
            <SliderWeb slide={slide} />
            <Promotions />
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
