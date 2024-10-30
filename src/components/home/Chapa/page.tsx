'use client'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { CSSProperties } from 'react'
import styles from './Chapa.module.css'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { quinn } from "@/functions/fonts"

interface CustomStyle extends CSSProperties {
    ["--swiper-pagination-color"]?: string
}

export default function Chapa() {
    return (
        <>
            <div id="chapa">
                <h2 className={`${styles.title} ${quinn.className}`}>
                    CONHEÇA NOSSA CHAPA
                </h2>
            </div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                freeMode={true}
                autoplay={{
                    delay: 5000,
                }}
                modules={[Autoplay, Pagination]}
                className={styles.swiperHome}
                style={{
                    "--swiper-pagination-color": 'var(--verde-25)',
                } as CustomStyle}
            >
                <SwiperSlide>
                    <Image
                        src={`/img/chapa/01.png`}
                        alt={`1`}
                        className={styles.slideImage}
                        width={1920}
                        height={696}
                        quality={100}
                        sizes={`100vw`}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        blurDataURL={`/img/banner/placeholder.png`}
                        placeholder={`blur`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={`/img/chapa/02.png`}
                        alt={`1`}
                        className={styles.slideImage}
                        width={1920}
                        height={696}
                        quality={100}
                        sizes={`100vw`}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        blurDataURL={`/img/banner/placeholder.png`}
                        placeholder={`blur`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={`/img/chapa/03.png`}
                        alt={`1`}
                        className={styles.slideImage}
                        width={1920}
                        height={696}
                        quality={100}
                        sizes={`100vw`}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        blurDataURL={`/img/banner/placeholder.png`}
                        placeholder={`blur`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={`/img/chapa/04.png`}
                        alt={`1`}
                        className={styles.slideImage}
                        width={1920}
                        height={696}
                        quality={100}
                        sizes={`100vw`}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        blurDataURL={`/img/banner/placeholder.png`}
                        placeholder={`blur`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={`/img/chapa/05.png`}
                        alt={`1`}
                        className={styles.slideImage}
                        width={1920}
                        height={696}
                        quality={100}
                        sizes={`100vw`}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        blurDataURL={`/img/banner/placeholder.png`}
                        placeholder={`blur`}
                    />
                </SwiperSlide>
            </Swiper>
        </>

    )
}