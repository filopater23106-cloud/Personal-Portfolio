import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const STORAGE_KEY = "theme";

function getInitialTheme() {
    return document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
}

function ThemeToggle({ className = "" }) {
    const [theme, setTheme] = useState(getInitialTheme);

    const toggle = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
        document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute("content", next === "light" ? "#f4f6fb" : "#000000");
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            /* storage unavailable – ignore */
        }
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={
                theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            title={theme === "light" ? "Dark mode" : "Light mode"}
            className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 ${className}`}
        >
            {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>
    );
}

export default ThemeToggle;
