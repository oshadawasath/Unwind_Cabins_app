import React from 'react';
import "./QuestionComponent.css";
import { LuArrowRightCircle } from "react-icons/lu";

export default function QuestionComponent({ topic, question1, question2, bttnText }) {
    const handleClick = () => {
        console.log("Clicked");
    };

    return (
        <div className='question_com_main'>
            <div className='question_com_left'>
                <p className='question_head_P'>{topic}</p>
                <p className='question_p'>{question1}</p>
                <p className='question_p'>{question2}</p>
            </div>
            <div className='question_com_right' onClick={handleClick}>
                <p className='question_btn_text'>{bttnText}</p>
                <LuArrowRightCircle className='LuArrowRight'/>
            </div>
        </div>
    )
}
