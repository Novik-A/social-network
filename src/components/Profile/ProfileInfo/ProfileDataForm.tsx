import React from "react";
import s from './ProfileInfo.module.css';
// import styles from '../common/FormsControls/FormsControls.module.css';
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../api/api";

export type ProfileDataFormType ={
    fullName: string
    lookingForAJobDescription: string
    aboutMe: string
    lookingForAJob: boolean
    "contacts": {
        "facebook": string
        "website": null
        "vk": string
        "twitter": string
        "instagram": string
        "youtube": null
        "github": string
        "mainLink": null
    }
}
type ProfilePreviousValuesType = {
    profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType, ProfilePreviousValuesType> & ProfilePreviousValuesType> = ({
                                                                                                                                      handleSubmit,
                                                                                                                                      error,
                                                                                                                                      profile}) => {

    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div style={{border:'red 1px solid', padding: '5px', color: 'red'}}>
            {error}
        </div>}
        <div>
            <b>Full name</b>: <Field placeholder={'Full name'}
                                     name={'fullName'}
                                     component={Input}/>
        </div>
        <div>
            <b>Looking for a job</b>: <Field type={'checkbox'}
                                             name={'lookingForAJob'}
                                             component={Input}/>
        </div>
        <div>
            <b>My professional skills</b>: <Field placeholder={'My professional skills'}
                                                  name={'lookingForAJobDescription'}
                                                  component={Textarea}/>
        </div>
        <div>
            <b>About me</b>: <Field placeholder={'About me'}
                                    name={'aboutMe'}
                                    component={Textarea}/>
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}</b>: <Field placeholder={key}
                                     name={'contacts.' + key}
                                     component={Input}/>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm<ProfileDataFormType, ProfilePreviousValuesType>({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataReduxForm