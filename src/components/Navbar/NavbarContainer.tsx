import React from "react";
import {connect} from "react-redux";
import { Dispatch } from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {Navbar} from "./Navbar";
import {NavbarItemType} from "../../Redux/sidebar-reducer";

type MapStatePropsType = {
    sidebar:  NavbarItemType[]
}
type MapDispatchPropsType = {

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {

        }
}

export const NavbarContainer = connect (mapStateToProps, mapDispatchToProps) (Navbar)