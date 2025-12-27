import { StudentsDisplat } from './StudentsDisplay/StudentsDisplat';

const StudentsPage = () => {
    return (
        <div className="flex flex-col items-center gap-10">
            <div>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
                    Who goes to BTU?
                </h1>
                <p className="mt-3 text-pink-500">Meet our Students</p>
            </div>

            <StudentsDisplat />
        </div>
    );
};

export default StudentsPage;
