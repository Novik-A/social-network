import {ActionsTypes} from "./redux-store";

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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}}) as const
