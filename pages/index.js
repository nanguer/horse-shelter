import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Homepage</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tempore porro,
                quasi libero aliquid voluptatum quaerat explicabo facilis magni omnis nobis optio
                minima dolorum tempora dolore enim. Reprehenderit, nihil odio!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tempore porro,
                quasi libero aliquid voluptatum quaerat explicabo facilis magni omnis nobis optio
                minima dolorum tempora dolore enim. Reprehenderit, nihil odio!
            </p>
            <Link href="/animals">See All animals</Link>
            <Footer />
        </div>
    )
}
