import AuthContextProvider from '../context/authContext'
import GlobalStyle from '../styles/globalstyle'
export default function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </AuthContextProvider>
    )
}