import { GoDotFill } from "react-icons/go";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#111827] border-t border-white/10">

            {/* Newsletter */}
            <div className="max-w-7xl mx-auto px-6 py-16 border-b border-white/10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Stay Updated
                        </h3>

                        <p className="text-gray-400 leading-7">
                            Subscribe To See My Latest Projects & Aplications
                        </p>
                    </div>

                    <form className="lg:col-span-2 flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-[#1F2937] border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-gray-500 outline-none focus:border-purple-500"
                        />

                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-500 transition-all duration-300 px-8 py-3 rounded-xl font-semibold text-white"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>

            </div>

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                <div>

                    <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
                        <p className="text-cyan-600"><GoDotFill /></p> Portfolio
                    </h3>

                    <p className="text-gray-400 leading-7  mb-5">
                        Full-Stack Developer building beautiful, responsive web experiences with modern front-end technologies.
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="https://www.linkedin.com/in/filopater-shehata-171847346?utm_source/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
                            <FaLinkedin />
                        </a>

                        <a href="https://www.facebook.com/filopater.shehata" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
                            <FaFacebook />
                        </a>

                        <a href="https://www.instagram.com/filopater3/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
                            <IoLogoInstagram />
                        </a>

                        <a href="https://github.com/filopater23106-cloud" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
                            <IoLogoGithub />
                        </a>
                    </div>

                </div>


                <div className="text-center">

                    <h3 className="text-white font-semibold mb-5">
                        Navigation
                    </h3>

                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
                        <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
                        <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
                        <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
                    </ul>

                </div>

                <div>

                    <h3 className="text-white font-semibold mb-5">
                        What I Do
                    </h3>

                    <div>
                        <p className="text-gray-400 leading-7">Front-End Development
                            Responsive Web Design
                            React & Tailwind Projects
                            UI / UX Implementation
                            Component Architecture</p>

                    </div>

                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-white/10">

                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-gray-500 text-sm">
                        © 2026 Filopater - All Rights Reserved
                    </p>

                    <p className="text-gray-500 text-sm">
                        Made with
                        <span className="text-pink-400 mx-2">❤</span>
                        by Filopater
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;