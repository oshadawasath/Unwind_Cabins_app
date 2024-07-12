import React from 'react';
import "./QuestionPage.css";
import QuestionComponent from '../components/QuestionComponent';

export default function QuestionPage() {
    const questions = [
        {
            topic: "About unvined cabins",
            question1: ". How long have being buisnnes?",
            question2: ". Why did you start this journey?",
            bttnText: "About our cabins"
        },
        {
            topic: "Tell me more about the cabin",
            question1: ". What do I need to bring",
            question2: ". How  do I get to the cabin",
            bttnText: "Tell me more about cabin"
        },
        {
            topic: "Pets,familly & firends",
            question1: ". Please tell me I can bring my dog",
            question2: ". How many pepole do you cabins sleep?",
            bttnText: "Pets, famliy & friends"
        }
    ];

    return (
        <div className='question_main'>
            <div className='question_second'>
                <h1>Frequently Asked Questions</h1>
                {questions.map((question, index) => (
                    <QuestionComponent
                        key={index} 
                        topic={question.topic}
                        question1={question.question1}
                        question2={question.question2}
                        bttnText={question.bttnText}
                    />
                ))}
                <p className='question_bottom_head'>Still have questions?</p>
                <p className='question_bottom_text'>If you still have questions, contact a member of the team on live chat and we'd be more than happy to help.</p>
            </div>
        </div>
    )
}
