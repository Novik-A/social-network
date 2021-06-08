import React from "react";
import s from "../Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/avatar.png";
import {UserType} from "../../../redux/users-reducer";

type PropsType = {
    user: UserType
    followingInProgress: number[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export const User: React.FC<PropsType> = ({user, ...props}) => {
    return <>
        <div>
            <div className={s.avatar}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={'Avatar'}/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  props.unfollow(user.id)
                              }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  props.follow(user.id)
                              }}>Follow</button>
                }
            </div>
        </div>
        <div>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
        </div>
    </>
}
