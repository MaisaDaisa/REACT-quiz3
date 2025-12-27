import iphoneImage from '../../../assets/iphone.png';

const HeroImage = () => {
    return (
        <div className="mt-16 flex w-90 justify-center">
            <img
                src={iphoneImage}
                alt="iPhone 12"
                className="w-full max-w-5xl"
            />
        </div>
    );
};

export default HeroImage;
