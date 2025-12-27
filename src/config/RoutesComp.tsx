import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Container from '../components/Layout/Container';
const RoutesComp = () => {
    return (
        <Routes>
            <Route element={<Container/>}>
                
            <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default RoutesComp;
