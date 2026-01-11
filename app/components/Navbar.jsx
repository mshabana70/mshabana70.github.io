'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets, navLinks, personalInfo } from '../../assets/assets';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    const handleNavClick = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled
                ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg shadow-purple-500/5'
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2">
                        <span className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                            {personalInfo.name.split(' ')[0]}
                            <span className="text-purple-600">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            <Image
                                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                                alt="Theme toggle"
                                width={20}
                                height={20}
                            />
                        </button>

                        {/* Contact Button */}
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-purple-600/25"
                        >
                            Contact
                            <Image src={assets.arrow_icon} alt="" width={12} height={12} className="invert" />
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2"
                            aria-label="Toggle menu"
                        >
                            <Image
                                src={isMobileMenuOpen
                                    ? (isDarkMode ? assets.close_white : assets.close_black)
                                    : (isDarkMode ? assets.menu_white : assets.menu_black)
                                }
                                alt="Menu"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
                isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
            }`}>
                <div className="bg-white dark:bg-black border-t dark:border-gray-800 px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="block w-full text-center py-3 bg-purple-600 text-white rounded-full font-medium mt-4"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
