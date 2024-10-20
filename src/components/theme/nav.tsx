'use client'
import Image from 'next/image'
import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav(){
return(
    <div>

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
            <ul>
                <li>
                    <Link href={`#sobre`}>
                            Quem Somos
                    </Link>
                    <Link href={`#propostas`}>
                            Nossas Propostas
                    </Link>
                </li>
            </ul>
        </div>


    </div>
)
}