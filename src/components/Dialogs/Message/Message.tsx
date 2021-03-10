import React from "react";
import s from './../Dialogs.module.css'
import {MessageType} from "../../../App";



export function Message(props: MessageType) {
    return <div className={s.message}>{props.message}</div>
}
