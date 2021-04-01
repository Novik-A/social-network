import {ActionsTypes} from "./redux-store";
import {ChangeEvent} from "react";

export type UserType = {
    id: number
    followed: boolean
    avatar: string
    fullName: string
    status: string
    location: {city: string, country: string}
}

const initialState = {
    users: [
        {id: 1, followed: true, avatar: 'https://natelegram.ru/wp-content/uploads/2017/11/anime_art-1-320x320.jpg', fullName: 'Dimych', status: 'Hi, how are you?', location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, followed: false, avatar: 'https://natelegram.ru/wp-content/uploads/2017/11/anime_art-1-320x320.jpg', fullName: 'Victor', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 3, followed: true, avatar: 'https://natelegram.ru/wp-content/uploads/2017/11/anime_art-1-320x320.jpg', fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
    ] as UserType[]
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
