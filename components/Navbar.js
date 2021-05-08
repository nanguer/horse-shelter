import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.jpeg" alt="azyl dla koni logo" width={128} height={128} />
            </div>
            <Link href="/">Home </Link>
            <Link href="/about">About</Link>
            <Link href="/animals"> Animals</Link>
        </nav>
    )
}

export default Navbar
