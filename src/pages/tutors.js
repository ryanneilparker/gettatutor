import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Tutors() {
    return (
        <div>
            <Head>
                <title>Tutors</title>
            </Head>

            <NavBar />
            <h1>Tutors</h1>
            <Footer />
        </div>
    )
}