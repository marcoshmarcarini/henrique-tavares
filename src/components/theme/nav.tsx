'use client'
import Image from 'next/image'
import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
        <div className={styles.Nav}>
            <div className={styles.NavBrand}>
                <Image
                    src={`/img/logo.png`}
                    width={150}
                    height={100}
                    alt={`Logo`}
                    className={styles.Logo}
                />
            </div>
            <div>
                <ul className={styles.NavList}>
                    <li>
                        <Link href={`#sobre`}>
                            Quem Somos
                        </Link>
                    </li>
                    <li>
                        <Link href={`#propostas`}>
                            Nossas Propostas
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}