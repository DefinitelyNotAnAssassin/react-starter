import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Login', href: '/login' },  
];

export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full sticky top-0 bg-transparent z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end items-center py-4">
             
                    <div className="hidden md:flex space-x-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-white hover:text-gray-300 px-3 py-2 rounded-md  font-semibold"
                                viewTransition
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-300 focus:outline-none"
                        >
                            {isOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
