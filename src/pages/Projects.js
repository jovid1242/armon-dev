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
            tel: "+992987229000",
            email: "sales@armon.tj",
            address: "Испечак 2 М14"
        },
        {
            url: "https://armon.tj/freedom",
            img: projectsImg2,
            title: "Freedom Residence",
            text: "Один из первых проектов который мы реалезовали в Душанбе.",
            tel: "+992987229000",
            email: "sales@armon.tj",
            address: "ул. Н. Махсум 156 (102-й мкр)"
        },
        {
            url: "#",
            img: projectsImg3,
            title: "Скоро начнем!",
            text: "Следите за нашими обновлениями",
            tel: "",
            email: "",
            address: ""
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
