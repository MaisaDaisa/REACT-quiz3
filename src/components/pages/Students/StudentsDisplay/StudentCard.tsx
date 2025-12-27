import { Link } from 'react-router';

type StudentCardProps = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
};

const StudentCard = ({
    firstName,
    lastName,
    email,
    phone,
    city,
}: StudentCardProps) => {
    return (
        <Link
            to={'https://btu.edu.ge/en/home-english/'}
            className="group w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 transition duration-500 hover:border-pink-500"
        >
            <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
                    {firstName[0]}
                    {lastName[0]}
                </div>

                <div className="flex flex-col items-start gap-1">
                    <h3 className="text-base font-semibold text-gray-900 transition duration-500 group-hover:text-pink-700">
                        {firstName} {lastName}
                    </h3>
                    <p className="text-sm text-gray-500">{city}</p>
                </div>
            </div>
            <div className="flex flex-col items-start gap-1 space-y-2 text-sm text-gray-600">
                <p>
                    <span className="font-medium text-gray-900">Email:</span>{' '}
                    {email}
                </p>
                <p>
                    <span className="font-medium text-gray-900">Phone:</span>{' '}
                    {phone}
                </p>
            </div>
        </Link>
    );
};

export default StudentCard;
