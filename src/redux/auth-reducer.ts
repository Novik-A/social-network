import {ActionsTypes} from "./redux-store";
import {authAPI, securityAPI} from "../api/api";
import {ThunkType} from "./users-reducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

const initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: null as string | null
}

export const authReducer = (state: InitialStateUsersType = initialState, action: ActionsTypes): InitialStateUsersType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
}) as const

// thunks
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType =>
    async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
            dispatch(getCaptchaUrlSuccess(null))
        } else {
            if (response.data.fieldsErrors[0] && response.data.fieldsErrors[0].field === 'captcha') {
                dispatch(getCaptchaUrl())
            }
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(0, '', '', false))
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess(response.data.url))

}

// types
export type InitialStateUsersType = typeof initialState
