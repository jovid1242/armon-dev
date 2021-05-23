import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/projects-main/Index'

import projectsImg1 from '../assets/img/projects-1.jfif'
import projectsImg2 from '../assets/img/projects-2.jfif'
import projectsImg3 from '../assets/img/29.1.jpg'

export default function Projects() {
    const projects = [
        {
            url: "https://arc.tj/project/ispechak-residence/",
            img: projectsImg1,
            title: "Ispechak Residence",
            text: "Один из первых проектов который мы реалезовали в Душанбе.",
            address: "Испечак 2, м М14"
        },
        {
            url: "https://armon.tj/freedom",
            img: projectsImg2,
            title: "Freedom Residence",
            text: "Один из первых проектов который мы реалезовали в Душанбе.",
            address: "Н.махсум 156"
        },
        {
            url: "#",
            img: projectsImg3,
            title: "Скоро начнем!",
            text: "Уже совсем скоро! Следите за нашими обновлениями, чтобы быть в курсе самых последних новостей",
            address: "Испечак 2, м М14"
        }
    ];
    return (
        <>
            <Header header={false} />
            <Main projects={projects} />
            <Footer />
        </>
    )
}
