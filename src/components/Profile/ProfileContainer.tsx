import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import { setUserProfile } from "../../Redux/profile-reducer";

type ProfileContainerPropsType = {
    profile: any
    setUserProfile: (profile: any) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }
    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

type MapStatePropsType =
    {
        profile: any
    }
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)