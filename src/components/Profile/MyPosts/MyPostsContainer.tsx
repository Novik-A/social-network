import React, {ChangeEvent} from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../App";

export const MyPostsContainer = (props: StoreType) => {
    const state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updatePostActionCreator(e))
    }
    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    )
}