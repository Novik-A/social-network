import React from "react";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect (mapStateToProps, {logout}) (HeaderContainer)

// types
type MapStatePropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchPropsType = {
    logout: () => void
}
export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType