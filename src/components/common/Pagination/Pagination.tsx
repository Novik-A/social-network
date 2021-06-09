import React, {useState} from "react";
import s from "./Pagination.module.css";

type PropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

export const Pagination: React.FC<PropsType> = ({portionSize = 10, ...props}) => {
    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize

    return <div className={s.pagination}>
        {portionNumber > 1 &&
        <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
            .map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.pageNumber}
                             key={p}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{`${p}`}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
        }
    </div>
}