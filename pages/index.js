/* eslint-disable jsx-a11y/alt-text */

import Head from 'next/head';
import Image from 'next/image';
import { Client, HydrationProvider } from "react-hydration-provider";
import styles from '../styles/Home.module.css';

export default function Home() {
  const data = {
    name: 'Youssef Jemmane',
    projects: {
      p1: ''
    },
  }
  return (
    <HydrationProvider>
      <Client>
        <div className={styles.container}>
          <Head>
            <title>Welcome to My CV</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>
              My name is <a href="https://www.linkedin.com/in/jemmane-youssef-685875212/">{data.name}</a>
            </h1>
            <Image
              style={{ borderRadius: '25px', overflow: 'hidden', marginTop: '30px' }}
              src="/1661041138957.jfif"
              alt="Picture of Me"
              width="350"
              height="350"
              priority
            />
            <p className={styles.description}>
              I study Full Stack development at OFPPT in Morocco
            </p>
            <div>
              <a href="./CV.pdf" className='btn btn-primary' download>This is My CV</a>
            </div>
            <div className={styles.grid}>
              <a className={styles.card}>
                <h2>Skills &rarr;</h2>
                <p>I'm able to create a CRUD website using PHP and MySQL or Laravel, and I have the knowledge to create a UI using React and Redux</p>
              </a>

              <a className={styles.card}>
                <h2>Hobbies &rarr;</h2>
                <p className='text-3xl font-bold underline'>I love solving ciphers and playing BasketBall, I adore playing AAA and RPG Games My favourite game is The legends of Zelda</p>
              </a>
              <a className={styles.card}>
                <h2>Certifications &rarr;</h2>
                <p><a href="https://storage.googleapis.com/programminghub/certificate%2F1630178096840.pdf">IT Basics</a></p>
                <p><a href="https://storage.googleapis.com/programminghub/certificate%2F1629573666888.pdf">Fundamentals</a></p>
                <p><a href="https://storage.googleapis.com/programminghub/certificate%2F1629573666888.pdf">Fundamentals</a></p>
              </a>
            </div>
          </main>

          <footer className={styles.footer}>
            <h2><Image src='/telephone.png' width={30} height={30} />+212675396915</h2>

          </footer>
        </div>
      </Client>
    </HydrationProvider>
  )
}
