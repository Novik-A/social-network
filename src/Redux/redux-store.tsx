import {combineReducers, createStore } from "redux";
import {addPostActionCreator, profileReducer, updatePostActionCreator} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer, sendMessageActionCreator, updateMessageActionCreator} from "./dialogs-reducer";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, usersReducer} from "./users-reducer";

export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updatePostActionCreator> |
    ReturnType<typeof sendMessageActionCreator> |
    ReturnType<typeof updateMessageActionCreator> |
    ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC>

let rootReducer = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)
export type ReduxStoreType = typeof store

export default store