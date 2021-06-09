import {ActionsTypes, AppStateType} from "./redux-store";
import {usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS'

const initialState = {
    users: [] as UserType[],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize: 10,
    isFetching: true,
    followingInProgress: [] as number[]
}

export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionsTypes): InitialStateUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u),
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
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

// actions
export const followSuccessful = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowSuccessful = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
}) as const

// thunks
export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    const response = await usersAPI.requestUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUsersCount(response.data.totalCount))
}
export const follow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    const response = await usersAPI.followUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(followSuccessful(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    const response = await usersAPI.unfollowUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccessful(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

// types
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: string | null, large: string }
    status: string | null
    followed: boolean
}
export type InitialStateUsersType = typeof initialState
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>