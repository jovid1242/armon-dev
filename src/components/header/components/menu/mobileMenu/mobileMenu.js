import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import SubMenu from './subMenu'
import './mobileMenu.css'

import hicon1 from '../../../../../assets/img/h1.svg'


export default function MobileMenu() {
    // const [open, setOpen] = useState(false);

    // const openDropDown = () => {
    //     if (open === true) {
    //         setOpen(false)
    //     } else {
    //         setOpen(true)
    //     }
    // }

    const toggle = () => {
        const body = document.querySelector('body')
        body.classList.toggle('nav-open')
    }
    const about = [
        {
            text: "• О компании",
            url: "/"
        },
        {
            text: "• Персонал",
            url: "#"
        },
        {
            text: "• Карьера",
            url: "#"
        },
        {
            text: "• Офис продаж",
            url: "/sales-offices"
        }
    ]
    const projects = [
        {
            text: "• Ispechak Residence",
            url: "https://arc.tj/project/ispechak-residence/"
        },
        {
            text: "• Freedom Residence",
            url: "https://armon.tj/freedom"
        },
        {
            text: "• Санаторий (скоро)",
            url: "/"
        }
    ]
    return (
        <>
            <div className="navbar navbar-dark box-shadow">
                <div className="d-flex justify-content-between">
                    <a className="nav-button hamburger ml-auto" onClick={() => toggle()}>
                        <span id="nav-icon3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </a>
                </div>
            </div>
            <div className="fixed-top dineuron-menu">
                <div className="p-5">
                    <ul className="nav flex-column">
                        <li className="nav-item delay-1">
                            <Link className="nav-link" to="/about" >О нас
                            {/* <div className="dropdown-toggle"></div> */}
                            </Link>
                            {/* <SubMenu link={about} /> */}
                        </li>
                        <li className="nav-item delay-2 ">
                            <Link className="nav-link" to="/sales-offices" >Проекты
                            {/* <div className="dropdown-toggle"></div> */}
                            </Link>
                            {/* <SubMenu link={projects} /> */}
                        </li>
                        <li className="nav-item delay-3"><Link className="nav-link" to="/sales-offices">Офисы продаж</Link></li>
                        <li className="nav-item delay-4"><Link className="nav-link" to="/contacts">Контакты</Link></li>
                        {/* <li className="nav-item delay-5"><a className="nav-link" href="#">Связаться с нами</a></li> */}
                    </ul>

                </div>
                <div className="mobile-icon">
                    <a className="phone-link" href="tel:+992907229000">
                        <img src={hicon1} alt="mobile-icon-phone" />
                        <p>+992 98 722-90-00</p>
                    </a>
                    <div className="mobile-social-icons">
                        <a href="https://www.facebook.com/Строительная-Компания-Armon-Development-106799351467199/">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36 18C36 8.05781 27.9422 0 18 0C8.05781 0 0 8.05781 0 18C0 27.9422 8.05781 36 18 36C18.1055 36 18.2109 36 18.3164 35.993V21.9867H14.4492V17.4797H18.3164V14.1609C18.3164 10.3148 20.6648 8.21953 24.0961 8.21953C25.7414 8.21953 27.1547 8.33906 27.5625 8.39531V12.4172H25.2C23.3367 12.4172 22.9711 13.3031 22.9711 14.6039V17.4727H27.4359L26.8523 21.9797H22.9711V35.3039C30.4945 33.1453 36 26.2195 36 18Z" fill="#737277" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/armon.development?igshid=1aw3ib7ttef5">
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.8496 18C20.8496 19.9028 19.35 21.4453 17.5 21.4453C15.65 21.4453 14.1504 19.9028 14.1504 18C14.1504 16.0972 15.65 14.5547 17.5 14.5547C19.35 14.5547 20.8496 16.0972 20.8496 18Z" fill="#737277" />
                                <path d="M25.3336 11.9041C25.1726 11.4553 24.9157 11.0491 24.582 10.7156C24.2578 10.3723 23.8631 10.1081 23.4265 9.94247C23.0724 9.80103 22.5405 9.63266 21.5608 9.58679C20.501 9.53708 20.1832 9.52637 17.5001 9.52637C14.8167 9.52637 14.499 9.5368 13.4394 9.58652C12.4597 9.63266 11.9275 9.80103 11.5737 9.94247C11.1371 10.1081 10.7421 10.3723 10.4182 10.7156C10.0844 11.0491 9.82755 11.455 9.66627 11.9041C9.52875 12.2683 9.36506 12.8157 9.32047 13.8234C9.27213 14.9132 9.26172 15.2401 9.26172 18.0001C9.26172 20.7599 9.27213 21.0867 9.32047 22.1769C9.36506 23.1846 9.52875 23.7317 9.66627 24.0959C9.82755 24.545 10.0842 24.9509 10.418 25.2843C10.7421 25.6277 11.1368 25.8919 11.5734 26.0575C11.9275 26.1992 12.4597 26.3676 13.4394 26.4135C14.499 26.4632 14.8165 26.4736 17.4998 26.4736C20.1835 26.4736 20.5012 26.4632 21.5605 26.4135C22.5403 26.3676 23.0724 26.1992 23.4265 26.0575C24.3029 25.7098 24.9956 24.9973 25.3336 24.0959C25.4712 23.7317 25.6349 23.1846 25.6797 22.1769C25.7281 21.0867 25.7382 20.7599 25.7382 18.0001C25.7382 15.2401 25.7281 14.9132 25.6797 13.8234C25.6351 12.8157 25.4714 12.2683 25.3336 11.9041ZM17.5001 23.3073C14.6501 23.3073 12.3398 20.9313 12.3398 17.9998C12.3398 15.0684 14.6501 12.6924 17.5001 12.6924C20.3498 12.6924 22.6602 15.0684 22.6602 17.9998C22.6602 20.9313 20.3498 23.3073 17.5001 23.3073ZM22.8642 13.7229C22.1982 13.7229 21.6583 13.1675 21.6583 12.4825C21.6583 11.7975 22.1982 11.2422 22.8642 11.2422C23.5301 11.2422 24.0701 11.7975 24.0701 12.4825C24.0698 13.1675 23.5301 13.7229 22.8642 13.7229Z" fill="#737277" />
                                <path d="M17.5 0C7.83649 0 0 8.06039 0 18C0 27.9396 7.83649 36 17.5 36C27.1635 36 35 27.9396 35 18C35 8.06039 27.1635 0 17.5 0ZM27.4882 22.2613C27.4396 23.3616 27.2695 24.1128 27.0212 24.7703C26.4991 26.1587 25.4321 27.2563 24.0823 27.7932C23.4433 28.0486 22.7127 28.2233 21.6432 28.2736C20.5716 28.3239 20.2293 28.3359 17.5003 28.3359C14.771 28.3359 14.4289 28.3239 13.357 28.2736C12.2876 28.2233 11.557 28.0486 10.918 27.7932C10.2472 27.5337 9.64001 27.1269 9.13799 26.6009C8.6269 26.0848 8.23143 25.46 7.97909 24.7703C7.73075 24.1131 7.56065 23.3616 7.51205 22.2616C7.46265 21.1591 7.45117 20.807 7.45117 18C7.45117 15.193 7.46265 14.8409 7.51179 13.7387C7.56039 12.6384 7.73022 11.8872 7.97855 11.2297C8.2309 10.54 8.62663 9.91516 9.13799 9.39908C9.63974 8.87311 10.2472 8.46634 10.9177 8.20679C11.557 7.95135 12.2873 7.77667 13.357 7.72641C14.4286 7.67615 14.771 7.66406 17.5 7.66406C20.229 7.66406 20.5714 7.67615 21.643 7.72668C22.7127 7.77667 23.443 7.95135 24.0823 8.20651C24.7528 8.46606 25.3603 8.87311 25.8623 9.39908C26.3734 9.91544 26.7691 10.54 27.0212 11.2297C27.2698 11.8872 27.4396 12.6384 27.4885 13.7387C27.5373 14.8409 27.5488 15.193 27.5488 18C27.5488 20.807 27.5373 21.1591 27.4882 22.2613Z" fill="#737277" />
                            </svg>
                        </a>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="18" fill="#737277" />
                            <path d="M25.0045 10.7609C23.1339 8.97969 20.6429 8 17.9955 8C12.5312 8 8.08482 12.2241 8.08482 17.4152C8.08482 19.0734 8.54018 20.6935 9.40625 22.1228L8 27L13.2545 25.6895C14.7009 26.4402 16.3304 26.8346 17.9911 26.8346H17.9955C23.4554 26.8346 28 22.6105 28 17.4194C28 14.9045 26.875 12.5422 25.0045 10.7609ZM17.9955 25.2484C16.5134 25.2484 15.0625 24.871 13.7991 24.1585L13.5 23.9888L10.3839 24.765L11.2143 21.8768L11.0179 21.5799C10.192 20.333 9.75893 18.8953 9.75893 17.4152C9.75893 13.102 13.4554 9.5904 18 9.5904C20.2009 9.5904 22.2679 10.4047 23.8214 11.8848C25.375 13.365 26.3304 15.3286 26.3259 17.4194C26.3259 21.7368 22.5357 25.2484 17.9955 25.2484ZM22.5134 19.3873C22.2679 19.2685 21.0491 18.7002 20.8214 18.6239C20.5938 18.5433 20.4286 18.5051 20.2634 18.7426C20.0982 18.9801 19.625 19.506 19.4777 19.6672C19.3348 19.8241 19.1875 19.8453 18.942 19.7266C17.4866 19.0353 16.5312 18.4924 15.5714 16.9275C15.317 16.5118 15.8259 16.5415 16.2991 15.6424C16.3795 15.4855 16.3393 15.3498 16.2768 15.231C16.2143 15.1123 15.7188 13.9545 15.5134 13.4837C15.3125 13.0257 15.1071 13.0893 14.9554 13.0808C14.8125 13.0723 14.6473 13.0723 14.4821 13.0723C14.317 13.0723 14.0491 13.1317 13.8214 13.365C13.5938 13.6025 12.9554 14.1708 12.9554 15.3286C12.9554 16.4864 13.8438 17.606 13.9643 17.7629C14.0893 17.9199 15.7098 20.2949 18.1964 21.317C19.7679 21.9616 20.3839 22.0167 21.1696 21.9065C21.6473 21.8386 22.6339 21.3382 22.8393 20.7868C23.0446 20.2355 23.0446 19.7647 22.9821 19.6672C22.9241 19.5612 22.7589 19.5018 22.5134 19.3873Z" fill="#333333" />
                        </svg>
                        <a href="https://t.me/ArmonDevelopment">
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 0C7.83266 0 0 8.05645 0 18C0 27.9435 7.83266 36 17.5 36C27.1673 36 35 27.9435 35 18C35 8.05645 27.1673 0 17.5 0ZM26.0948 12.3315L23.2228 26.2524C23.0111 27.2395 22.4395 27.479 21.6421 27.0145L17.2671 23.6976L15.1573 25.7879C14.9244 26.0274 14.7268 26.2306 14.2752 26.2306L14.5857 21.6508L22.6935 14.1169C23.0464 13.7976 22.6159 13.6161 22.1502 13.9355L12.13 20.4242L7.81149 19.0379C6.87298 18.7331 6.85181 18.0726 8.00907 17.6081L24.881 10.9161C25.6643 10.6258 26.3488 11.1121 26.0948 12.3315Z" fill="#737277" />
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UC8B6VhhL2iWJ_kbg4IOqG2Q">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#737277" />
                                <path d="M20 9.5L27 10.5L29 12.5V16L28.5 22.5L28 26C27 26.3333 24.9 27 24.5 27C24 27 18 28 16.5 27.5C15 27 9.5 26 9 26C8.6 26 7.5 24.6667 7 24V12.5C7.5 11.5 8.7 9.5 9.5 9.5H20Z" fill="#333333" />
                                <path d="M16.0071 20.8875L21.1071 17.9893L16.0071 15.0911V20.8875ZM30 27.4286V8.57143C30 7.15178 28.8482 6 27.4286 6H8.57143C7.15179 6 6 7.15178 6 8.57143V27.4286C6 28.8482 7.15179 30 8.57143 30H27.4286C28.8482 30 30 28.8482 30 27.4286ZM27.75 17.9839C27.75 17.9839 27.75 21.1768 27.3429 22.7089C27.1179 23.5554 26.4589 24.2196 25.6179 24.4446C24.1018 24.8571 18 24.8571 18 24.8571C18 24.8571 11.8982 24.8571 10.3821 24.4446C9.54107 24.2196 8.88214 23.5554 8.65714 22.7089C8.25 21.1821 8.25 17.9839 8.25 17.9839C8.25 17.9839 8.25 14.7911 8.65714 13.2589C8.88214 12.4125 9.54107 11.775 10.3821 11.55C11.8982 11.1429 18 11.1429 18 11.1429C18 11.1429 24.1018 11.1429 25.6179 11.5554C26.4589 11.7804 27.1179 12.4179 27.3429 13.2643C27.75 14.7911 27.75 17.9839 27.75 17.9839Z" fill="#737277" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
