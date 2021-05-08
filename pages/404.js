import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [router])

    return (
        <div className="not-found">
            <h1>Ooops... </h1>
            <h2>That page cannot be found.</h2>
            <p>
                Go back to the{' '}
                <Link href="/">
                    <a>home page</a>
                </Link>
            </p>
        </div>
    )
}

export default NotFound
