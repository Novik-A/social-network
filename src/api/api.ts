import axios from "axios";
import {ProfileDataFormType} from "../components/Profile/ProfileInfo/ProfileDataForm";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'fdde2ff6-05bd-41ac-ad86-490f6bc2a074'
    }
})

export const usersAPI = {
    requestUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    followUser (userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`, {})
    },
    unfollowUser (userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile (userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus (userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus (status: string) {
        return instance.put<ResponseType>(`profile/status`, {status: status})
    },
    savePhoto (photoFile: string) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<PhotoResponseType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile (profile: ProfileDataFormType) {
        return instance.put<ResponseType>(`profile`, profile)
    },
}

export const authAPI = {
    me () {
        return instance.get<ResponseType>(`auth/me`)
    },
    login (email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<ResponseType>(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout () {
        return instance.delete<ResponseType>(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get<CaptchaResponseType>(`security/get-captcha-url`)
    }
}

// types
type ResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        id?: number
        email?: string
        login?: string
    }
    fieldsErrors: [ null |
        {field: string
        error: string}
    ]
}
type PhotoResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        photos: {
            small: string
            large: string
        }
    }
}
type CaptchaResponseType = {
    url: string
}
export type ProfileType = {
    "aboutMe": string
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
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": {
        "small": string
        "large": string
    }
}