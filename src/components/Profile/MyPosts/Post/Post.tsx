import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../../App";

export const Post: React.FC<PostType> = props => {
    return (
        <div className={s.post}>
            <img src={"https://image.freepik.com/free-vector/samurai-esports-logo-for-your-team_116205-81.jpg"} alt=""/>
            {props.message}
            <div>{`likes ${props.likes}`}</div>
        </div>
    )
}