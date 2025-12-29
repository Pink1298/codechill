const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
                    I'm currently open for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <a
                    href="mailto:contact@example.com"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:opacity-90 transition-opacity"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
