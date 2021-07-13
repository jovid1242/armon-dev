import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/projects-main/Index'

import http from '../http'

export default function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        http.get(`get_project?page=1`)
            .then((response) => {
                setProjects(response.data.projects)
            })
            .catch((err) => {
                console.log(`ошибка: ${err}`);
            })
    }, [])

    return (
        <>
            <Header header={false} />
            <Main projects={projects} />
            <Footer />
        </>
    )
}
