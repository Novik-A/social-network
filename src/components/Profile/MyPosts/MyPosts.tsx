import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../App";
import {ActionsTypes} from "../../../Redux/redux-store";
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profile-reducer";


type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}
export function MyPosts(props: MyPostsPropsType) {
    const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likes={p.likes}/>)

    const addPost = () => {
            props.dispatch(addPostActionCreator())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(updatePostActionCreator(e))
    }
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={onPostChange}
                              onKeyPress={ (e) => {if (e.key === 'Enter') {addPost()}}}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
)
}