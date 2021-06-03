import React from 'react'
import './SubMenu.css'

export default function SubMenu({ projectsLink }) {
    return (
        <>
            <div className="submenu__trasparent-bg">
                <div className="submenu__wrapper">
                    {
                        projectsLink?.map((el, index) => {
                            return (
                                <ul className="dropdown-menu__list" key={index}>
                                    <li>
                                        <a href={el.url}>
                                            • {el.text}
                                        </a>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}