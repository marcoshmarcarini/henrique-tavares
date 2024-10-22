'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.css'
import { nineteaRegular } from '@/functions/fonts'
import { CSSProperties, useEffect, useState } from 'react'



export default function Nav() {
    /* const { innerWidth: width } = window */

    const [navStyle, setNavStyle] = useState<CSSProperties>({
        height: '67px',
        transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    })

    const [navListStyle, setNavListStyle] = useState<CSSProperties>({
        display: 'flex',
        transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        flexDirection: 'row',
        position: 'relative',
        left: '0',
        right: '0',
    })

    const [hamburguerStyle, setHamburguerStyle] = useState<CSSProperties>({
        display: 'none',
        transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        gap: '5px',
        position: 'relative',
        top: '0px',
        right: '0px',
    })

    const [hamburguerLineStyle1, setHamburguerLineStyle1] = useState<CSSProperties>({
        display: 'flex',
        transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: 'rotate(0deg)',
        position: 'relative'
    })
    const [hamburguerLineStyle2, setHamburguerLineStyle2] = useState<CSSProperties>({
        display: 'flex',
        transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: 'rotate(0deg)',
        position: 'relative'
    })
    const [hamburguerLineStyle3, setHamburguerLineStyle3] = useState<CSSProperties>({
        display: 'flex',
        transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: 'rotate(0deg)',
        position: 'relative'
    })

    const [navLogo, setNavLogo] = useState<CSSProperties>({
        display: 'flex',
        transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        position: 'relative',
        top: '0px',
        left: '0px',
    })

    const handleWindow = () => {
        if (window.innerWidth < 991) {
            setHamburguerStyle({
                display: 'flex',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                gap: '5px',
                position: 'relative',
                top: '0px',
                right: '0px',
            })

            setNavListStyle({
                display: 'none',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                flexDirection: 'column',
                position: 'relative',
                left: '0',
                right: '0',
            })

        } else if (window.innerWidth > 991) {
            setHamburguerStyle({
                display: 'none',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                gap: '5px',
                position: 'relative',
                top: '0px',
                right: '0px',
            })

            setNavListStyle({
                display: 'flex',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                flexDirection: 'row',
                position: 'relative',
                left: '0',
                right: '0',
            })
        }
    }

    const handleClick = () => {

        if (navStyle.height === '67px') {
            setNavStyle({
                height: '100vh',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            })
            setHamburguerStyle({
                display: 'flex',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                gap: '0px',
                position: 'absolute',
                top: '40px',
                right: '70px',
            })
            setHamburguerLineStyle1({
                display: 'flex',
                transform: 'rotate(45deg)',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'absolute'
            })
            setHamburguerLineStyle2({
                display: 'none',
                transform: 'rotate(0deg)',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'absolute'
            })
            setHamburguerLineStyle3({
                display: 'flex',
                transform: 'rotate(135deg)',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'absolute'
            })
            setNavListStyle({
                display: 'flex',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                flexDirection: 'column',
                position: 'absolute',
                left: '0',
                right: '0',
            })

            setNavLogo({
                display: 'flex',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'absolute',
                top: '20px',
                left: '20px',
            })

        } else {
            setNavStyle({
                height: '67px',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            })
            setHamburguerStyle({
                display: 'flex',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                gap: '5px',
                position: 'relative',
                top: '0px',
                right: '0px',
            })
            setHamburguerLineStyle1({
                display: 'flex',
                transform: 'rotate(0deg)',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative'
            })
            setHamburguerLineStyle2({
                display: 'flex',
                transform: 'rotate(0deg)',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative'
            })
            setHamburguerLineStyle3({
                display: 'flex',
                transform: 'rotate(0deg)',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative'
            })
            setNavListStyle({
                display: 'none',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                flexDirection: 'row',
                position: 'relative',
                left: '0',
                right: '0',
            })
            setNavLogo({
                display: 'flex',
                transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                top: '0px',
                left: '0px',
            })
        }
    }

    const handleClickLink = () => {

        setNavStyle({
            height: '67px',
            transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        })
        setHamburguerStyle({
            display: 'flex',
            transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            gap: '5px',
            position: 'relative',
            top: '0px',
            right: '0px',
        })
        setHamburguerLineStyle1({
            display: 'flex',
            transform: 'rotate(0deg)',
            transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative'
        })
        setHamburguerLineStyle2({
            display: 'flex',
            transform: 'rotate(0deg)',
            transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative'
        })
        setHamburguerLineStyle3({
            display: 'flex',
            transform: 'rotate(0deg)',
            transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative'
        })
        setNavListStyle({
            display: 'none',
            transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            flexDirection: 'row',
            position: 'relative',
            left: '0',
            right: '0',
        })
        setNavLogo({
            display: 'flex',
            transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            top: '0px',
            left: '0px',
        })

    }

    useEffect(() => {
        const handleResize = () => {
            window.addEventListener('resize', () => {
                if (window.innerWidth <= 991) {
                    setHamburguerStyle({
                        display: 'flex',
                        transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        gap: '5px',
                        position: 'relative',
                        top: '0px',
                        right: '0px',
                    })

                    setNavListStyle({
                        display: 'none',
                        transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        flexDirection: 'column',
                        position: 'relative',
                        left: '0',
                        right: '0',
                    })

                } else if (window.innerWidth > 991) {
                    setHamburguerStyle({
                        display: 'none',
                        transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        gap: '5px',
                        position: 'relative',
                        top: '0px',
                        right: '0px',
                    })

                    setNavListStyle({
                        display: 'flex',
                        transition: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        flexDirection: 'row',
                        position: 'relative',
                        left: '0',
                        right: '0',
                    })
                }
            })

        }

        handleResize()

    }, [])




    return (
        <div className={styles.Nav} style={navStyle} onLoad={handleWindow}>
            <div
                className={styles.NavBrand}
                style={navLogo}
            >
                <Link href={`/`}>
                    <Image
                        src={`/img/logo.png`}
                        width={150}
                        height={100}
                        alt={`Logo`}
                        className={styles.Logo}
                    />
                </Link>
            </div>
            <div>
                <ul
                    className={`${styles.NavList} ${nineteaRegular.className}`}
                    style={navListStyle}
                >
                    <li>
                        <Link href={`#sobre`} onClick={handleClickLink}>
                            Quem Somos
                        </Link>
                    </li>
                    <li>
                        <Link href={`#propostas`} onClick={handleClickLink}>
                            Nossas Propostas
                        </Link>
                    </li>
                    <li>
                        <Link href={`#contato`} onClick={handleClickLink}>
                            Contato
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.Hamburger} onClick={handleClick} style={hamburguerStyle}>
                <div className={styles.HamburgerLine} style={hamburguerLineStyle1}></div>
                <div className={styles.HamburgerLine} style={hamburguerLineStyle2}></div>
                <div className={styles.HamburgerLine} style={hamburguerLineStyle3}></div>
            </div>
        </div>
    )
}