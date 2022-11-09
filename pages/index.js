/* eslint react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to My CV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My name is <a href="https://www.linkedin.com/in/jemmane-youssef-685875212/">Youssef Jemmane</a>
        </h1>
        <Image 
  
          src="/IMG_20211010_142349.jpg"
          alt="Picture of Me"
          
         
        
        />
        <p className={styles.description}>
        I study Full Stack development at OFPPT in Morocco
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>CRUD &rarr;</h2>
            <p>I can make a CRUD website using laravel or PHP and MySQL or React and MongoDB</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Hobbies &rarr;</h2>
            <p>I love solving ciphers and playing BasketBall, I adore playing AAA and RPG Games My favourite game is The legends of Zelda <code>Zelda it's the princess not the main character</code> </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          I don't have social media accounts
      </footer>
    </div>
  )
}
