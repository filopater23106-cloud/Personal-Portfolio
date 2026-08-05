import { TypeAnimation } from "react-type-animation";
import { GoDotFill } from "react-icons/go";
import CodeCard from "./CodeCard";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-24 px-6"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 backdrop-blur-md">
                        <GoDotFill className="text-cyan-400" />
                        <span className="text-violet-200 font-medium">
                            Available for opportunities
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Hi! I'm{" "}
                        <span className="bg-gradient-to-r from-violet-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                            Filopater
                        </span>
                    </h1>

                    {/* Typewriter */}
                    <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold">
                        <span className="bg-gradient-to-r from-violet-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                            <TypeAnimation
                                sequence={[
                                    "Frontend Developer",
                                    2000,
                                    "",
                                    500,
                                    "React Developer",
                                    2000,
                                    "",
                                    500,
                                    "UI/UX Enthusiast",
                                    2000,
                                    "",
                                    500,
                                    "Full Stack Developer",
                                    2000,
                                    "",
                                    500,
                                ]}
                                speed={60}
                                deletionSpeed={70}
                                repeat={Infinity}
                                cursor
                            />
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-8 max-w-xl text-lg text-gray-400 leading-8">
                        Crafting beautiful, responsive web applications with modern
                        front-end technologies. Passionate about clean code, elegant UI,
                        and delightful user experiences.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold hover:scale-105 transition duration-300">
                            View My Projects
                        </button>

                        <button className="px-8 py-4 rounded-full border border-white/20 text-white hover:border-violet-500 hover:bg-white/5 transition duration-300">
                            Get In Touch
                        </button>
                    </div>

                </div>

                {/* Right Side */}
                <div className="flex justify-center lg:justify-end">
                    <CodeCard />
                </div>

            </div>
        </section>
    );
}

export default Hero;