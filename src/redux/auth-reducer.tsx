import {ActionsTypes} from "./redux-store";
import {authAPI} from "../api/api";
import {ThunkType} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA'


const initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export type InitialStateUsersType = typeof initialState

export const authReducer = (state: InitialStateUsersType = initialState, action: ActionsTypes): InitialStateUsersType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setUserData = (id: number = 0, email: string = '', login: string = '', isAuth: boolean) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}}) as const

export const getAuthUserData = (): ThunkType => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
    }
}

export const logout = (): ThunkType => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(0, '', '', false))
            }
        })
    }
}

