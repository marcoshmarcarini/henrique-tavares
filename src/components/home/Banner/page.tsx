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
                    src={`/img/banner/banner-2.jpeg`}
                    alt={`1`}
                    width={1920}
                    height={1080}
                    className={styles.slideImage}
                    quality={100}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={`/img/banner/banner-3.jpeg`}
                    alt={`2`}
                    width={1920}
                    height={1080}
                    className={styles.slideImage}
                    quality={100}
                />
            </SwiperSlide>
        </Swiper>
    )
}