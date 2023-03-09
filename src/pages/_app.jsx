import GlobalStyle from '../styles/globalstyle'

export default function MyApp({ Component, pageProps }) {
    return (
        <main>
            <GlobalStyle />
            <Component {...pageProps} />
        </main>
    )
}