import React from "react";
import s from './Navbar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";
import {NavbarItemType} from "../../App";

type NavbarPropsType = {
    sidebar: Array<NavbarItemType>
}

export const Navbar: React.FC<NavbarPropsType> = (props) => {
    const sidebarElements = props.sidebar.map(s => <NavbarItem id={s.id}
                                                             address={s.address}
                                                             name={s.name}
                                                             key={s.id} />)
    return (
        <nav className={s.navbar}>
            {sidebarElements}
        </nav>
    )
}
