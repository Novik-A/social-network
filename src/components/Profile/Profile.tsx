import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../api/api";
import {ProfileDataFormType} from "./ProfileInfo/ProfileDataForm";

export type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: string | File) => void
    saveProfile: (profile: ProfileDataFormType) => Promise<any>
}

export const Profile: React.FC<ProfilePropsType> = ({isOwner,profile, status, updateStatus, savePhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}/>
            <MyPostsContainer />
        </div>
    )
}