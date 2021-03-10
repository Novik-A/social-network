import React from "react";
import s from './../Navbar.module.css'
import {NavLink} from "react-router-dom";
import {NavbarItemType} from "../../../App";


export function NavbarItem(props: NavbarItemType) {
    return (
        <div className={s.item}>
            <NavLink to={`/${props.address}`} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}
