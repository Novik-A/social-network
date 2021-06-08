import {ActionsTypes} from "./redux-store";
import {ThunkType} from "./users-reducer";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateAppType = initialState, action: ActionsTypes): InitialStateAppType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

// actions
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS}) as const

// thunks
export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
         dispatch(initializedSuccess())
    })
}

// types
export type InitialStateAppType = typeof initialState