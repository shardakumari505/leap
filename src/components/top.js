import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import Box from '@mui/material/Box';
import Image from 'next/image';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

function Top() {
    return (
        <div     
            className='w-full font-inter'       
            style={{position: 'relative',
            height: '100vh', // Adjust the height based on your design
            width:"100%",
        marginTop:"10vh"}}
        >
            {/* Background Image */}
            <div
                style={{
                    backgroundImage: `url('/bg.png')`, // Set the image URL here
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    objectFit: 'cover',
                    zIndex: 1,
                }}
            ></div>

            {/* Overlay */}
            <div
                style={{
                    background: 'linear-gradient(to right, rgba(19, 15, 42, 0.8), rgba(0, 0, 0, 0)), url("/bg.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                }}
            ></div>

            <div className='flex flex-wrap w-4/5 mx-auto md:justify-between sm:items-center sm:justify-center md:items-start'>

                <div style={{ position: "relative", zIndex: "3" }} className='flex flex-col items-center md:justify-center md:items-start'>

                    <div style={{ position: "relative", zIndex: "3", borderRadius: "30px", border: "2px solid linear-gradient(to bottom, rgba(146, 181, 134, 1), rgba(255, 255, 255, 0)) 1", }} className='z-8 flex justify-center align-middle text-center items-center bg-rgba-off-white-green w-fit py-4 px-8 rounded-full mt-20 button-border-shadow'>
                        <div className=''><CardMembershipIcon style={{ height: "20px", width: "20px", color: "rgba(51, 46, 191, 1)", marginRight: "10px" }} /></div>
                        <div className='text-base font-semibold text-rgba-dark-green flex align-middle text-center justify-center'>₹17L Scholarship Assured* </div>
                    </div>

                    <div className='text-5xl font-bold text-rgba-white mt-10 mb-5 flex text-center md:text-left'>Masters in <br></br>Computer Science</div>
                    <div className='flex my-2 items-center'>
                        <Image
                            src="/correct.png"
                            alt="Example Image"
                            width={30}
                            height={10}
                            style={{height: "20px", width:"20px"}}
                        />
                        <div className='font-semibold text-lg text-rgba-white ml-3'>No IELTS or GRE* required</div>
                    </div>
                    <div className='flex my-2 items-center'>
                        <Image
                            src="/correct.png"
                            alt="Example Image"
                            width={30}
                            height={10}
                            style={{height: "20px", width:"20px"}}
                        />
                        <div className='font-semibold text-lg text-rgba-white ml-3'>3 year work Visa</div>
                    </div>
                    <div className='flex my-2 items-center'>
                        <Image
                            src="/correct.png"
                            alt="Example Image"
                            width={30}
                            height={10}
                            style={{height: "20px", width:"20px"}}
                        />
                        <div className='font-semibold text-lg text-rgba-white ml-3'>High admit chance with Leap</div>
                    </div>

                    <div className='button-rgba-blue w-fit p-5 text-base font-bold text-rgba-white rounded-lg mt-20'>Check Your Admit Eligibility</div>

                </div>

                <div style={{ zIndex: "4" }} className='w-full md:w-fit flex mt-20 bg-rgba-white h-fit p-5 rounded-xl md:mx-0 sm:mx-auto justify-center'>
                    <Image
                        src="/unilogo.png"
                        alt="Example Image"
                        width={200}
                        height={100}
                    />
                </div>

                <div style={{ borderRadius: "12px", position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%) translateY(50%)", zIndex: 2, boxShadow: "4px 8px 8px rgba(67, 54, 149, 0.08)" }} className='bg-rgba-white w-fit h-fit flex p-5'>
                    <div className='flex flex-col justify-center align-middle items-center text-center px-5'>
                        <div className='font-bold text-3xl text-rgba-gray'>#1</div>
                        <div className='font-medium text-sm text-rgba-gray'>Best Engineering Jobs</div>
                    </div>
                    <div className='flex flex-col justify-center align-middle items-center text-center px-5'>
                        <div className='font-bold text-3xl text-rgba-gray'>94%</div>
                        <div className='font-medium text-sm text-rgba-gray'>Placement Rate</div>
                    </div>
                    <div className='flex flex-col justify-center align-middle items-center text-center px-5'>
                        <div className='font-bold text-3xl text-rgba-gray'>$96K</div>
                        <div className='font-medium text-sm text-rgba-gray'>Average Salary</div>
                    </div>
                </div>

            </div>

        </div>
    );
}


export default Top;
