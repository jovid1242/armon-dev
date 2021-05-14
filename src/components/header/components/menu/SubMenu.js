import React from 'react'
import './SubMenu.css'

export default function SubMenu({ projectsLink }) {
    return (
        <>
            <div className="submenu__wrapper">
                {/* {
                        projectsLink.map((el, index) => {
                            return (
                                <ul key={index}>
                                    <li><a href={el.link}>{el.text}</a></li>
                                </ul>
                            )
                        })
                    } */}
                <ul className="dropdown-menu__list">
                    <li>
                        <a href="https://arc.tj/project/ispechak-residence/">
                            • Ispechak Residence
                        </a>
                    </li>
                    <li>
                        <a href="https://armon.tj/freedom/">
                            • Freedom Residence
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            • Санаторий (скоро)
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
