import React from "react";
import s from "./Pagination.module.css";

type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Pagination: React.FC<PropsType> = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p ? s.selectedPage : s.pages}
                         key={p}
                         onClick={() => {
                             props.onPageChanged(p)
                         }}>{`${p} `}</span>
        })}
    </div>
}