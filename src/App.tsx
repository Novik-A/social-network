import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
// @ts-ignore
import {BrowserRouter, Route} from "react-router-dom";
import {AddPostActionType, NewPostActionType} from "./Redux/state";


export type NavbarItemType = {
    id: number
    address: string
    name: string
}
export type DialogItemType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likes: number
}
export type PostsType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}
export type StateType = {
        sidebar: Array<NavbarItemType>
        profilePage: PostsType
        dialogsPage: DialogsType
}
type AppPropsType = {
    state: {
        sidebar: Array<NavbarItemType>
        profilePage: PostsType
        dialogsPage: DialogsType
    }
    dispatch: (action: AddPostActionType | NewPostActionType) => void
}

export function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className='App-content'>
                    <Route
                        path='/dialogs'
                        render={() => <Dialogs dialogsState={props.state.dialogsPage}/>}
                    />
                    <Route
                        path='/profile'
                        render={() => <Profile
                            profileState={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}
                    />
                    {/*<Route path='/news' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
                    {/*<Route path='/music' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
                    {/*<Route path='/settings' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
                    {/*<Route path='/friends' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

