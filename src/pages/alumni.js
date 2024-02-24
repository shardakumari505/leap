import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import { Layout } from "../app/layout";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Image from 'next/image';

function Alumni() {
    const alumnis = [
        {
            src: '/PaulBuchheit.png', name: 'Paul Buchheit', design: "Inventor of Gmail", desc: `Google employee #23, inventor of Gmail and now an angel investor.
        Credited with suggesting Google's now-famous motto, “Don't be evil.” `, id: '1'
        },
        { src: '/LarryHornbeck.png', name: 'Larry Hornbeck', design: "Physics", desc: `Academy Award-National Academy of Engineering member and recipient of an Academy Award of Merit for innovationswinning inventor. `, id: '2' },
        { src: '/FelipeGomezDelCampo.png', name: 'Felipe Gomez del Campo', design: "Aerospace Engineering", desc: `CEO of FGC Plasma Solutions who was named to Forbes 30 Under 30 and honored by President Barack Obama as a global entrepreneur.`, id: '3' },
    ];

    return (
        <div className='w-4/5 flex flex-col items-center align-middle justify-center mx-auto my-8'>
            <div className='font-bold text-3xl mt-8'>Notable Alumni</div>
            <div className='flex h-fit mb-8 mt-8'>
                {alumnis.map((alumni) => (
                    <div>
                        <div key={alumni.id} className='w-64 h-96 m-4 bg-rgba-off-blue flex flex-col text-left rounded-lg' style={{ border: '1px solid rgba(227, 226, 255, 1)', backgroundImage: `url(${alumni.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', zIndex: 2, position: "relative" }}>
                            {/* Add other content related to alumni */}
                            <div className='w-64 h-60 rounded-b-lg flex flex-col'
                                style={{
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0E0624 49.48%, #1B0950 100%)',
                                    // background: "pink",
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    position: 'absolute',
                                    bottom: 0,
                                    zIndex: 3,
                                }}
                            >
                                <div className='flex flex-col items-center text-center' style={{position :"absolute", bottom: 0}}>
                                    <div className='text-rgba-white font-bold text-xl font-inter' style={{ zIndex: 4 }}>{alumni.name}</div>
                                    <div className='text-rgba-white font-bold text-sm py-1' style={{ zIndex: 4 }}>{alumni.design}</div>
                                    <div className='text-rgba-overflow-gray text-sm font-normal pt-2 pb-4 px-2 font-inter' style={{ zIndex: 4 }}>{alumni.desc}</div>
                                </div>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
            <button className='button-rgba-blue font-bold text-base rounded-lg h-14 w-80 text-rgba-white'>Check Admit Eligibility</button>
        </div>
    );
}

Alumni.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
);

export default Alumni;
