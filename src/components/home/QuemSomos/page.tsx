'use client'
import styles from './QuemSomos.module.css'
import Image from 'next/image'
import { kupertino, nineteaMedium } from '@/functions/fonts'

export default function QuemSomos() {
    return (
        <div className={styles.container} id='sobre'>
            <div className={styles.qsCard}>
                <Image
                    src="/img/perfis/Avatar-Henrique.png"
                    alt="Henrique Tavares"
                    width={150}
                    height={150}
                    className={styles.qsImage}
                />
                <div className={styles.qsTextArea}>
                    <h1 className={`${styles.qsTitle} ${kupertino.className}`}>Quem é Henrique Tavares?</h1>
                    <p className={`${styles.qsText} ${nineteaMedium.className}`}>
                        Henrique da Cunha Tavares é advogado há 22 anos e sócio do escritório Tavares e Giro Advocacia.
                        Mestre em Direitos e Garantias Fundamentais pela FDV e especialista em Direito Tributário, Henrique
                        tem uma trajetória sólida na advocacia capixaba e nacional.

                        Foi Conselheiro Seccional da OAB-ES (2010-2015) e Conselheiro Federal (2016-2018), representando o
                        Espírito Santo. Presidiu a Comissão Estadual de Direito Tributário da OAB-ES (2012-2014) e integrou
                        a Comissão Nacional de Direito Tributário (2016-2018), contribuindo para importantes avanços na área.

                        Agora, como candidato à presidência da 2ª Subseção da OAB/ES, Henrique Tavares, ao lado da vice,
                        Priscilla Thomaz, propõe uma gestão inovadora, comprometida com o fortalecimento da advocacia, com a
                        modernização da instituição e, principalmente, com uma atuação mais próxima e acessível à classe.
                    </p>
                </div>
            </div>
            <div className={styles.qsCard}>
                <div className={styles.qsTextArea}>
                    <h1 className={`${styles.qsTitle} ${kupertino.className}`}>Quem é Priscilla Thomaz?</h1>
                    <p className={`${styles.qsText} ${nineteaMedium.className}`}>
                        Priscilla Thomaz é advogada há mais de 20 anos, graduada em Direito pela Faculdade Milton Campos (BH)
                        em 2002. Especialista em Direito do Trabalho e Direito Previdenciário, tem forte atuação nas áreas
                        de direitos sociais e previdenciários na região.

                        Foi coordenadora das Comissões de Direitos Sociais (2022) e Direito Previdenciário (2023) da 2ª
                        Subseção, além de membro da Comissão Estadual de Direito Previdenciário desde 2019. Também
                        participa ativamente do Conselho Municipal dos Direitos da Pessoa com Deficiência (2022-2026).

                        Agora, candidata à vice-presidência da 2ª Subseção, Priscilla se compromete a trazer sua experiência
                        e dedicação para uma gestão inclusiva e próxima dos advogados ao lado de Henrique Tavares.
                    </p>
                </div>
                <Image
                    src="/img/perfis/Avatar-Priscilla.png"
                    alt="Priscilla Thomaz"
                    width={150}
                    height={150}
                    className={styles.qsImage}
                />
            </div>


        </div>
    )

}