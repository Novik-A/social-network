import React, {ChangeEvent} from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import { Message } from "./Message/Message";
import {DialogsType} from "../../App";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../Redux/dialogs-reducer";
import {ActionsTypes} from "../../Redux/redux-store";

type DialogsPropsType = {
    dialogsState: DialogsType
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsState.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    let messagesElements = props.dialogsState.messages.map(m => <Message id={m.id} message={m.message}/>)
    const newMessageBody = props.dialogsState.newMessageBody
    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageActionCreator(e))
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