import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import store, {AppStateType, ReduxStoreType} from "./redux/redux-store";
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const Login = lazy(() => import('./components/Login/Login'));

class App extends React.Component<AppContainerPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='App-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route
                                path='/dialogs'
                                component={DialogsContainer}
                            />
                            <Route
                                path='/profile/:userId?'
                                component={ProfileContainer}
                            />
                            <Route
                                path='/users'
                                component={UsersContainer}
                            />
                            <Route
                                path='/login'
                                component={Login}
                            />
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)

export const AppForTest: React.FC = () => {
    return <>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </>
}

// types
export type AppContainerPropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}

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
