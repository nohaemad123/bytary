import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function Layout() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
