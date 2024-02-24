import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import { Layout } from "../app/layout";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Top from './top';
import Home from '.';
import Form from './form';
import Placed from './placed';
import Feedback from './feedback';
import Alumni from './alumni';
import Questions from './questions';
import Navbar from '@/components/navbar';


function Dashboard() {
    return (
        <>
            <Navbar />
            <Top />
            <Home />
            <Form />
            <Placed />
            <Feedback />
            <Alumni />
            <Questions />
        </>
    );
}

Dashboard.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
);

export default Dashboard;