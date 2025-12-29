const Footer = () => {
    return (
        <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12">
            <div className="container mx-auto px-6 flex flex-col items-center justify-between md:flex-row gap-6">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    © {new Date().getFullYear()} by Code Chill. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
