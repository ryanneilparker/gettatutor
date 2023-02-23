import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Lessons() {
    return (
        <div>
            <Head>
                <title>Lessons</title>
            </Head>

            <NavBar />
            <h1>Lessons</h1>
            <Footer />
        </div>
    )
}