import { StyledEngineProvider } from '@mui/material/styles';
import Head from 'next/head';
import { Layout } from '@/layout/layout';

function MyApp({ Component, pageProps }) {
    return (
        <StyledEngineProvider injectFirst>
            <Head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StyledEngineProvider>
    );
}

export default MyApp;
