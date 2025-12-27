import type { HTMLAttributes } from 'react';

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button
            {...props}
            className={`rounded-full bg-pink-500 px-4 py-1.5 text-sm text-white transition hover:cursor-pointer hover:bg-pink-300 ${props.className ?? ''}`}
        />
    );
};

export default Button;
