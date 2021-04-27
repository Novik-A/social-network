import {ActionsTypes} from "./redux-store";
import {ChangeEvent} from "react";

type DialogItemType = {
    id: number
    name: string
    avatar: string
}
type MessageType = {
    id: number
    message: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', avatar: 'https://image.freepik.com/free-vector/samurai-esports-logo-for-your-team_116205-81.jpg'},
        {id: 2, name: 'Victor', avatar: 'https://www.artmajeur.com/medias/standard/k/o/koldin-84/artwork/9533635_alone-anime-anime-art-anime-boy-favim-com-1898320.jpg'},
        {id: 3, name: 'Valera', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3731867/pub_5f087e01d20c9b4c4ae96672_5f0c5edea04dd3125fdb5c13/scale_1200'},
        {id: 4, name: 'Sveta', avatar: 'https://natelegram.ru/wp-content/uploads/2017/11/anime_art-1-320x320.jpg'},
        {id: 5, name: 'Sasha', avatar: 'https://stezor-img-res.s3.eu-central-1.amazonaws.com/400x0/9dd99de0-75cb-43f1-a50c-d3082022e2a8'},
        {id: 6, name: 'Ignat', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUQOrSKlcwHsHyblQprAvdzlMc0eQa2RLoQ&usqp=CAU'}
    ] as DialogItemType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'You are understand?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'It\'s my first post'},
        {id: 6, message: 'Hello'},
        {id: 7, message: 'Good night'},
    ] as MessageType[],
    newMessageBody: ''
}

export type InitialStateDialogsType = typeof initialState

export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: ActionsTypes): InitialStateDialogsType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {...state, newMessageBody: action.body}
        case "SEND-MESSAGE":
            const body = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: ''
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: "SEND-MESSAGE"}) as const
export const updateMessageActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => (
    {type: "UPDATE-NEW-MESSAGE-BODY", body: (e.currentTarget.value)}
) as const