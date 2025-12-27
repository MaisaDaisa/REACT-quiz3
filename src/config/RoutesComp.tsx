import { Route, Routes } from 'react-router';
import Container from '../components/Layout/Container';
import Home from '../pages/Home';
const RoutesComp = () => {
    return (
        <Routes>
            <Route element={<Container />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default RoutesComp;
