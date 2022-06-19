import Head from 'next/head';
import Header from "./header";
import Footer from "./footer";



function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Bil Hayal</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <main className='container mx-auto'>
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Layout 