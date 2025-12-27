import { Outlet } from 'react-router';

const Container = () => (
    <div className="mx-auto max-w-7xl px-6 pt-20 text-center">
        <Outlet />
    </div>
);

export default Container;
