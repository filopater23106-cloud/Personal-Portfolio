import {
    FaCircle,
    FaReact,
    FaCode,
    FaCheckCircle,
} from "react-icons/fa";

function CodeCard() {
    return (
        <div className="relative w-full max-w-xl">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-violet-600/20 blur-3xl"></div>

            {/* Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,.2)]">

                {/* Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">

                    <div className="flex gap-2">
                        <FaCircle className="text-[10px] text-red-500" />
                        <FaCircle className="text-[10px] text-yellow-500" />
                        <FaCircle className="text-[10px] text-green-500" />
                    </div>

                    <div className="rounded-lg bg-white/5 px-4 py-1 text-xs text-gray-400">
                        filopater.jsx
                    </div>

                    <FaReact className="text-cyan-400 text-lg animate-spin [animation-duration:10s]" />
                </div>

                {/* Code */}
                <div className="flex p-6 font-mono text-[15px]">

                    {/* Code */}
                    <pre className="leading-8 overflow-x-auto">
                        {`const `}
                        <span className="text-cyan-400">developer</span>
                        {` = `}
                        <span className="text-yellow-400">{`{`}</span>

                        {"\n"}
                        <span className="text-gray-400">  name:</span>{" "}
                        <span className="text-green-400">"Filopater"</span>,

                        {"\n"}
                        <span className="text-gray-400">  role:</span>{" "}
                        <span className="text-green-400">"Frontend Developer"</span>,

                        {"\n"}
                        <span className="text-gray-400">  stack:</span>{" "}
                        <span className="text-yellow-400">[</span>

                        {"\n    "}
                        <span className="text-green-400">"React"</span>,
                        {"\n    "}
                        <span className="text-green-400">"JavaScript"</span>,
                        {"\n    "}
                        <span className="text-green-400">"Tailwind"</span>,
                        {"\n    "}
                        <span className="text-green-400">"Git"</span>

                        {"\n"}
                        <span className="text-yellow-400">]</span>

                        {"\n"}
                        <span className="text-yellow-400">{`}`}</span>

                        {"\n\n"}
                        <span className="text-cyan-400">
                            ready_to_build()
                        </span>
                        <span className="text-green-400"> ✔</span>
                    </pre>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-white/10 bg-black/20 px-5 py-3 text-sm text-gray-400">

                    <div className="flex items-center gap-2">
                        <FaCode />
                        React + Tailwind
                    </div>

                    <div className="flex items-center gap-2 text-green-400">
                        <FaCheckCircle />
                        Online
                    </div>

                </div>
            </div>

            {/* Floating Tags */}

            <div className="absolute float -left-5 top-8 rounded-full border border-cyan-500/30 bg-[#111827] px-4 py-2 text-sm text-cyan-300 shadow-lg">
                ⚛ React
            </div>

            <div className="absolute float -right-6 bottom-8 rounded-full border border-violet-500/30 bg-[#111827] px-4 py-2 text-sm text-violet-300 shadow-lg">
                ✨ UI/UX
            </div>
        </div>
    );
}

export default CodeCard;