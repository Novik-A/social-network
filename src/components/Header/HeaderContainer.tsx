import React from "react";
import {Header} from "./Header";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import axios from "axios";
import {setUserData} from "../../Redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchPropsType = {
    setUserData: (id: number, email: string, login: string) => void
}
export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        }).then(response => {
            if (response.data.resulttCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setUserData(id, email, login)
            }
        })
    }
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

export default connect (mapStateToProps, {setUserData}) (HeaderContainer)
