import React, {ChangeEvent} from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import { Message } from "./Message/Message";
import {InitialStateDialogsType} from "../../redux/dialogs-reducer";
import {InjectedFormProps, Field, reduxForm} from "redux-form";


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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type FormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea'
                   name='newMessageBody'
                   placeholder='Enter your message'/>
        </div>
        <div><button>Send</button></div>
    </form>
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'DialogAddMessageForm'})(AddMessageForm)