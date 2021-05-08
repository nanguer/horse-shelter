import Link from 'next/link'
import styles from '../../styles/Animals.module.css'
const Animals = ({ animals }) => {
    return (
        <div>
            <h1>All animals</h1>
            <ul>
                {animals.map(animal => (
                    <li key={animal.id}>
                        <Link href={`/animals/${animal.id}`}>
                            <a className={styles.single}>{animal.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { animals: data }
    }
}

export default Animals
