type Props = {
    children: React.ReactNode;
};

const Container = ({ children }: Props) => (
    <div className="mx-auto max-w-7xl px-6 text-center">{children}</div>
);

export default Container;
