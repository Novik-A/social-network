import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {InitialStateDialogsType} from "../../redux/dialogs-reducer";
import AddMessageForm, {FormDataType} from "./AddMessageForm";


type DialogsPropsType = {
    state: InitialStateDialogsType
    sendMessage: (newMessageBody: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = props => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)
    const addNewMessage = (formData: FormDataType) => {
        props.sendMessage(formData.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
