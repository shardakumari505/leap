import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import { Layout } from "../app/layout";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Image from 'next/image';


function Main() {
    return (
        <>
            <div className='flex flex-col justify-center align-middle text-center my-4'>
                <div className='text-3xl font-bold my-8'>Fill this form to check your eligibility</div>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            width: '80%',
                            height: "auto",
                            marginX: "auto"
                        },
                    }}
                >
                    <Paper elevation={3}>
                        <div className='py-4 pl-4 text-left text-base font-bold text-rgba-black'>Complete Student Profile</div>
                        <Divider  />
                        <div className='py-4 pl-4 text-left text-xl font-normal text-rgba-black'>Let’s Enter your Personal Details</div>
                        <form>

                        </form>
                        <Divider  />
                        <div className='py-4 pl-4 text-left text-xl font-normal text-rgba-black'>Save & Continue</div>
                    </Paper>
                </Box>
            </div>
        </>
    );
}

Main.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
);

export default Main;