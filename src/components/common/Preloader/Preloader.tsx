import React from "react";
import preloader from "../../../assets/images/preloader.gif";

export const Preloader = () => {
    return <>
        <img src={preloader} alt={'Loading'}/>
        <div style={{color: 'transparent'}}>/learn react/i</div>
        </>
}