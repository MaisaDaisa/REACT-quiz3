import { Link } from 'react-router';
import Button from '../common/Button';
import BTUImgae from './../../assets/BTU.png';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
                <div className="flex justify-center">
                    <img src={BTUImgae} alt="iPhone 12" className="size-12" />
                </div>

                <nav className="hidden space-x-8 text-sm text-gray-600 md:flex">
                    <Link to={''} className="transition hover:text-black">
                        Home
                    </Link>
                    <Link
                        to={'students'}
                        className="transition hover:text-black"
                    >
                        Students
                    </Link>
                </nav>
                <Link to={'https://btu.edu.ge/en/home-english/'}>
                    <Button>Apply</Button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
