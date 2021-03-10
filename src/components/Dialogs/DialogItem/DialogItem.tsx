import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'
import {DialogItemType} from "../../../App";


export function DialogItem(props: DialogItemType) {
    return (
        <div className={s.dialog}>
            <img src={props.avatar} alt=""/>
            <NavLink className={s.nav} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}