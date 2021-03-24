import {combineReducers, createStore } from "redux";
import {addPostActionCreator, profileReducer, updatePostActionCreator} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer, sendMessageActionCreator, updateMessageActionCreator} from "./dialogs-reducer";

export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updatePostActionCreator> |
    ReturnType<typeof sendMessageActionCreator> |
    ReturnType<typeof updateMessageActionCreator>

let reducers = combineReducers({
    sidebarReducer,
    profileReducer,
    dialogsReducer
})

export type ReduxStoreType = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store