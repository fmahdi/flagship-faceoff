import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
        <NavBar></NavBar>
        <div className='max-w-screen mx-auto px-8 md:px-12 lg:px-16 xl:px-24 min-h-[calc(100vh-116px)]'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;