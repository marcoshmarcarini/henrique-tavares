import Image from 'next/image'
import styles from './Footer.module.css'
export default function Footer() {
    return (
        <>

            <div className={styles.footer}>
                <p>© 2023 Henrique Tavares. Todos os direitos reservados.</p>
            </div>
            <Image
                src={`https://img.icons8.com/ios-filled/50/chevron-up.png`}
                width={30}
                height={30}
                className={styles.chevron}
                alt='chevron-up'
            />
        </>
    )
}