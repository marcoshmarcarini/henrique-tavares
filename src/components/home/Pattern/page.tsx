'use client'
import Image from 'next/image'
import styles from './Pattern.module.css'

export default function Pattern() {
    return (
        <div className={styles.pattern}>
            <Image
                src="/img/pattern4.png"
                alt="pattern"
                width={1920}
                height={458}
                className={styles.imgPattern}
            />
        </div>
    )
}