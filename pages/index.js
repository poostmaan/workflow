import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar';
import FeatureSection from './components/FeatureSection'; 
import Card from './components/Card';
import Sections from './components/Sections';
import Rules from './components/Rules';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bebop</title>
      </Head>

      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <FeatureSection></FeatureSection>
        <Card></Card>
        <Sections></Sections>
        <Rules></Rules>
      </main>

      <footer>
        <Footer></Footer> 
      </footer>
    </div>
  )
}
