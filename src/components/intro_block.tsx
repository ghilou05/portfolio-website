import { useState } from "react";
import React from 'react'

const intro_block:React.FC = () => {


    return (
        <div className="intro-block">
            <div className="intro-block-image">
                <img src="/BOByur.jpg"></img>
            </div>
            <div className="intro-block-text-wrapper">
                <div className="intro-block-text-wrapper-title">Who is Ghiles Bouaraba?</div>
                <div className="intro-block-text-wrapper-description">Student, web developer, game creator</div>
            </div>
        </div>
    )
}

export default intro_block;