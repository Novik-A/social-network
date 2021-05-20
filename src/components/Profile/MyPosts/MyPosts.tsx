import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../App";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
    }
export const MyPosts: React.FC<MyPostsPropsType> = props => {
    const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likes={p.likes}/>)

    const addPost = (formData: FormDataType) => {
            props.addPost(formData.newPostText)
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <AddPostTextFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
)
}

type FormDataType = {
    newPostText: string
}

const AddPostTextForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea'
                       name='newPostText'
                       placeholder='Enter your post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostTextFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddPostTextForm)