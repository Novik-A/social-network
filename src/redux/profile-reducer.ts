import {ActionsTypes} from "./redux-store";
import {ThunkType} from "./users-reducer";
import {profileAPI} from "../api/api";
import {ProfileDataFormType} from "../components/Profile/ProfileInfo/ProfileDataForm";


const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 5},
        {id: 2, message: 'It\'s my first post', likes: 3},
        {id: 3, message: 'Hello, hello', likes: 10},
    ] as PostType[],
    profile: {
        "aboutMe": '',
        "contacts": {
            "facebook": '',
            "website": null,
            "vk": '',
            "twitter": '',
            "instagram": '',
            "youtube": null,
            "github": '',
            "mainLink": null
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": '',
        "fullName": '',
        "userId": 0,
        "photos": {
            "small": '',
            "large": ''
        }
    },
    status: '==='
}

export const profileReducer = (state: InitialStatePostsType = initialState, action: ActionsTypes): InitialStatePostsType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 17, message: action.newPostText, likes: 1}],
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

// actions
export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText}) as const
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos}) as const

// thunks
export const getUserProfile = (userId: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileDataFormType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id.toString()
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
}

// types
export type PostType = {
    id: number
    message: string
    likes: number
}

export type InitialStatePostsType = typeof initialState

type PhotosType = {
    "small": string
    "large": string
}