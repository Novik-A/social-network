import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../Redux/users-reducer";

type UsersPropsType = {
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <div className={s.avatar}>
                        <img src={u.avatar}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}