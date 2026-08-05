import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

function Header() {
    const links = [
        "Home",
        "Shills",
        "Projects",
        "Contact",
    ];

    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="top-0 left-0 w-full sticky z-50 bg-[#0B1120]/70 backdrop-blur-xl border-b border-white/10 lg:px-8">

            <nav className="flex items-center justify-around py-4">

                <a href="#home" className="flex items-center gap-3">

                    <h1 className="text-xl font-bold text-white flex items-center">
                        <p className="text-cyan-600"><GoDotFill /></p> Portfolio
                    </h1>
                </a>


                <ul className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link}>
                            <a
                                className="text-gray-300 hover:text-purple-400 transition-all duration-300"
                                href={`#${link.toLowerCase()}`}
                            >
                                {link}
                            </a>
                        </li>
                    ))}

                </ul>

                <div className="hidden lg:flex items-center gap-4">
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
                    <a href="#contact"
                        className="px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-medium shadow-[0_0_25px_rgba(139,92,246,0.45)] hover:scale-105 transition-all duration-300 ml-5">
                        Let's Connect
                    </a>

                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-3xl text-white hover:text-purple-400"
                >
                    <span className={`block transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                        {isOpen ? <FiX /> : <FiMenu />}
                    </span>
                </button>

            </nav>
            <div
                className={`${isOpen ? "opacity-100 py-8" : "max-h-0 opacity-0 py-0"} lg:hidden bg-[#111827] border-t border-white/10 w-full mx-auto px-6 transition-all duration-300 ease-in-out shadow-2xl overflow-hidden`}>
                <ul className="flex flex-col items-center gap-6 w-full">
                    {links.map((link, index) => (
                        <li key={link}>
                            <a
                                className={`text-gray-300 text-lg hover:text-purple-400 transition-all duration-300 ${isOpen
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                    } `} style={{
                                        transitionDelay: `${(index * 50) + 10}ms`
                                    }} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                                {link}
                            </a>
                        </li>
                    ))}
                    <li>
                        <div className="flex items-center justify-center gap-5 w-full">
                            <div className="flex items-center justify-center w-10 h-10 border border-gray-300/20 rounded-full"><a href="https://www.linkedin.com/in/filopater-shehata-171847346?utm_source/" target="blanck" className="text-2xl"><FaLinkedin /></a></div>
                            <div className="flex items-center justify-center w-10 h-10 border border-gray-300/20 rounded-full"><a href="https://www.facebook.com/filopater.shehata" target="blanck" className="text-2xl"><FaFacebook /></a></div>
                            <div className="flex items-center justify-center w-10 h-10 border border-gray-300/20 rounded-full"><a href="https://www.instagram.com/filopater3/" target="blanck" className="text-2xl"><IoLogoInstagram /></a></div>
                            <div className="flex items-center justify-center w-10 h-10 border border-gray-300/20 rounded-full"><a href="https://github.com/filopater23106-cloud" target="blanck" className="text-2xl"><IoLogoGithub /></a></div>
                        </div>
                    </li>
                    <li><p className="text-center text-gray-400 text-sm leading-7 max-w-xs">Crafting beautiful, responsive web applications with modern frontend technologies.</p></li>
                    <li className="w-full">
                        <a href="#contact" onClick={() => setIsOpen(false)} className="w-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 py-3 font-semibold text-white hover:scale-105 active:scale-95">
                            Let's Connect
                        </a>
                    </li>


                </ul>
            </div>
        </header>

    )
}

export default Header;
