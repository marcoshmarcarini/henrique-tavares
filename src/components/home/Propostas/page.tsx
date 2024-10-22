'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './Propostas.module.css'
import { kupertinoOblique, nineteaMedium } from "@/functions/fonts"


export default function Propostas() {
    return (
        <div id="propostas" className={styles.propostas}>
            <h2 className={`${styles.propostasTitle} ${kupertinoOblique.className}`}>NOSSAS PROPOSTAS</h2>
            <Swiper
                slidesPerView={'auto'}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                freeMode={true}
                autoplay={{
                    delay: 10000,
                }}
                grabCursor={true}
                modules={[Autoplay, Navigation]}
                className={`${styles.swiperPropostas}`}
                style={{
                    "--swiper-navigation-color": 'var(--verde-100)',
                    "--swiper-navigation-size": '25px',
                }}

            >
                <SwiperSlide>
                    <div className={styles.propostaCard}>
                        <h2 className={`${styles.propostaTitle} ${kupertinoOblique.className}`}>Formação para o exercício da advocacia</h2>
                        <ul className={`${styles.propostaList} ${nineteaMedium.className}`}>
                            <li className={styles.propostaListItem}>
                                Oferecimento contínuo de cursos e treinamentos sobre o uso de sistemas processuais
                                eletrônicos, como PJe e Eproc.
                            </li>
                            <li className={styles.propostaListItem}>
                                Capacitação em marketing jurídico, gestão de escritórios e desenvolvimento de carreira na
                                advocacia.
                            </li>
                            <li className={styles.propostaListItem}>
                                Orientação sobre sociedades de advogados, abordando temas como organização, tributação e
                                diferentes formas de associação e contratação.
                            </li>
                            <li className={styles.propostaListItem}>
                                Exploração de novas tecnologias aplicadas ao direito, como inteligência artificial e
                                softwares de gestão, destacando as oportunidades que elas proporcionam.
                            </li>
                            <li className={styles.propostaListItem}>
                                Abertura para novas áreas do direito e suas oportunidades de atuação.
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.propostaCard}>
                        <h2 className={`${styles.propostaTitle} ${kupertinoOblique.className}`}>OAB mais moderna, transparente, inclusiva e próxima da advocacia</h2>
                        <ul className={`${styles.propostaList} ${nineteaMedium.className}`}>
                            <li className={styles.propostaListItem}>
                                Melhoria da comunicação entre a OAB e os advogados, adotando ferramentas modernas de gestão e
                                comunicação.
                            </li>
                            <li className={styles.propostaListItem}>
                                Garantia de uma OAB que atenda advogados e advogadas de todas as idades e áreas de atuação,
                                abrangendo todos os municípios da 2ª Subseção.
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.propostaCard}>
                        <h2 className={`${styles.propostaTitle} ${kupertinoOblique.className}`}>Apoio ao jovem advogado</h2>
                        <ul className={`${styles.propostaList} ${nineteaMedium.className}`}>
                            <li className={styles.propostaListItem}>
                                Implementação de um programa permanente de iniciação à prática da advocacia, com novas
                                turmas a cada entrega de carteiras.
                            </li>
                            <li className={styles.propostaListItem}>
                                Criação de um programa de mentoria para jovens advogados, onde iniciantes na carreira serão
                                acompanhados por colegas mais experientes nos primeiros meses de atuação.
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.propostaCard}>
                        <h2 className={`${styles.propostaTitle} ${kupertinoOblique.className}`}>Defesa das Prerrogativas</h2>
                        <ul className={`${styles.propostaList} ${nineteaMedium.className}`}>
                            <li className={styles.propostaListItem}>
                                Instalação de uma Comissão de Prerrogativas para garantir que todas as demandas sejam
                                resolvidas até sua solução final, além de promover ações preventivas.
                            </li>
                            <li className={styles.propostaListItem}>
                                Valorização da advocacia por meio de um relacionamento mais próximo e contínuo com as
                                autoridades, reforçando o respeito às prerrogativas da classe.
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}
