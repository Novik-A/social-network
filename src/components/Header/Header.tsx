import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'
import { HeaderContainerPropsType } from "./HeaderContainer";

export const Header = (props: HeaderContainerPropsType) => {
    return  <header className={s.header}>
        <img src={'https://clipartstation.com/wp-content/uploads/2018/10/logo-clipart-png.png'}
             className={s.logo} alt="logo"/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>

}