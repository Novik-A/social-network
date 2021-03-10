import React from "react";
import s from './Header.module.css'

export function Header() {
    return  <header className={s.header}>
        <img src={'https://clipartstation.com/wp-content/uploads/2018/10/logo-clipart-png.png'}
             className={s.logo} alt="logo"/>
    </header>

}