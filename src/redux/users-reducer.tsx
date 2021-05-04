import {ActionsTypes, AppStateType} from "./redux-store";
import {usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

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
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export type InitialStateUsersType = typeof initialState

export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionsTypes): InitialStateUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u),
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
            case TOGGLE_FOLLOWING_PROGRESS:
                return {
                ...state,
                    // @ts-ignore
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

export const followSuccessful = (userID: number) => ({type: FOLLOW, userID}) as const
export const unfollowSuccessful = (userID: number) => ({type: UNFOLLOW, userID}) as const
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const
export const toggleFollowingProgress = (isFetching: boolean, userID: number) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userID}) as const

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers (currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userID: number): ThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID))
        usersAPI.followUser(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccessful(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        })
    }
}

export const unfollow = (userID: number): ThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID))
        usersAPI.unfollowUser(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccessful(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        })
    }
}
