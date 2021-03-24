import {PostsType, PostType} from "../App";
import {ActionsTypes} from "./redux-store";
import {ChangeEvent} from "react";

const initialState: PostsType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 5},
        {id: 2, message: 'It\'s my first post', likes: 3},
        {id: 3, message: 'Hello, hello', likes: 10},
    ],
    newPostText: 'IT'
}

export const profileReducer = (state: PostsType = initialState, action: ActionsTypes): PostsType => {
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