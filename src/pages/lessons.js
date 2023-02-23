import Head from 'next/head';
import Link from 'next/link';

export default function Lessons() {
    return (
        <div>
            <Head>
                <title>Lessons</title>
            </Head>

            <h1>Lessons</h1>
            <Link href='/'>Home</Link>
        </div>
    )
}