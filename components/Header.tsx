import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Code Chill
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        About
                    </Link>
                    <Link href="#projects" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Projects
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/Pink1298" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="mailto:tthhoa.dev@gmail.com" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
