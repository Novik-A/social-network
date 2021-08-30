import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/avatar.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileType} from "../../../api/api";
import ProfileDataForm, {ProfileDataFormType} from "./ProfileDataForm";

type ContactPropsType = {
    contactTitle: string
    contactValue: any
}
type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileInfo: React.FC<ProfilePropsType> = ({isOwner,profile, status, updateStatus, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileDataFormType) => {
        saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div>
            <div className={s.description}>
                <img className={s.mainPhoto} src={profile.photos.large || userPhoto} alt={'Avatar'}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            // @ts-ignore
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
