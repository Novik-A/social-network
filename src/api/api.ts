import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '27b77817-f998-4da4-82b0-e610c45e128c'
    }
})

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser (id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
    unfollowUser (id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}