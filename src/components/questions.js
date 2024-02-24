import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Questions() {
    const questions = [
        { question: 'What is the Leap Advantage - CWRU Pathway Program?', id: '1' },
        { question: 'What are the eligibility requirements for this program?', id: '2' },
        { question: 'What are the English proficiency and other requirements for this program?', id: '3' },
        { question: 'What is the deadline for the CWRU MS in Mechanical Engineering program?', id: '4' },
        { question: 'Are there any scholarships or assistantships available for this program?', id: '5' },
        { question: 'Does CWRU accept a 15-year education from India?', id: '6' },
    ];

    return (
        <div className='w-full flex flex-col items-center align-middle justify-center mx-auto mt-16 bg-rgba-off-blue'>
            <div className="font-bold text-3xl mt-8 text-rgba-dark-blue">Got questions? Let&apos;s connect!</div>
            <div className='w-4/5 flex flex-col h-fit mb-16 mt-8'>
                {questions.map((question) => (
                    <div key={question.id} className='w-full m-1 flex justify-between py-5 pb-5 px-5 rounded items-center bg-rgba-white border-bottom-custom'>
                        <div className='flex flex-wrap text-rgba-dark-blue font-bold text-lg w-4/5'>{question.question}</div>
                        <div><AddCircleIcon style={{color:"rgba(36, 24, 72, 1)", fontSize:"48px"}}  /></div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Questions;
