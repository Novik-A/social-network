import React from 'react';
import {UserType} from "../../redux/users-reducer";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User/User";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: number[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users: React.FC<UsersPropsType> = ({pageSize, totalUsersCount, currentPage, onPageChanged, ...props}) => {
    return <div>
        <Pagination pageSize={pageSize}
                    totalUsersCount={totalUsersCount}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}/>
        {props.users.map(u => <User user={u}
                                    followingInProgress={props.followingInProgress}
                                    follow={props.follow}
                                    unfollow={props.unfollow}
                                    key={u.id}/>
        )}
    </div>
}