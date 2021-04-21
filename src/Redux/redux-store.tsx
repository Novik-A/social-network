import {combineReducers, createStore } from "redux";
import {addPostActionCreator, profileReducer, setUserProfile, updatePostActionCreator} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer, sendMessageActionCreator, updateMessageActionCreator} from "./dialogs-reducer";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, usersReducer} from "./users-reducer";
import {authReducer, setUserData} from "./auth-reducer";

export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updatePostActionCreator> |
    ReturnType<typeof sendMessageActionCreator> |
    ReturnType<typeof updateMessageActionCreator> |
    ReturnType<typeof follow> | ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile> | ReturnType<typeof setUserData>

let rootReducer = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)
export type ReduxStoreType = typeof store

export default store