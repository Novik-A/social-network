import React, {ChangeEvent} from "react";
import {
    InitialStateDialogsType,
    sendMessageActionCreator,
    updateMessageActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    state: InitialStateDialogsType
}
type MapDispatchPropsType = {
    sendMessage: () => void
    updateMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateMessage: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateMessageActionCreator(e))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)