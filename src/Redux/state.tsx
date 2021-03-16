import React from 'react';
import {PostType, StateType} from "../App";

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    dispatch: (action: AddPostActionType | NewPostActionType) => void
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type NewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

const store: StoreType = {
    _state: {
        sidebar: [
            {id: 1, address: 'profile', name: 'Profile'},
            {id: 2, address: 'dialogs', name: 'Messages'},
            {id: 3, address: 'news', name: 'News'},
            {id: 4, address: 'music', name: 'Music'},
            {id: 5, address: 'settings', name: 'Settings'},
            {id: 6, address: 'friends', name: 'Friends'},
        ],
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 5},
                {id: 2, message: 'It\'s my first post', likes: 3},
                {id: 3, message: 'Hello, hello', likes: 10},
            ],
            newPostText: 'IT'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych', avatar: 'https://mygamehunter.ru/images/thumbnail/86332/550'},
                {id: 2, name: 'Victor', avatar: 'https://www.artmajeur.com/medias/standard/k/o/koldin-84/artwork/9533635_alone-anime-anime-art-anime-boy-favim-com-1898320.jpg'},
                {id: 3, name: 'Valera', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3731867/pub_5f087e01d20c9b4c4ae96672_5f0c5edea04dd3125fdb5c13/scale_1200'},
                {id: 4, name: 'Sveta', avatar: 'https://natelegram.ru/wp-content/uploads/2017/11/anime_art-1-320x320.jpg'},
                {id: 5, name: 'Sasha', avatar: 'https://stezor-img-res.s3.eu-central-1.amazonaws.com/400x0/9dd99de0-75cb-43f1-a50c-d3082022e2a8'},
                {id: 6, name: 'Ignat', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUQOrSKlcwHsHyblQprAvdzlMc0eQa2RLoQ&usqp=CAU'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'You are understand?'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'It\'s my first post'},
                {id: 6, message: 'Hello'},
                {id: 7, message: 'Gud night'},
            ]
        }
    },
    getState () {
        return this._state
    },
    _callSubscriber (state: StateType) {

    },
    subscribe (observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    addPost () {
        const newPost: PostType = {
            id: 17,
            message: this._state.profilePage.newPostText,
            likes: 1}
        this._state.profilePage.posts.push (newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 17,
                message: this._state.profilePage.newPostText,
                likes: 1}
            this._state.profilePage.posts.push (newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }

}

export default store