import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import Divider from '@mui/material/Divider';

function Feedback() {
    const feedbacks = [
        { feedback: 'I valued working with professors on interesting projects for my final project requirement. Being given the opportunity to build them from scratch and have them serve useful purposes made the work fulfilling while also emulating real-world software development.', name: 'Mohammad D', college: 'Case Western Reserve University', id: '1' },
        { feedback: 'The Career Management Center of CSU is a great resource. Fort Collins is a beautiful city, and CSU has an amazing campus.', name: 'Winston K', college: 'Case Western Reserve University', id: '2' },
        { feedback: 'Going to CWRU gives you exposure to so many opportunities. The career centre mentored me through the interview process, and I already have a job at EY after graduation.', name: 'Daniel O', college: 'Case Western Reserve University', id: '3' },
    ];

    return (
        <div className='w-4/5 flex flex-col items-center align-middle justify-center my-8 mx-auto'>
            <div className='font-bold text-3xl mt-8'>What are students saying</div>
            <div className='w-full flex h-fit mb-16 mt-8 flex-wrap'>
                {feedbacks.map((feedback) => (
                    <div key={feedback.id} className='w-full sm:w-1/4 m-5 bg-rgba-off-blue flex flex-col py-5 pb-5 px-5 text-left rounded-lg mx-auto' style={{ border: '1px solid rgba(227, 226, 255, 1)' }}>
                        <div className='pb-4 text-base font-medium text-rgba-shade-gray text-justify'>{feedback.feedback}</div>
                        <div className='flex-grow' /> {/* Add space between feedback and divider */}
                        <Divider />
                        <div className='pt-4 font-bold text-base text-rgba-gray h-fit'>{feedback.name}</div>
                        <div className='pt-1 text-same font-medium text-rgba-shade-lighter-gray h-fit'>{feedback.college}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Feedback;
