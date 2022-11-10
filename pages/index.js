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
          style={{borderRadius: '25px', overflow: 'hidden', marginTop: '30px'}}
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
          <a href="./CV.pdf" className={styles.button} download>This is My CV</a>
        </div>
        <div className={styles.grid}>
          <a  className={styles.card}>
            <h2>Skills &rarr;</h2>
            <p>I can make a CRUD website using laravel or PHP and MySQL or React and MongoDB</p>
          </a>

          <a  className={styles.card}>
            <h2>Hobbies &rarr;</h2>
            <p>I love solving ciphers and playing BasketBall, I adore playing AAA and RPG Games My favourite game is The legends of Zelda</p>
          </a>   
        </div>
      </main>

      <footer className={styles.footer}>
      <h2>My Number is : &nbsp;<code className={styles.code}>0675396915</code></h2>
      </footer>
    </div>
  )
}
