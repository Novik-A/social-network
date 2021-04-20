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
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
                users: action.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userID: number) => ({type: "FOLLOW", userID}) as const
export const unfollow = (userID: number) => ({type: "UNFOLLOW", userID}) as const
export const setUsers = (users: UserType[]) => ({type: "SET_USERS", users}) as const
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching}) as const
