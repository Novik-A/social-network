import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter } from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {ProfileType} from "../../api/api";
import {ProfileDataFormType} from "./ProfileInfo/ProfileDataForm";

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile () {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId.toString()
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


// types
type MapStatePropsType =
    {
        profile: ProfileType
        status: string
        authorizedUserId: number
        isAuth: boolean
    }
type MapDispatchPropsType =
    {
        getUserProfile: (userId: string) => void
        getStatus: (userId: string) => void
        updateStatus: (status: string) => void
        savePhoto: (file: string | File) => void
        saveProfile: (profile: ProfileDataFormType) => Promise<any>
    }
type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType