import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(animal => ({ params: { id: animal.id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async context => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: { animal: data }
    }
}

const Details = ({ animal }) => {
    return (
        <div>
            <h1>{animal.name} Page</h1>
            <p>{animal.email}</p>
        </div>
    )
}

export default Details
