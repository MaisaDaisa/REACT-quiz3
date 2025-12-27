import { Link } from 'react-router';

const HeroButton = () => {
    return (
        <Link
            to={'https://btu.edu.ge/en/home-english/'}
            className="mt-6 rounded-full bg-blue-600 px-6 py-2 text-base font-medium text-white transition hover:bg-blue-700"
        >
            Go to BTU
        </Link>
    );
};

export default HeroButton;
