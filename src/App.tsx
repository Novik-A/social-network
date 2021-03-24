import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes} from "./Redux/redux-store";


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
    newMessageBody: string
}
export type StateType = {
    sidebarReducer: Array<NavbarItemType>
    profileReducer: PostsType
    dialogsReducer: DialogsType
}
type AppPropsType = {
    state: {
        sidebarReducer: Array<NavbarItemType>
        profileReducer: PostsType
        dialogsReducer: DialogsType
    }
    dispatch: (action: ActionsTypes) => void
}

export function App(props: AppPropsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar sidebar={props.state.sidebarReducer}/>
            <div className='App-content'>
                <Route
                    path='/dialogs'
                    render={() => <Dialogs dialogsState={props.state.dialogsReducer}
                                           dispatch={props.dispatch} />}
                />
                <Route
                    path='/profile'
                    render={() => <Profile
                        profileState={props.state.profileReducer}
                        dispatch={props.dispatch} />}
                />
                {/*<Route path='/news' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
                {/*<Route path='/music' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
                {/*<Route path='/settings' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
                {/*<Route path='/friends' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
            </div>
        </div>
    );
}

