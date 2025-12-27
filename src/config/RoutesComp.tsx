import { Route, Routes } from 'react-router';
import Layout from '../components/Layout/Layout';
import StudentsPage from '../components/pages/Students/StudentsPage';
import Home from '../pages/Home';
const RoutesComp = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<StudentsPage />} />
            </Route>
        </Routes>
    );
};

export default RoutesComp;
