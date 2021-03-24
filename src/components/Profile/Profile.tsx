import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../App";
import {ActionsTypes} from "../../Redux/redux-store";

type ProfilePropsType = {
    profileState: {
        posts: Array<PostType>
        newPostText: string
    }
    dispatch: (action: ActionsTypes) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.profileState.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profileState.newPostText}
            />
        </div>
    )
}