import React, { useState } from 'react'
import leftSvg from '../../assets/img/leftp.svg'
import rightSvg from '../../assets/img/rigp.svg'
import './Index.css'

export default function Index({ total, currentPage, onChangeCurrentPage , dNone}) {
    let [currentX, setCurrentX] = useState(currentPage)
    const paginators = () => {
        const data = [<button disabled={currentX === 1} className={currentX === 1 ? "paginate__btn-act" : "paginate__btn"} onClick={() => { prev() }}><img src={rightSvg} alt="rightSvg" /></button>]
        for (let i = 1; i <= total; i++) {
            data.push(<li className={paginatorClassName(i)} onClick={() => { onCurrentPage(i) }}><button className="paginate__btn">{i}</button></li>)
        }
        data.push(<button disabled={currentX === total} className={currentX === total ? "ml-2 paginate__btn-act" : "ml-2 paginate__btn"} onClick={() => { next() }}><img src={leftSvg} alt="LeftIcon" /></button>)
        return data
    }
    const onCurrentPage = page => {
        updateCurrentPage(page)
    }
    const updateCurrentPage = page => {
        if (page === currentX) return
        setCurrentX(page)
        onChangeCurrentPage(page)
    }
    const next = () => {
        if (currentX === total) {
            return
        }
        const n = currentX + 1
        updateCurrentPage(n)
    }

    const prev = () => {
        if (currentX === 1) {
            return
        }
        const p = currentX - 1
        updateCurrentPage(p)
    }

    const paginatorClassName = number => {
        let className = number === currentX ? 'paginator-active' : ''
        className += ' ml-2'
        return className
    }

    return (
        <>
            <div className= {dNone === true ? "container" : "container d-none"}>
                <ul className="d-flex paginate">
                    {paginators().map(el => el)}
                </ul>
            </div>
        </>
    )
}
