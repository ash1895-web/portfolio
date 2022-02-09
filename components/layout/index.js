import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>Aseer Ansari</title>
                <link rel='icon' href='/icons/logo.png'/>
            </Head>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout