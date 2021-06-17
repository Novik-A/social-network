import {applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {addPostAC, profileReducer, setUserProfile, setStatus, savePhotoSuccess} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer, sendMessageAC} from "./dialogs-reducer";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleFollowingProgress,
    usersReducer, followSuccessful, unfollowSuccessful
} from "./users-reducer";
import {authReducer, setAuthUserData} from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer, initializedSuccess} from "./app-reducer";


export type ActionsTypes = ReturnType<typeof initializedSuccess> |
    ReturnType<typeof addPostAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof followSuccessful> | ReturnType<typeof unfollowSuccessful> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData> |
    ReturnType<typeof toggleFollowingProgress> | ReturnType<typeof setStatus> |
    ReturnType<typeof savePhotoSuccess>

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

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export type ReduxStoreType = typeof store

export default store