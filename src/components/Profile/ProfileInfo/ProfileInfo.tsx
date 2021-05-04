import React from "react";
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/avatar.png";
import {ProfileStatus} from "./ProfileStatus";


export const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<img className={s.bg} src={"https://i.pinimg.com/originals/fd/ba/44/fdba444cffb79e04129e80a43e9d0f34.jpg"} alt=""/>*/}
            <div className={s.description}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}


