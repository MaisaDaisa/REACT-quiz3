import { Link } from 'react-router';
import Button from '../../common/Button';

const HeroButton = () => {
    return (
        <Link to={'https://btu.edu.ge/en/home-english/'} className="mt-6">
            <Button>Go to BTU</Button>
        </Link>
    );
};

export default HeroButton;
