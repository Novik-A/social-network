import {ActionsTypes} from "./redux-store";
import {ChangeEvent} from "react";

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
    newPostText: 'IT'
}

export type InitialStatePostsType = typeof initialState

export const profileReducer = (state: InitialStatePostsType = initialState, action: ActionsTypes): InitialStatePostsType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: 17,
                message: state.newPostText,
                likes: 1
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"}) as const
export const updatePostActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => (
    {type: "UPDATE-NEW-POST-TEXT", newText: (e.currentTarget.value)}
) as const