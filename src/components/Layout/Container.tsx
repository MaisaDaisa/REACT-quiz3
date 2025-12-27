import type { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }) => (
    <div className="mx-auto max-w-7xl px-6 py-20 text-center">{children}</div>
);

export default Container;
