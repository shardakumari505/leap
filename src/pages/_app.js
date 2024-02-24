import { StyledEngineProvider } from '@mui/material/styles';
import Head from 'next/head';
import { Layout } from '@/layout/layout';

function MyApp({ Component, pageProps }) {
    return (
        <StyledEngineProvider injectFirst>
            <Head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StyledEngineProvider>
    );
}

export default MyApp;
