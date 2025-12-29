const About = () => {
    return (
        <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                        I specialize in building modern web applications using technologies like React, Next.js, and TailwindCSS.
                        I focus on writing clean, maintainable code and building intuitive user interfaces.
                    </p>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                        When I'm not coding, I'm constantly learning new technologies and keeping up with the latest trends in web development.
                    </p>

                    <div className="mt-12">
                        <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'Git'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
