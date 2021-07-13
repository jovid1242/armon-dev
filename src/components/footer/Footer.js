import React from 'react'
import Pages from './pages/Index'
import { Link } from 'react-router-dom'
import footerlogo from '../../assets/img/footer-logo.svg'
import boboLogo from '../../assets/img/bobologo.svg'
import mobilebobo from '../../assets/img/mobilebobo.svg'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <div className="footer overflow-hidden mt-4">
                <div className="footer-main">
                    {/* <Pages />
                    <div className="under-text"></div> */}
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 d-flex align-items-end justify-content-between">
                                    <a href="#" className="footer__logo">
                                        <img src={footerlogo} alt="" />
                                    </a>
                                    <div className="footer-address">
                                        <p className="footer-address__text footer-address__text_marg">
                                            г. Душанбе,<br />
                                             ул. Н. Махсум 156
                                        </p>
                                        <a href="https://yandex.ru/maps/10318/dushanbe/geo/1926089001/?ll=68.730417%2C38.582082&z=14.63" className="footer-address__text_color" target="_blank">
                                            показать на карте
                                        </a>
                                    </div>
                                    <div className="footer-address footer-address_margi d-flex flex-column">
                                        <a href="tel:+992987229000" className="footer-address__text footer-address__text_bott">
                                            +992 98-722-90-00
                                        </a>
                                        <a href="mailto:info@armon.tj" className="footer-address__text">
                                            info@armon.tj
                                        </a>
                                    </div>

                                    <div className="footer-block-subscr">
                                        <div className="icons-text">
                                            <span>Связаться с нами:</span>
                                        </div>
                                        <div className="wrapper-icons">
                                            <div className="icons">
                                                <a href="https://www.facebook.com/Строительная-Компания-Armon-Development-106799351467199/" target="_blank">
                                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M36 18C36 8.05781 27.9422 0 18 0C8.05781 0 0 8.05781 0 18C0 27.9422 8.05781 36 18 36C18.1055 36 18.2109 36 18.3164 35.993V21.9867H14.4492V17.4797H18.3164V14.1609C18.3164 10.3148 20.6648 8.21953 24.0961 8.21953C25.7414 8.21953 27.1547 8.33906 27.5625 8.39531V12.4172H25.2C23.3367 12.4172 22.9711 13.3031 22.9711 14.6039V17.4727H27.4359L26.8523 21.9797H22.9711V35.3039C30.4945 33.1453 36 26.2195 36 18Z" fill="#737277" />
                                                    </svg>
                                                </a>
                                                <a href="https://instagram.com/armon.development?igshid=1aw3ib7ttef5" target="_blank">
                                                    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.8496 18C20.8496 19.9028 19.35 21.4453 17.5 21.4453C15.65 21.4453 14.1504 19.9028 14.1504 18C14.1504 16.0972 15.65 14.5547 17.5 14.5547C19.35 14.5547 20.8496 16.0972 20.8496 18Z" fill="#737277" />
                                                        <path d="M25.3336 11.9041C25.1726 11.4553 24.9157 11.0491 24.582 10.7156C24.2578 10.3723 23.8631 10.1081 23.4265 9.94247C23.0724 9.80103 22.5405 9.63266 21.5608 9.58679C20.501 9.53708 20.1832 9.52637 17.5001 9.52637C14.8167 9.52637 14.499 9.5368 13.4394 9.58652C12.4597 9.63266 11.9275 9.80103 11.5737 9.94247C11.1371 10.1081 10.7421 10.3723 10.4182 10.7156C10.0844 11.0491 9.82755 11.455 9.66627 11.9041C9.52875 12.2683 9.36506 12.8157 9.32047 13.8234C9.27213 14.9132 9.26172 15.2401 9.26172 18.0001C9.26172 20.7599 9.27213 21.0867 9.32047 22.1769C9.36506 23.1846 9.52875 23.7317 9.66627 24.0959C9.82755 24.545 10.0842 24.9509 10.418 25.2843C10.7421 25.6277 11.1368 25.8919 11.5734 26.0575C11.9275 26.1992 12.4597 26.3676 13.4394 26.4135C14.499 26.4632 14.8165 26.4736 17.4998 26.4736C20.1835 26.4736 20.5012 26.4632 21.5605 26.4135C22.5403 26.3676 23.0724 26.1992 23.4265 26.0575C24.3029 25.7098 24.9956 24.9973 25.3336 24.0959C25.4712 23.7317 25.6349 23.1846 25.6797 22.1769C25.7281 21.0867 25.7382 20.7599 25.7382 18.0001C25.7382 15.2401 25.7281 14.9132 25.6797 13.8234C25.6351 12.8157 25.4714 12.2683 25.3336 11.9041ZM17.5001 23.3073C14.6501 23.3073 12.3398 20.9313 12.3398 17.9998C12.3398 15.0684 14.6501 12.6924 17.5001 12.6924C20.3498 12.6924 22.6602 15.0684 22.6602 17.9998C22.6602 20.9313 20.3498 23.3073 17.5001 23.3073ZM22.8642 13.7229C22.1982 13.7229 21.6583 13.1675 21.6583 12.4825C21.6583 11.7975 22.1982 11.2422 22.8642 11.2422C23.5301 11.2422 24.0701 11.7975 24.0701 12.4825C24.0698 13.1675 23.5301 13.7229 22.8642 13.7229Z" fill="#737277" />
                                                        <path d="M17.5 0C7.83649 0 0 8.06039 0 18C0 27.9396 7.83649 36 17.5 36C27.1635 36 35 27.9396 35 18C35 8.06039 27.1635 0 17.5 0ZM27.4882 22.2613C27.4396 23.3616 27.2695 24.1128 27.0212 24.7703C26.4991 26.1587 25.4321 27.2563 24.0823 27.7932C23.4433 28.0486 22.7127 28.2233 21.6432 28.2736C20.5716 28.3239 20.2293 28.3359 17.5003 28.3359C14.771 28.3359 14.4289 28.3239 13.357 28.2736C12.2876 28.2233 11.557 28.0486 10.918 27.7932C10.2472 27.5337 9.64001 27.1269 9.13799 26.6009C8.6269 26.0848 8.23143 25.46 7.97909 24.7703C7.73075 24.1131 7.56065 23.3616 7.51205 22.2616C7.46265 21.1591 7.45117 20.807 7.45117 18C7.45117 15.193 7.46265 14.8409 7.51179 13.7387C7.56039 12.6384 7.73022 11.8872 7.97855 11.2297C8.2309 10.54 8.62663 9.91516 9.13799 9.39908C9.63974 8.87311 10.2472 8.46634 10.9177 8.20679C11.557 7.95135 12.2873 7.77667 13.357 7.72641C14.4286 7.67615 14.771 7.66406 17.5 7.66406C20.229 7.66406 20.5714 7.67615 21.643 7.72668C22.7127 7.77667 23.443 7.95135 24.0823 8.20651C24.7528 8.46606 25.3603 8.87311 25.8623 9.39908C26.3734 9.91544 26.7691 10.54 27.0212 11.2297C27.2698 11.8872 27.4396 12.6384 27.4885 13.7387C27.5373 14.8409 27.5488 15.193 27.5488 18C27.5488 20.807 27.5373 21.1591 27.4882 22.2613Z" fill="#737277" />
                                                    </svg>
                                                </a>
                                                <a href="https://wa.me/992110220000" target="_blank">
                                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="18" cy="18" r="18" fill="#737277" />
                                                        <path d="M25.0045 10.7609C23.1339 8.97969 20.6429 8 17.9955 8C12.5312 8 8.08482 12.2241 8.08482 17.4152C8.08482 19.0734 8.54018 20.6935 9.40625 22.1228L8 27L13.2545 25.6895C14.7009 26.4402 16.3304 26.8346 17.9911 26.8346H17.9955C23.4554 26.8346 28 22.6105 28 17.4194C28 14.9045 26.875 12.5422 25.0045 10.7609ZM17.9955 25.2484C16.5134 25.2484 15.0625 24.871 13.7991 24.1585L13.5 23.9888L10.3839 24.765L11.2143 21.8768L11.0179 21.5799C10.192 20.333 9.75893 18.8953 9.75893 17.4152C9.75893 13.102 13.4554 9.5904 18 9.5904C20.2009 9.5904 22.2679 10.4047 23.8214 11.8848C25.375 13.365 26.3304 15.3286 26.3259 17.4194C26.3259 21.7368 22.5357 25.2484 17.9955 25.2484ZM22.5134 19.3873C22.2679 19.2685 21.0491 18.7002 20.8214 18.6239C20.5938 18.5433 20.4286 18.5051 20.2634 18.7426C20.0982 18.9801 19.625 19.506 19.4777 19.6672C19.3348 19.8241 19.1875 19.8453 18.942 19.7266C17.4866 19.0353 16.5312 18.4924 15.5714 16.9275C15.317 16.5118 15.8259 16.5415 16.2991 15.6424C16.3795 15.4855 16.3393 15.3498 16.2768 15.231C16.2143 15.1123 15.7188 13.9545 15.5134 13.4837C15.3125 13.0257 15.1071 13.0893 14.9554 13.0808C14.8125 13.0723 14.6473 13.0723 14.4821 13.0723C14.317 13.0723 14.0491 13.1317 13.8214 13.365C13.5938 13.6025 12.9554 14.1708 12.9554 15.3286C12.9554 16.4864 13.8438 17.606 13.9643 17.7629C14.0893 17.9199 15.7098 20.2949 18.1964 21.317C19.7679 21.9616 20.3839 22.0167 21.1696 21.9065C21.6473 21.8386 22.6339 21.3382 22.8393 20.7868C23.0446 20.2355 23.0446 19.7647 22.9821 19.6672C22.9241 19.5612 22.7589 19.5018 22.5134 19.3873Z" fill="#333333" />
                                                    </svg>
                                                </a>
                                                <a href="https://t.me/ArmonDevelopment" target="_blank">
                                                    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.5 0C7.83266 0 0 8.05645 0 18C0 27.9435 7.83266 36 17.5 36C27.1673 36 35 27.9435 35 18C35 8.05645 27.1673 0 17.5 0ZM26.0948 12.3315L23.2228 26.2524C23.0111 27.2395 22.4395 27.479 21.6421 27.0145L17.2671 23.6976L15.1573 25.7879C14.9244 26.0274 14.7268 26.2306 14.2752 26.2306L14.5857 21.6508L22.6935 14.1169C23.0464 13.7976 22.6159 13.6161 22.1502 13.9355L12.13 20.4242L7.81149 19.0379C6.87298 18.7331 6.85181 18.0726 8.00907 17.6081L24.881 10.9161C25.6643 10.6258 26.3488 11.1121 26.0948 12.3315Z" fill="#737277" />
                                                    </svg>
                                                </a>
                                                <a href="https://www.youtube.com/channel/UC8B6VhhL2iWJ_kbg4IOqG2Q" target="_blank">
                                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="18" cy="18" r="18" fill="#737277" />
                                                        <path d="M20 9.5L27 10.5L29 12.5V16L28.5 22.5L28 26C27 26.3333 24.9 27 24.5 27C24 27 18 28 16.5 27.5C15 27 9.5 26 9 26C8.6 26 7.5 24.6667 7 24V12.5C7.5 11.5 8.7 9.5 9.5 9.5H20Z" fill="#333333" />
                                                        <path d="M16.0071 20.8875L21.1071 17.9893L16.0071 15.0911V20.8875ZM30 27.4286V8.57143C30 7.15178 28.8482 6 27.4286 6H8.57143C7.15179 6 6 7.15178 6 8.57143V27.4286C6 28.8482 7.15179 30 8.57143 30H27.4286C28.8482 30 30 28.8482 30 27.4286ZM27.75 17.9839C27.75 17.9839 27.75 21.1768 27.3429 22.7089C27.1179 23.5554 26.4589 24.2196 25.6179 24.4446C24.1018 24.8571 18 24.8571 18 24.8571C18 24.8571 11.8982 24.8571 10.3821 24.4446C9.54107 24.2196 8.88214 23.5554 8.65714 22.7089C8.25 21.1821 8.25 17.9839 8.25 17.9839C8.25 17.9839 8.25 14.7911 8.65714 13.2589C8.88214 12.4125 9.54107 11.775 10.3821 11.55C11.8982 11.1429 18 11.1429 18 11.1429C18 11.1429 24.1018 11.1429 25.6179 11.5554C26.4589 11.7804 27.1179 12.4179 27.3429 13.2643C27.75 14.7911 27.75 17.9839 27.75 17.9839Z" fill="#737277" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="footer-bttm-wrap">
                            <div className="row">
                                <div className="container">
                                    <div className="col-12">
                                        <div className="under-footer d-flex justify-content-between align-items-center">
                                            <p className="under-footer__text">
                                                © All rights reserved by Armon Development
                                        </p>
                                            <a href="https://bobo.tj/" className="under-footer__logo" target="_blank">
                                                <img src={boboLogo} alt="Logotype" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mobile-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="f-logo">
                                        <Link to="/">
                                            <svg width="216" height="71" viewBox="0 0 216 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.77524 6.40219L7.19447 33.7229L6.4043 7.33708L7.70413 6.40219H7.77524Z" fill="white" />
                                                <path d="M5.44822 8.14573L4.8635 32.4606L4.07728 9.08062L5.37316 8.14573H5.44822Z" fill="white" />
                                                <path d="M9.97976 4.7691L9.40689 34.6302L8.62858 5.73948L9.97976 4.7691Z" fill="white" />
                                                <path d="M12.1883 3.18334L11.6155 35.5611L10.8451 4.14978L12.1883 3.18334Z" fill="white" />
                                                <path d="M14.3968 1.59759L13.8279 36.6065L13.0575 2.56008L14.3968 1.59759Z" fill="white" />
                                                <path d="M16.3709 0L15.7901 37.6755L15 0.982222L16.3709 0Z" fill="white" />
                                                <path d="M26.8499 48.1209L26.2889 70.9211L25.5145 48.7284L26.8499 48.1209Z" fill="white" />
                                                <path d="M35.7116 44.0777L35.1348 70.8817L34.3485 44.7009L35.7116 44.0777Z" fill="white" />
                                                <path d="M22.4328 50.1367L21.8639 70.9211L21.0856 50.752L22.4328 50.1367Z" fill="white" />
                                                <path d="M31.2906 46.0934L30.7099 70.9606L29.9197 46.7206L31.2906 46.0934Z" fill="white" />
                                                <path d="M33.4991 45.0875L32.9223 70.9606L32.14 45.7068L33.4991 45.0875Z" fill="white" />
                                                <path d="M29.0662 47.1111L28.4973 70.9606L27.723 47.7225L29.0662 47.1111Z" fill="white" />
                                                <path d="M20.2283 51.1426L19.6514 70.9211L18.8652 51.7619L20.2283 51.1426Z" fill="white" />
                                                <path d="M24.6453 49.1268L24.0764 71L23.2981 49.7422L24.6453 49.1268Z" fill="white" />
                                                <path d="M16.8463 40.5945L16.0601 70.9803L15.4872 39.9594L16.8463 40.5945Z" fill="white" />
                                                <path d="M14.6299 39.5611L13.8477 70.9211L13.2787 38.926L14.6299 39.5611Z" fill="white" />
                                                <path d="M12.4214 38.5275L11.6352 70.9408L11.0663 37.8964L12.4214 38.5275Z" fill="white" />
                                                <path d="M10.205 37.4901L9.42671 70.9606L8.85779 36.8629L10.205 37.4901Z" fill="white" />
                                                <path d="M7.99646 36.4605L7.2142 70.9803L6.64528 35.8294L7.99646 36.4605Z" fill="white" />
                                                <path d="M5.79584 35.4349L5.00172 70.9408L4.4249 34.7919L5.79584 35.4349Z" fill="white" />
                                                <path d="M3.57156 34.3935L2.7893 70.9014L2.22038 33.7624L3.57156 34.3935Z" fill="white" />
                                                <path d="M1.37094 33.3679L0.576822 70.9211L0 32.7249L1.37094 33.3679Z" fill="white" />
                                                <path d="M28.9636 25.0447L28.1892 44.9968L27.6084 24.0427L28.9636 25.0447Z" fill="white" />
                                                <path d="M31.2906 26.6699L30.5162 44.0658L29.9354 25.6679L31.2906 26.6699Z" fill="white" />
                                                <path d="M26.7471 23.4037L25.9767 46.0421L25.4038 22.4096L26.7471 23.4037Z" fill="white" />
                                                <path d="M24.5307 21.7667L23.7642 47.0322L23.1953 20.7765L24.5307 21.7667Z" fill="white" />
                                                <path d="M22.3222 20.1336L21.5518 48.0184L20.9829 19.1435L22.3222 20.1336Z" fill="white" />
                                                <path d="M20.1295 18.5084L19.3393 49.1229L18.7586 17.4985L20.1295 18.5084Z" fill="white" />
                                                <path d="M69.4359 36.709H58.3103L56.1887 41.8371H50.5074L61.1826 17.9087H66.6585L77.3731 41.8371H71.5535L69.4359 36.709ZM67.6896 32.504L63.8889 23.3445L60.0882 32.504H67.6896ZM101.995 41.8371L97.3722 35.1706H97.0996H92.2717V41.8371H86.7247V17.9087H97.0996C99.2212 17.9087 101.066 18.2638 102.627 18.9699C104.191 19.676 105.392 20.6779 106.238 21.9796C107.083 23.2774 107.506 24.8159 107.506 26.5949C107.506 28.3739 107.079 29.9045 106.222 31.1944C105.365 32.4803 104.152 33.4665 102.575 34.1529L107.949 41.845H101.995V41.8371ZM100.588 23.4983C99.719 22.7804 98.4548 22.4214 96.7875 22.4214H92.2678V30.7605H96.7875C98.4548 30.7605 99.719 30.3976 100.588 29.6678C101.453 28.938 101.888 27.9124 101.888 26.591C101.892 25.2458 101.457 24.2123 100.588 23.4983ZM140.543 41.8371L140.507 27.4785L133.455 39.3046H130.954L123.938 27.7862V41.8371H118.734V17.9087H123.321L132.29 32.7801L141.124 17.9087H145.679L145.746 41.8371H140.543ZM163.154 40.6379C161.155 39.5689 159.594 38.0897 158.464 36.212C157.334 34.3304 156.769 32.22 156.769 29.8729C156.769 27.5258 157.334 25.4115 158.464 23.5338C159.594 21.6522 161.158 20.1769 163.154 19.1079C165.149 18.0389 167.393 17.5024 169.882 17.5024C172.371 17.5024 174.607 18.0389 176.59 19.1079C178.578 20.1809 180.138 21.6562 181.28 23.5338C182.422 25.4154 182.991 27.5298 182.991 29.8729C182.991 32.22 182.422 34.3343 181.28 36.212C180.138 38.0936 178.574 39.5689 176.59 40.6379C174.603 41.7109 172.367 42.2434 169.882 42.2434C167.393 42.2473 165.153 41.7109 163.154 40.6379ZM173.718 36.5552C174.86 35.9043 175.757 35.001 176.405 33.8373C177.057 32.6736 177.381 31.3522 177.381 29.8729C177.381 28.3937 177.057 27.0683 176.405 25.9085C175.753 24.7448 174.86 23.8415 173.718 23.1906C172.576 22.5398 171.3 22.2163 169.882 22.2163C168.467 22.2163 167.187 22.5398 166.046 23.1906C164.904 23.8415 164.007 24.7448 163.359 25.9085C162.707 27.0722 162.383 28.3937 162.383 29.8729C162.383 31.3561 162.707 32.6776 163.359 33.8373C164.011 35.001 164.904 35.9043 166.046 36.5552C167.187 37.206 168.464 37.5295 169.882 37.5295C171.296 37.5295 172.576 37.2021 173.718 36.5552ZM216 17.9087V41.8371H211.445L199.497 27.3089V41.8371H194.021V17.9087H198.608L210.524 32.4369V17.9087H216Z" fill="white" />
                                                <path d="M86.8551 47.9948H90.32C91.1892 47.9948 91.9596 48.1683 92.6352 48.5115C93.3068 48.8547 93.8323 49.3399 94.2037 49.9592C94.575 50.5825 94.7607 51.2925 94.7607 52.1012C94.7607 52.9059 94.575 53.6199 94.2037 54.2431C93.8323 54.8664 93.3108 55.3476 92.6352 55.6908C91.9635 56.034 91.1892 56.2076 90.32 56.2076H86.8551V47.9948ZM90.2489 55.1859C90.9126 55.1859 91.5013 55.0557 92.003 54.7993C92.5087 54.5429 92.8959 54.18 93.1725 53.7145C93.4451 53.2491 93.5834 52.7126 93.5834 52.1012C93.5834 51.4898 93.4451 50.9533 93.1725 50.4878C92.8999 50.0223 92.5087 49.6594 92.003 49.403C91.4973 49.1466 90.9126 49.0164 90.2489 49.0164H88.0285V55.1859H90.2489ZM102.52 55.1859V56.2076H96.5544V47.9987H102.358V49.0204H97.7318V51.541H101.852V52.539H97.7318V55.1898H102.52V55.1859ZM111.445 47.9948L107.838 56.2036H106.676L103.057 47.9948H104.326L107.285 54.7362L110.268 47.9948H111.445ZM118.458 55.1859V56.2076H112.492V47.9987H118.296V49.0204H113.665V51.541H117.786V52.539H113.665V55.1898H118.458V55.1859ZM120.362 47.9948H121.536V55.1859H125.988V56.2076H120.362V47.9948ZM128.651 55.7539C127.987 55.391 127.462 54.8901 127.083 54.2471C126.703 53.608 126.514 52.8901 126.514 52.1012C126.514 51.3122 126.703 50.5983 127.083 49.9553C127.462 49.3162 127.983 48.8113 128.651 48.4484C129.315 48.0855 130.065 47.9041 130.895 47.9041C131.717 47.9041 132.46 48.0855 133.127 48.4484C133.791 48.8113 134.313 49.3123 134.688 49.9513C135.063 50.5904 135.253 51.3044 135.253 52.1012C135.253 52.898 135.063 53.6159 134.688 54.251C134.313 54.8901 133.791 55.3871 133.127 55.7539C132.464 56.1168 131.717 56.2983 130.895 56.2983C130.065 56.2983 129.319 56.1168 128.651 55.7539ZM132.523 54.8427C133.005 54.5705 133.384 54.1918 133.661 53.7106C133.937 53.2293 134.079 52.6929 134.079 52.0972C134.079 51.5016 133.941 50.9651 133.661 50.4839C133.384 50.0026 133.005 49.6279 132.523 49.3517C132.041 49.0796 131.5 48.9415 130.895 48.9415C130.291 48.9415 129.745 49.0796 129.255 49.3517C128.766 49.6239 128.382 50.0026 128.106 50.4839C127.829 50.9651 127.687 51.5016 127.687 52.0972C127.687 52.6929 127.825 53.2293 128.106 53.7106C128.382 54.1918 128.766 54.5705 129.255 54.8427C129.745 55.1149 130.291 55.253 130.895 55.253C131.5 55.253 132.041 55.1188 132.523 54.8427ZM142.767 48.76C143.38 49.2689 143.684 49.9671 143.684 50.8586C143.684 51.7501 143.38 52.4483 142.767 52.9572C142.155 53.466 141.317 53.7185 140.255 53.7185H138.224V56.2036H137.05V47.9948H140.259C141.321 47.9948 142.159 48.2512 142.767 48.76ZM141.922 52.2235C142.313 51.9079 142.511 51.4503 142.511 50.8586C142.511 50.263 142.313 49.8093 141.922 49.4938C141.531 49.1782 140.962 49.0204 140.219 49.0204H138.224V52.7008H140.219C140.966 52.6968 141.531 52.539 141.922 52.2235ZM153.036 56.2036L153.024 50.2235L150.053 55.2056H149.511L146.54 50.259V56.2036H145.414V47.9948H146.378L149.808 53.7658L153.19 47.9948H154.154L154.165 56.2036H153.036ZM162.593 55.1859V56.2076H156.627V47.9987H162.431V49.0204H157.804V51.541H161.925V52.539H157.804V55.1898H162.593V55.1859ZM171.565 47.9948V56.2036H170.601L165.666 50.0815V56.2036H164.493V47.9948H165.457L170.392 54.1169V47.9948H171.565ZM175.666 49.0164H172.849V47.9948H179.648V49.0164H176.831V56.2036H175.67V49.0164H175.666Z" fill="white" />
                                                <path d="M215.747 51.9077H189.356V53.6631H215.747V51.9077Z" fill="white" />
                                                <path d="M75.8758 51.9077H49.4843V53.6631H75.8758V51.9077Z" fill="white" />
                                                <path d="M55.6317 64.9212V70.4003H55.1497V65.7614L52.7634 69.6942H52.5224L50.1479 65.7693V70.3964H49.662V64.9172H50.1756L52.6567 69.0631L55.1458 64.9172H55.6317V64.9212Z" fill="white" />
                                                <path d="M67.8357 67.7851H63.1185C63.1343 68.2111 63.2409 68.5898 63.4464 68.9251C63.6479 69.2564 63.9244 69.5128 64.2721 69.6943C64.6198 69.8757 65.0109 69.9665 65.4455 69.9665C65.8011 69.9665 66.1329 69.8994 66.4372 69.7732C66.7414 69.643 66.9942 69.4537 67.1997 69.2012L67.5039 69.5483C67.2668 69.8363 66.9666 70.0572 66.607 70.211C66.2475 70.3649 65.8564 70.4438 65.4336 70.4438C64.8884 70.4438 64.4025 70.3254 63.9718 70.0888C63.5452 69.8521 63.2093 69.5207 62.9683 69.1026C62.7273 68.6845 62.6049 68.2032 62.6049 67.6667C62.6049 67.1342 62.7194 66.6569 62.9446 66.2348C63.1738 65.8127 63.4859 65.4814 63.8849 65.2447C64.284 65.008 64.7344 64.8857 65.2282 64.8857C65.726 64.8857 66.1725 65.0041 66.5675 65.2368C66.9626 65.4696 67.2747 65.797 67.5039 66.219C67.733 66.6372 67.8436 67.1145 67.8436 67.647L67.8357 67.7851ZM64.1891 65.5997C63.881 65.7733 63.6321 66.0139 63.4503 66.3216C63.2646 66.6332 63.158 66.9843 63.1303 67.3748H67.334C67.3142 66.9843 67.2076 66.6332 67.0179 66.3255C66.8283 66.0179 66.5794 65.7772 66.2712 65.6037C65.9631 65.4301 65.6154 65.3394 65.2322 65.3394C64.841 65.3394 64.4973 65.4262 64.1891 65.5997Z" fill="white" />
                                                <path d="M78.752 64.9214V70.4005H78.2265V68.0416C77.5746 68.3414 76.9227 68.4913 76.2708 68.4913C75.6268 68.4913 75.1211 68.3453 74.7537 68.0495C74.3863 67.7576 74.2006 67.3237 74.2006 66.7478V64.9214H74.726V66.7162C74.726 67.1422 74.8683 67.4736 75.1567 67.7024C75.4451 67.9351 75.8402 68.0495 76.3459 68.0495C76.9188 68.0495 77.5469 67.9075 78.2265 67.6195V64.9214H78.752Z" fill="white" />
                                                <path d="M89.9447 65.3947H87.7994V70.4005H87.274V65.3947H85.1287V64.9214H89.9408V65.3947H89.9447Z" fill="white" />
                                                <path d="M100.043 67.359C100.399 67.6509 100.58 68.073 100.58 68.6331C100.58 69.213 100.391 69.6587 100.011 69.9664C99.6321 70.2741 99.0869 70.424 98.3718 70.4161L96.3213 70.3964V64.9172H96.8468V66.8896L98.4863 66.9093C99.1659 66.9211 99.6874 67.071 100.043 67.359ZM99.6242 69.6627C99.9126 69.4299 100.055 69.0907 100.055 68.6331C100.055 68.1913 99.9165 67.8639 99.636 67.6509C99.3555 67.4379 98.9288 67.3235 98.352 67.3116L96.8507 67.2998V69.9743L98.352 69.994C98.913 70.0058 99.3358 69.8954 99.6242 69.6627ZM101.588 64.9212H102.113V70.4003H101.588V64.9212Z" fill="white" />
                                                <path d="M118.371 70.0848C117.952 69.8482 117.62 69.5168 117.383 69.0947C117.146 68.6727 117.028 68.1954 117.028 67.6628C117.028 67.1224 117.146 66.6451 117.383 66.2191C117.62 65.797 117.952 65.4656 118.371 65.2329C118.79 65.0002 119.268 64.8818 119.801 64.8818C120.244 64.8818 120.643 64.9686 121.006 65.1382C121.366 65.3118 121.658 65.5603 121.883 65.8877L121.496 66.1717C121.298 65.8996 121.057 65.6944 120.765 65.5564C120.473 65.4183 120.153 65.3512 119.805 65.3512C119.378 65.3512 118.995 65.4459 118.655 65.6392C118.316 65.8325 118.051 66.1047 117.857 66.4518C117.664 66.8029 117.569 67.2052 117.569 67.6589C117.569 68.1125 117.664 68.5149 117.857 68.8659C118.051 69.217 118.316 69.4853 118.655 69.6785C118.995 69.8718 119.378 69.9665 119.805 69.9665C120.157 69.9665 120.477 69.8994 120.765 69.7614C121.057 69.6233 121.298 69.4221 121.496 69.146L121.883 69.43C121.658 69.7574 121.366 70.0099 121.006 70.1795C120.647 70.3531 120.244 70.4359 119.801 70.4359C119.268 70.4399 118.79 70.3215 118.371 70.0848Z" fill="white" />
                                                <path d="M132.582 65.3473C132.977 65.5761 133.289 65.8917 133.51 66.298C133.736 66.7043 133.846 67.1737 133.846 67.7023C133.846 68.2348 133.732 68.7082 133.506 69.1224C133.277 69.5405 132.961 69.864 132.55 70.0967C132.139 70.3294 131.673 70.4478 131.148 70.4478C130.543 70.4478 130.034 70.3018 129.607 70.006C129.184 69.7141 128.86 69.2959 128.639 68.7594C128.418 68.219 128.307 67.5918 128.307 66.8699C128.307 66.0534 128.406 65.3749 128.607 64.8345C128.809 64.2941 129.109 63.872 129.512 63.5604C129.915 63.2488 130.433 63.016 131.061 62.8622L133.491 62.2744L133.574 62.7675L131.262 63.3119C130.693 63.446 130.235 63.6393 129.88 63.8957C129.524 64.1521 129.259 64.4992 129.085 64.941C128.912 65.3828 128.821 65.943 128.813 66.6293C128.995 66.1244 129.299 65.7299 129.725 65.438C130.152 65.1461 130.65 65.0041 131.219 65.0041C131.733 65.0041 132.187 65.1185 132.582 65.3473ZM132.274 69.7062C132.602 69.5089 132.859 69.2407 133.04 68.8936C133.222 68.5464 133.313 68.1559 133.313 67.7141C133.313 67.2723 133.222 66.8857 133.04 66.5425C132.859 66.2033 132.606 65.939 132.278 65.7536C131.954 65.5682 131.578 65.4775 131.16 65.4775C130.741 65.4775 130.366 65.5682 130.034 65.7536C129.706 65.939 129.449 66.2033 129.267 66.5425C129.085 66.8818 128.995 67.2723 128.995 67.7141C128.995 68.1559 129.085 68.5464 129.267 68.8936C129.449 69.2407 129.706 69.5129 130.034 69.7062C130.362 69.9034 130.737 69.9981 131.16 69.9981C131.575 69.9981 131.946 69.9034 132.274 69.7062Z" fill="white" />
                                                <path d="M144.549 67.359C144.905 67.6509 145.086 68.073 145.086 68.6331C145.086 69.213 144.897 69.6587 144.518 69.9664C144.138 70.2741 143.593 70.424 142.878 70.4161L140.828 70.3964V64.9172H141.353V66.8896L142.993 66.9093C143.672 66.9211 144.19 67.071 144.549 67.359ZM144.126 69.6627C144.415 69.4299 144.557 69.0907 144.557 68.6331C144.557 68.1913 144.419 67.8639 144.138 67.6509C143.858 67.4379 143.431 67.3235 142.854 67.3116L141.353 67.2998V69.9743L142.854 69.994C143.415 70.0058 143.842 69.8954 144.126 69.6627ZM146.094 64.9212H146.619V70.4003H146.094V64.9212Z" fill="white" />
                                                <path d="M158.586 68.9292C158.586 69.4065 158.413 69.7694 158.065 70.0218C157.717 70.2743 157.2 70.4005 156.504 70.4005H154.13V64.9214H156.441C157.05 64.9214 157.528 65.0437 157.875 65.2843C158.223 65.5249 158.397 65.872 158.397 66.3178C158.397 66.6413 158.306 66.9095 158.128 67.1225C157.95 67.3355 157.698 67.4894 157.378 67.5801C158.184 67.7142 158.586 68.1678 158.586 68.9292ZM154.648 67.4184H156.414C156.884 67.4184 157.243 67.3276 157.496 67.1501C157.749 66.9726 157.875 66.7162 157.875 66.3809C157.875 66.0377 157.749 65.7813 157.504 65.6117C157.255 65.4381 156.892 65.3553 156.418 65.3553H154.652V67.4184H154.648ZM158.061 68.9094C158.061 68.5386 157.943 68.2665 157.705 68.0929C157.468 67.9193 157.093 67.8325 156.579 67.8325H154.644V69.9745H156.493C157.54 69.9666 158.061 69.6155 158.061 68.9094Z" fill="white" />
                                                <path d="M169.096 65.3987C169.459 65.7458 169.641 66.2546 169.641 66.9252V70.4005H169.135V69.4261C168.961 69.7496 168.705 69.9981 168.369 70.1756C168.033 70.3531 167.63 70.4439 167.16 70.4439C166.551 70.4439 166.069 70.3019 165.714 70.0139C165.358 69.7259 165.184 69.3512 165.184 68.8818C165.184 68.4281 165.346 68.0573 165.674 67.7733C165.998 67.4893 166.52 67.3473 167.235 67.3473H169.115V66.9055C169.115 66.3966 168.977 66.0061 168.701 65.7418C168.424 65.4775 168.021 65.3434 167.488 65.3434C167.124 65.3434 166.777 65.4065 166.441 65.5328C166.109 65.659 165.824 65.8247 165.595 66.0377L165.334 65.659C165.607 65.4144 165.939 65.2251 166.322 65.087C166.705 64.949 167.108 64.8819 167.531 64.8819C168.211 64.878 168.732 65.0515 169.096 65.3987ZM168.396 69.6944C168.716 69.4853 168.953 69.1816 169.115 68.7832V67.7536H167.247C166.705 67.7536 166.318 67.8522 166.073 68.0455C165.832 68.2427 165.71 68.511 165.71 68.8542C165.71 69.2092 165.844 69.4932 166.109 69.6983C166.374 69.9034 166.749 70.006 167.235 70.006C167.693 70.0099 168.08 69.9074 168.396 69.6944Z" fill="white" />
                                                <path d="M182.999 65.2291C183.406 65.4618 183.726 65.7932 183.955 66.2152C184.188 66.6373 184.302 67.1186 184.302 67.659C184.302 68.1915 184.188 68.6688 183.955 69.0909C183.722 69.513 183.406 69.8443 182.999 70.081C182.592 70.3177 182.133 70.436 181.624 70.436C181.134 70.436 180.691 70.3256 180.292 70.1086C179.897 69.8917 179.581 69.5879 179.348 69.1974C179.115 68.8069 178.981 68.3572 178.953 67.8523H177.554V70.3926H177.029V64.9135H177.554V67.3671H178.953C178.996 66.878 179.135 66.444 179.372 66.0654C179.609 65.6867 179.925 65.3948 180.316 65.1857C180.707 64.9766 181.142 64.8701 181.62 64.8701C182.133 64.878 182.592 64.9963 182.999 65.2291ZM182.726 69.6865C183.054 69.4893 183.311 69.2171 183.496 68.8621C183.682 68.5071 183.777 68.1087 183.777 67.659C183.777 67.2054 183.682 66.803 183.496 66.4519C183.311 66.1009 183.054 65.8326 182.726 65.6393C182.398 65.446 182.027 65.3514 181.624 65.3514C181.217 65.3514 180.849 65.446 180.521 65.6393C180.194 65.8326 179.933 66.1048 179.751 66.4519C179.565 66.803 179.471 67.2054 179.471 67.659C179.471 68.1047 179.565 68.5071 179.751 68.8621C179.937 69.2132 180.194 69.4893 180.521 69.6865C180.849 69.8838 181.217 69.9785 181.624 69.9785C182.031 69.9785 182.398 69.8798 182.726 69.6865Z" fill="white" />
                                                <path d="M194.737 65.3947H192.591V70.4005H192.066V65.3947H189.921V64.9214H194.737V65.3947Z" fill="white" />
                                                <path d="M201.655 70.0848C201.236 69.8482 200.904 69.5168 200.667 69.0947C200.43 68.6727 200.311 68.1954 200.311 67.6628C200.311 67.1224 200.43 66.6451 200.667 66.2191C200.904 65.797 201.236 65.4656 201.655 65.2329C202.073 65.0002 202.551 64.8818 203.085 64.8818C203.527 64.8818 203.926 64.9686 204.29 65.1382C204.649 65.3118 204.942 65.5603 205.167 65.8877L204.78 66.1717C204.582 65.8996 204.341 65.6944 204.049 65.5564C203.756 65.4183 203.436 65.3512 203.089 65.3512C202.662 65.3512 202.279 65.4459 201.939 65.6392C201.599 65.8325 201.335 66.1047 201.141 66.4518C200.947 66.8029 200.853 67.2052 200.853 67.6589C200.853 68.1125 200.947 68.5149 201.141 68.8659C201.335 69.217 201.599 69.4853 201.939 69.6785C202.279 69.8718 202.662 69.9665 203.089 69.9665C203.44 69.9665 203.76 69.8994 204.049 69.7614C204.341 69.6233 204.582 69.4221 204.78 69.146L205.167 69.43C204.942 69.7574 204.649 70.0099 204.29 70.1795C203.93 70.3531 203.527 70.4359 203.085 70.4359C202.551 70.4399 202.073 70.3215 201.655 70.0848Z" fill="white" />
                                                <path d="M215.818 64.9214V70.4005H215.336V68.511H213.507C213.381 68.511 213.29 68.5071 213.234 68.4992L211.879 70.4005H211.302L212.721 68.44C212.274 68.3414 211.931 68.1481 211.69 67.8641C211.453 67.5761 211.334 67.2053 211.334 66.7517C211.334 66.1521 211.536 65.6945 211.939 65.3869C212.342 65.0792 212.895 64.9253 213.594 64.9253H215.818V64.9214ZM213.558 68.1126H215.336V65.3829H213.622C212.444 65.3829 211.856 65.8444 211.856 66.7675C211.86 67.6629 212.425 68.1126 213.558 68.1126Z" fill="white" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="armon-info">
                                    <div className="">
                                        <ul className="info-txt">
                                            <li><p className="justify-content-center display-4">г. Душанбе,</p></li>
                                            <li><p className="d-flex justify-content-center display-4">ул. Н. Махсум 156</p></li>
                                            <li><a href="https://yandex.ru/maps/-/CCU4aDBiGC" className="d-flex justify-content-center"><u>показать на карте</u></a></li>
                                        </ul>
                                    </div>
                                    <div className="">
                                        <ul className="info-txt">
                                            <li><p className="d-flex justify-content-center"><a href="tel:+992987229000"> +992 98-722-90-00</a></p></li>
                                            <li><p className="d-flex justify-content-center"><a href="mailto:info@armon.tj">info@armon.tj</a></p></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="col-md-12">
                                    <div className="substr">
                                        <p className="d-flex justify-content-center">Подписывайтесь на новости и акции</p>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Ваш E-Mail" aria-label="Ваш E-Mail" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn input-group-text" id="basic-addon2">OK</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="footer-bttm-wrap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="under-footer d-flex justify-content-between align-items-center">
                                            <p className="under-footer__text mobile-under-footer__text">
                                                All rights reserved by
                                                «Armon Development»
                                            </p>
                                            <a href="https://bobo.tj/" className="under-footer__logo" target="_blank">
                                                <img src={mobilebobo} alt="Logotype" className="mobile__under-footer-img" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
