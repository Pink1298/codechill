import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Project One",
        description: "A comprehensive dashboard for effortless data visualization and management.",
        tags: ["Next.js", "TailwindCSS", "Chart.js"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "Project Two",
        description: "E-commerce platform with seamless checkout and inventory management.",
        tags: ["React", "Redux", "Stripe"],
        links: { demo: "#", github: "#" }
    },
    {
        title: "Project Three",
        description: "Real-time task management app for remote teams.",
        tags: ["Vue.js", "Firebase", "Tailwind"],
        links: { demo: "#", github: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <a
                                    href={project.links.github}
                                    className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    Code
                                </a>
                                <a
                                    href={project.links.demo}
                                    className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
