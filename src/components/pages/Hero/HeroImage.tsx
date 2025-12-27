import programImage from '../../../assets/program.png';

const HeroImage = () => {
    return (
        <div className="mt-16 flex justify-center">
            <img
                src={programImage}
                alt="BTU program for IT"
                className="w-full max-w-5xl"
            />
        </div>
    );
};

export default HeroImage;
