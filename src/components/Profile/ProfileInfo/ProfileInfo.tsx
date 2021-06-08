import React from "react";
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/avatar.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


export const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.description}>
                <img src={profile.photos.large !== null ? profile.photos.large : userPhoto} alt={'Avatar'}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}


