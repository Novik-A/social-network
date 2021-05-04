import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '27b77817-f998-4da4-82b0-e610c45e128c'
    }
})

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

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser (userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },
    unfollowUser (userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
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
            .then(response => {
                debugger
                return response.data
            })
    }
}

export const authAPI = {
    me () {
        return instance.get<ResponseType>(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}
