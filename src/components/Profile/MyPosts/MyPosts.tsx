import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../App";
import {AddPostActionType, NewPostActionType} from "../../../Redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: (action: AddPostActionType | NewPostActionType) => void
    newPostText: string
}
export function MyPosts(props: MyPostsPropsType) {
    const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likes={p.likes}/>)

    const addPost = () => {
            props.dispatch({type: "ADD-POST"})
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: (e.currentTarget.value)})
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