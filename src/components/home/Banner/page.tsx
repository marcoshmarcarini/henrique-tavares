'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import styles from './Banner.module.css'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Banner() {

    return (
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
        >
            <SwiperSlide>
                <Image
                    src={`/img/banner/Banner-1.jpg`}
                    alt={`1`}
                    className={styles.slideImage}
                    width={1920}
                    height={696}
                    quality={75}
                    sizes={`100vw`}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    loading={`lazy`}
                    blurDataURL={`/img/banner/placeholder.png`}
                    placeholder={`blur`}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={`/img/banner/banner-2.jpg`}
                    alt={`2`}
                    className={styles.slideImage}
                    width={1920}
                    height={696}
                    quality={75}
                    sizes={`100vw`}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    loading={`lazy`}
                    blurDataURL={`/img/banner/placeholder.png`}
                    placeholder={`blur`}
                />
            </SwiperSlide>
        </Swiper>
    )
}