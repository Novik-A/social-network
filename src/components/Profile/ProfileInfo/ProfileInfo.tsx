import React from "react";
import s from './ProfileInfo.module.css'


export function ProfileInfo() {
    return (
        <div>
            <img className={s.bg} src={"https://i.pinimg.com/originals/fd/ba/44/fdba444cffb79e04129e80a43e9d0f34.jpg"} alt=""/>
            <div className={s.description}>
                ava+description
            </div>
        </div>
    )
}