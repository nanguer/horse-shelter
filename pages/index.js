import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Azyl dla koni kucykowo | Home</title>
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>
                    Homepage Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
                    tempore porro, quasi libero aliquid voluptatum quaerat explicabo facilis magni
                    omnis nobis optio minima dolorum tempora dolore enim. Reprehenderit, nihil odio!
                </p>
                <p className={styles.text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tempore
                    porro, quasi libero aliquid voluptatum quaerat explicabo facilis magni omnis
                    nobis optio minima dolorum tempora dolore enim. Reprehenderit, nihil odio!
                </p>
                <Link href="/animals">
                    <a className={styles.btn}> See All animals</a>
                </Link>
            </div>
        </>
    )
}
