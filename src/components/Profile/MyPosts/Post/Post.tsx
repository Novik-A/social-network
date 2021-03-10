import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../../App";


export function Post(props: PostType) {
    return (
        <div className={s.post}>
            <img src={"https://mygamehunter.ru/images/thumbnail/86332/550"} alt=""/>
            {props.message}
            <div>{`likes ${props.likes}`}</div>
        </div>
    )
}