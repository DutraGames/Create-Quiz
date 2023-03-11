import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from '../context/authContext';
import GlobalStyle from '../styles/globalstyle';
export default function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
            <ToastContainer position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </AuthContextProvider>
    )
}