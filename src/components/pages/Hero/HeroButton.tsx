import { Link } from 'react-router';
import Button from '../../common/Button';

const HeroButton = () => {
    return (
        <Link to={'/students'} className="mt-6">
            <Button>See Students</Button>
        </Link>
    );
};

export default HeroButton;
