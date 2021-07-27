import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../api/api";

export type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: string | File) => void
}

export const Profile: React.FC<ProfilePropsType> = ({isOwner,profile, status, updateStatus, savePhoto}) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         savePhoto={savePhoto}/>
            <MyPostsContainer />
        </div>
    )
}