import { useState } from "react";
import projects from "./projectsData";
import ProjectCard from "./ProjectCard";

function Projects() {
    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        {
            id: "all",
            label: "All Projects",
        },
        {
            id: "website",
            label: "Websites",
        },
        {
            id: "application",
            label: "Applications",
        },
    ];

    const filteredProjects =
        activeTab === "all"
            ? projects
            : projects.filter(
                (project) => project.category === activeTab
            );

    return (
        <section
            id="projects"
            className="py-32 px-6"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <div className="text-center">

                    <p className="uppercase tracking-[4px] text-cyan-400 text-sm font-medium">
                        My Work
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                        Featured Projects
                    </h2>

                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto mt-5"></div>

                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-8">
                        A collection of projects that showcase my journey in
                        front-end development, from responsive websites to
                        interactive React applications.
                    </p>

                </div>

                {/* Filter Buttons */}

                <div className="flex justify-center mt-14">

                    <div className="flex flex-wrap justify-center gap-3 rounded-full border border-white/10 bg-[#111827]/80 backdrop-blur-md p-2">

                        {tabs.map((tab) => (

                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`rounded-full px-7 py-3 font-medium transition-all duration-300
                                
                                ${activeTab === tab.id
                                        ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/30"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }
                                
                                `}
                            >
                                {tab.label}
                            </button>

                        ))}

                    </div>

                </div>

                {/* Projects Grid */}

                <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">

                    {filteredProjects.map((project) => (

                        <ProjectCard
                            key={project.id}
                            project={project}
                        />

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;