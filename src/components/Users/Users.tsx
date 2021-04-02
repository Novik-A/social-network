import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../Redux/users-reducer";
import axios from "axios";
import userPhoto from '../../assets/images/avatar.png'

type UsersPropsType = {
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>
        props.setUsers(response.data.items))
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <div className={s.avatar}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Follow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Unfollow</button>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    {/*<div>*/}
                    {/*    <div>{u.location.country}</div>*/}
                    {/*    <div>{u.location.city}</div>*/}
                    {/*</div>*/}
                </div>
            </div>)}
        </div>
    )
}