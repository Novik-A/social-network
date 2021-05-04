import {ActionsTypes} from "./redux-store";
import {ChangeEvent} from "react";
import {ThunkType} from "./users-reducer";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type PostType = {
    id: number
    message: string
    likes: number
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 5},
        {id: 2, message: 'It\'s my first post', likes: 3},
        {id: 3, message: 'Hello, hello', likes: 10},
    ] as PostType[],
    newPostText: 'IT',
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
    status: '555'
}

export type InitialStatePostsType = typeof initialState

export const profileReducer = (state: InitialStatePostsType = initialState, action: ActionsTypes): InitialStatePostsType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 17, message: state.newPostText, likes: 1}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const
export const updatePostActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => (
    {type: UPDATE_NEW_POST_TEXT, newText: (e.currentTarget.value)}
) as const

export const getUserProfile = (userId: string): ThunkType => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(res => {
            dispatch(setUserProfile(res.data))
        })
    }
}
export const getStatus = (userId: string): ThunkType => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(res => {
            dispatch(setStatus(res.data))
        })
    }
}
export const updateStatus = (status: string): ThunkType => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}
