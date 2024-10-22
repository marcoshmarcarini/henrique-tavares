import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'
import { nineteaRegular } from '@/functions/fonts'
export default function Footer() {
    return (
        <>

            <div className={`${styles.footer} ${nineteaRegular.className}`}>
                <p>
                    © 2024 Henrique Tavares e Priscilla Thomaz. Todos os
                    direitos reservados.
                </p>
            </div>
            <Link
                href={'#'}
                className={styles.chevronUp}
            >
                <Image
                    src={`https://img.icons8.com/ios-filled/50/ffffff/chevron-up.png`}
                    width={30}
                    height={30}
                    className={styles.chevron}
                    alt='chevron-up'
                />
            </Link>

        </>
    )
}