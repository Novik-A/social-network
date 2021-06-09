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
    portionSize: number
}

export const Users: React.FC<UsersPropsType> = ({pageSize, totalUsersCount, currentPage, onPageChanged, portionSize, ...props}) => {
    return <div>
        <Pagination pageSize={pageSize}
                    totalItemsCount={totalUsersCount}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    portionSize={portionSize}/>
        {props.users.map(u => <User user={u}
                                    followingInProgress={props.followingInProgress}
                                    follow={props.follow}
                                    unfollow={props.unfollow}
                                    key={u.id}/>
        )}
    </div>
}