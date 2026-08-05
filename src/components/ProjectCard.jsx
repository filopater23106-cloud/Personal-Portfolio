import { FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectCard({ project }) {
    return (
        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10">

            {/* Image */}
            <div className="relative h-64 overflow-hidden">

                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 transition-all duration-300 group-hover:opacity-100">

                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-violet-600 p-4 text-xl transition hover:scale-110 hover:bg-violet-500"
                    >
                        <FiExternalLink />
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 bg-[#111827] p-4 text-xl transition hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
                    >
                        <FiGithub />
                    </a>

                </div>

                {/* Status Badge */}
                <div className="absolute left-4 top-4">

                    {project.completed ? (

                        <span className="rounded-full border border-green-400/30 bg-green-500/20 px-4 py-1 text-sm font-medium text-green-300">
                            ✓ Completed
                        </span>

                    ) : (

                        <span className="rounded-full border border-yellow-400/30 bg-yellow-500/20 px-4 py-1 text-sm font-medium text-yellow-300">
                            🚧 In Progress
                        </span>

                    )}

                </div>

            </div>

            {/* Content */}
            <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                    {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (

                        <span
                            key={tech}
                            className="rounded-lg border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm text-violet-300"
                        >
                            {tech}
                        </span>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default ProjectCard;