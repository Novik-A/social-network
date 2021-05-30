import {ActionsTypes} from "./redux-store";

export type NavbarItemType = {
    id: number
    address: string
    name: string
}

const initialState: NavbarItemType[] = [
    {id: 1, address: 'profile', name: 'Profile'},
    {id: 2, address: 'dialogs', name: 'Messages'},
    {id: 3, address: 'news', name: 'News'},
    {id: 4, address: 'music', name: 'Music'},
    {id: 5, address: 'settings', name: 'Settings'},
    {id: 6, address: 'friends', name: 'Friends'},
    {id: 7, address: 'users', name: 'Users'},
    {id: 8, address: 'login', name: 'Login'},
]

export const sidebarReducer = (state: NavbarItemType[] = initialState, action: ActionsTypes): NavbarItemType[] => {
    return state
}