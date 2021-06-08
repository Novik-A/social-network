import {ActionsTypes} from "./redux-store";
import {authAPI} from "../api/api";
import {ThunkType} from "./users-reducer";

const SET_USER_DATA = 'auth/SET_USER_DATA'

const initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

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

// actions
export const setAuthUserData = (id: number = 0, email: string = '', login: string = '', isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
}) as const

// thunks
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    }
export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(0, '', '', false))
    }
}

// types
export type InitialStateUsersType = typeof initialState
