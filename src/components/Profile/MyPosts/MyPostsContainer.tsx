import React, {ChangeEvent} from "react";
import {
    addPostActionCreator,
    PostType,
    updatePostActionCreator
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import { Dispatch } from "redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    posts: PostType[]
    newPostText: string
}
type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updatePostActionCreator(e))
        }
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)