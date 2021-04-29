import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/salesoffices/Index'

import projectsImg1 from '../assets/img/projects-1.jfif'
import projectsImg2 from '../assets/img/projects-2.jfif'
import projectsImg3 from '../assets/img/projects-3.jfif'

export default function SalesOffices() {
    const projects = [
        {
            img: projectsImg1,
            title: "Ispechak Residence",
            text: "Один из первых проектов который мы реалезовали в Душанбе.",
            address: "Испечак 2, м М14"
        },
        {
            img: projectsImg2,
            title: "Freedom Residence",
            text: "Один из первых проектов который мы реалезовали в Душанбе.",
            address: "Испечак 2, м М14"
        },
        {
            img: projectsImg3,
            title: "Скоро в Продаже",
            text: "Один из первых проектов который мы реалезовали в Душанбе.",
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
