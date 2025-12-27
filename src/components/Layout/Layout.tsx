import { Outlet } from 'react-router';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default Layout;
