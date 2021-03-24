import {NavbarItemType} from "../App";
import {ActionsTypes} from "./redux-store";

const initialState: NavbarItemType[] = [
    {id: 1, address: 'profile', name: 'Profile'},
    {id: 2, address: 'dialogs', name: 'Messages'},
    {id: 3, address: 'news', name: 'News'},
    {id: 4, address: 'music', name: 'Music'},
    {id: 5, address: 'settings', name: 'Settings'},
    {id: 6, address: 'friends', name: 'Friends'},
]

export const sidebarReducer = (state: NavbarItemType[] = initialState, action: ActionsTypes) => {
    return state

}