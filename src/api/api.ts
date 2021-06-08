import axios from "axios";

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
    }
}

export const authAPI = {
    me () {
        return instance.get<ResponseType>(`auth/me`)
    },
    login (email: string, password: string, rememberMe = false) {
        return instance.post<ResponseType>(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete<ResponseType>(`auth/login`)
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