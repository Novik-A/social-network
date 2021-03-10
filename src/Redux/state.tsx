import React from 'react';
import {PostType, StateType} from "../App";

let rerenderEntireTree = (state: StateType) => {

}

const state = {
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
}

export const addPost = () => {
    const newPost: PostType = {
        id: 17,
        message: state.profilePage.newPostText,
        likes: 1}
    state.profilePage.posts.push (newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer
}

export default state