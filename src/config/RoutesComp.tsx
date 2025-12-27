import { Route, Routes } from 'react-router';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
const RoutesComp = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default RoutesComp;
