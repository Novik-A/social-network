import React, {ChangeEvent} from "react";
import {StoreType} from "../../App";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = (props: StoreType) => {

    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateMessageActionCreator(e))
    }
    return (
        <Dialogs state={state}
                 sendMessage={onSendMessageClick}
                 updateMessage={onNewMessageChange}
        />
    )
}