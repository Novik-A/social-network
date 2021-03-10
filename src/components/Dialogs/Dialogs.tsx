import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import { Message } from "./Message/Message";
import {DialogItemType, MessageType} from "../../App";

type DialogsPropsType = {
    dialogsState: {
        dialogs: Array<DialogItemType>
        messages: Array<MessageType>
    }
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsState.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    let messagesElements = props.dialogsState.messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}