import React, { ChangeEvent } from "react";
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/avatar.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


export const ProfileInfo: React.FC<ProfilePropsType> = ({isOwner,profile, status, updateStatus, savePhoto}) => {
    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.description}>
                <img className={s.mainPhoto} src={profile.photos.large || userPhoto} alt={'Avatar'}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}


