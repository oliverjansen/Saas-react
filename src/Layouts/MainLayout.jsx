import { Outlet } from 'react-router-dom';
  
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';


const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout