import React, {lazy, Suspense} from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import store, {AppStateType} from "./redux/redux-store";
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
import { Error404 } from './components/common/Error404/Error404';

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
                            <Route path={"/"} exact render={() => <Redirect to={'/profile'}/>}/>
                            <Route path='/dialogs' component={DialogsContainer}/>
                            <Route path='/profile/:userId?' component={ProfileContainer}/>
                            <Route path='/users' component={UsersContainer}/>
                            <Route path='/login' component={Login}/>
                            <Route render={() => <Error404/>}/>
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
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
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

