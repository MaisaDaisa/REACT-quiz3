import axios from 'axios';
import { useEffect, useState } from 'react';
import StudentCard from './StudentCard';

type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: {
        city: string;
    };
};

export const StudentsDisplat = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get<User[]>('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data);
            })
            .finally(() => setLoading(false));
    }, []);
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => {
                const [firstName, lastName = ''] = user.name.split(' ');

                return (
                    <StudentCard
                        key={user.id}
                        firstName={firstName}
                        lastName={lastName}
                        email={user.email}
                        phone={user.phone}
                        city={user.address.city}
                    />
                );
            })}
        </div>
    );
};
