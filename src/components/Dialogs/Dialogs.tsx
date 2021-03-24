import React, {ChangeEvent} from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import { Message } from "./Message/Message";
import {DialogsType} from "../../App";

type DialogsPropsType = {
    state: DialogsType
    sendMessage: () => void
    updateMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)
    const newMessageBody = props.state.newMessageBody
    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessage(e)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}