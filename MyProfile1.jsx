import React, { useState } from "react";
import Style from "./myprofile1.module.css"

const MyProfile1=()=>{

    let[cource,setCource]=useState("WebTech")
    let userName="Mohsin Sayyed"

    let changeState=()=>{
        setCource("React JS")
    }

    return(
        <>
            <div id={Style.card}>
            <h1>My Id Card</h1>
            <p>Bachelor in Computer Engineering</p>
            <br/>
            <p>YOP:2023</p>
            <h3>{userName}</h3>
            <h3>{cource}</h3>
            <button onClick={changeState}>Update Course</button>
            </div>
        </>
    )
}
export default MyProfile1