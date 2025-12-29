import Link from 'next/link';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500 bg-clip-text text-transparent">
                    Building Digital <br /> Experiences
                </h1>
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
                    Hi, I'm Hoa. I'm a developer passionate about creating beautiful, functional, and accessible web applications.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                    >
                        View My Work
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
