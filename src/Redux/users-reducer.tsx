import {ActionsTypes} from "./redux-store";
import {ChangeEvent} from "react";

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {small: string | null, large: string }
    status: string | null
    followed: boolean
}

const initialState = {
    users: [] as UserType[]
}

export type InitialStateUsersType = typeof initialState

export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionsTypes): InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u),
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u),
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: "FOLLOW", userID}) as const
export const unfollowAC = (userID: number) => ({type: "UNFOLLOW", userID}) as const
export const setUsersAC = (users: UserType[]) => ({type: "SET_USERS", users}) as const
