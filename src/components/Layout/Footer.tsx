const sections = [
    {
        title: 'University',
        links: ['About', 'Programs', 'Admissions'],
    },
    {
        title: 'Academics',
        links: ['Faculties', 'Research', 'Library'],
    },
    {
        title: 'Students',
        links: ['Student Portal', 'Careers', 'Exchange Programs'],
    },
    {
        title: 'Legal',
        links: ['Privacy Policy', 'Terms of Use'],
    },
];

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 py-10">
                <div className="grid grid-cols-4 gap-8 text-sm text-gray-600">
                    <div>
                        <p className="mb-2 font-semibold text-gray-900">BTU</p>
                        <p>
                            Business and Technology University
                            <br />
                            Building future leaders through innovation.
                        </p>
                    </div>

                    {sections.map((section) => (
                        <div key={section.title}>
                            <p className="mb-2 font-semibold text-gray-900">
                                {section.title}
                            </p>

                            <ul className="space-y-1">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="transition hover:text-black"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-xs text-gray-500">
                    © {new Date().getFullYear()} Business and Technology
                    University. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
