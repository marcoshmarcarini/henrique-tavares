import localFont from "next/font/local";

const catalish = localFont({
    src: '../app/fonts/catalish_huntera/Catalish.otf',
    variable: '--font-catalish'
})

const catalishItalic = localFont({
    src: '../app/fonts/catalish_huntera/Catalish.otf',
    variable: '--font-catalish-italic'
})

const kupertino = localFont({
    src: '../app/fonts/kupertino_grotesk/Kupertino.otf',
    variable: '--font-kupertino'
})

const kupertinoOblique = localFont({
    src: '../app/fonts/kupertino_grotesk/KupertinoOblique.otf',
    variable: '--font-kupertino-oblique',
})

const madinah = localFont({
    src: '../app/fonts/madinah_authentic/Madinah-Authentic.otf',
    variable: '--font-madinah'
})

const nineteaBlack = localFont({
    src: '../app/fonts/ninetea/Ninetea-Black.woff',
    variable: '--font-ninetea-black'
})

const nineteaBold = localFont({
    src: '../app/fonts/ninetea/Ninetea-Bold.woff',
    variable: '--font-ninetea-bold'
})

const nineteaExtraBold = localFont({
    src: '../app/fonts/ninetea/Ninetea-ExtraBold.woff',
    variable: '--font-ninetea-extra-bold'
})

const nineteaMedium = localFont({
    src: '../app/fonts/ninetea/Ninetea-Medium.woff',
    variable: '--font-ninetea-medium'
})

const nineteaRegular = localFont({
    src: '../app/fonts/ninetea/Ninetea-Regular.woff',
    variable: '--font-ninetea-regular'
})

const nineteaSemiBold = localFont({
    src: '../app/fonts/ninetea/Ninetea-SemiBold.woff',
    variable: '--font-ninetea-semi-bold'
})

const quinn = localFont({
    src: '../app/fonts/quinn/Quinn-Bold.woff',
    variable: '--font-quinn'
})


export { catalish, catalishItalic, kupertino, kupertinoOblique, madinah, nineteaBlack, nineteaBold, nineteaExtraBold, nineteaMedium, nineteaRegular, nineteaSemiBold, quinn }