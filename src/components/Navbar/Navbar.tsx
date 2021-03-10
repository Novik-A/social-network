import React from "react";
import s from './Navbar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";
import {NavbarItemType} from "../../App";

type NavbarPropsType = {
    sidebar: Array<NavbarItemType>
}

export function Navbar(props: NavbarPropsType) {
    let sidebarElements = props.sidebar.map(s => <NavbarItem id={s.id} address={s.address} name={s.name}  />)
    return (
        <nav className={s.navbar}>
            {sidebarElements}
        </nav>
    )
}
