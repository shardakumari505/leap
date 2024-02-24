import * as React from 'react';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import { Layout } from "../layout/layout";
import Top from '../components/top';
import Home from '../components/home';
import Form from '../components/form';
import Placed from '../components/placed';
import Feedback from '../components/feedback';
import Alumni from '../components/alumni';
import Questions from '../components/questions';
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