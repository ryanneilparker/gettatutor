import Head from 'next/head';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <NavBar />
      <h1>Home</h1>
      <Footer />
    </div>

  );
}