import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import { Layout } from "../app/layout";
import Image from 'next/image';


function Navbar() {
    return (
        <div className='w-4/5 flex justify-between mx-auto items-center align-middle py-3'>
            <div className=''><Image
                src="/leapadvantagelogo.png"
                alt="Example Image"
                width={200}
                height={100}
            /></div>
            <button style={{ border: "2px solid rgba(68, 62, 255, 1)" }} className='w-40 h-12 px-4 flex text-center items-center justify-center text-md rounded font-bold button-text-rgba-blue'>For Masters</button>
        </div>
    );
}

Navbar.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
);

export default Navbar;