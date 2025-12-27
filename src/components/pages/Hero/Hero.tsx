import HeroButton from './HeroButton';
import HeroImage from './HeroImage';
import HeroText from './HeroText';

const Hero = () => {
    return (
        <div className="flex flex-col items-center">
            <HeroText />
            <HeroButton />
            <HeroImage />
        </div>
    );
};

export default Hero;
