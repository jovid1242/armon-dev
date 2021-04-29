import React from 'react'

import './subMenu.css'

export default function subMenu({ link, open }) {
    return (

        <ul className="sub-menu">
            {
                link?.map((el, index) => {
                    return (
                        <li className={`nav-item delay-${index}`} key={index}><a href={el.url}>{el.text}</a></li>
                    )
                })
            }
        </ul>

    )
}
