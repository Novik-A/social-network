import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../App";

type ProfilePropsType = {
    profileState: {
        posts: Array<PostType>
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.profileState.posts}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.profileState.newPostText}
            />
        </div>
    )
}