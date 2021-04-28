import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {ReduxStoreType} from "./redux/redux-store";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


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
type PostsType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type StateType = {
    sidebar: Array<NavbarItemType>
    profilePage: PostsType
    dialogsPage: DialogsType
}

export type StoreType = {
    store: ReduxStoreType
}

export function App() {
    return (
        <div className="App">
            <HeaderContainer />
            <NavbarContainer />
            <div className='App-content'>
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer />}
                />
                <Route
                    path='/profile/:userId?'
                    render={() => <ProfileContainer />}
                />
                <Route
                    path='/users'
                    render={() => <UsersContainer />}
                />
                <Route
                    path='/login'
                    render={() => <Login />}
                />
                {/*<Route path='/news' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
                {/*<Route path='/music' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
                {/*<Route path='/settings' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
                {/*<Route path='/friends' render={() => <Profile profileState={props.state.profilePage} addPost={props.addPost}/>}/>*/}
            </div>
        </div>
    );
}

