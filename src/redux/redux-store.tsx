import {applyMiddleware, combineReducers, createStore } from "redux";
import {addPostActionCreator, profileReducer, setUserProfile, setStatus} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer, sendMessageActionCreator} from "./dialogs-reducer";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleFollowingProgress,
    usersReducer, followSuccessful, unfollowSuccessful
} from "./users-reducer";
import {authReducer, setUserData} from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer, stopSubmit} from "redux-form";
import {appReducer, initializedSuccess} from "./app-reducer";


export type ActionsTypes = ReturnType<typeof initializedSuccess> |
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof sendMessageActionCreator> |
    ReturnType<typeof followSuccessful> | ReturnType<typeof unfollowSuccessful> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile> | ReturnType<typeof setUserData> |
    ReturnType<typeof toggleFollowingProgress> | ReturnType<typeof setStatus>
    // | ReturnType<typeof stopSubmit>

let rootReducer = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk))
export type ReduxStoreType = typeof store

export default store