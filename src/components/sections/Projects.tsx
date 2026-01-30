import {projects} from "../../data/Project.ts";
import {FaFolder} from "react-icons/fa";
import {ChevronRight} from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            {/*Section Header*/}
            <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-linear-to-r from-terminal-green/50"/>
                <h2 className="text-terminal-green text-4xl glow-text tracking-wider">{'<MY_PROJECTS>'}</h2>
                <div className="h-px flex-1 bg-linear-to-l from-terminal-green/50"/>
            </div>

            {/*Section Body*/}
            <div className="grid grid-cols-2 p-6 gap-6">
                {projects.map((project) => (
                    // Project Box
                    <div key={project.id} className="border border-terminal-green/30 glow-box text-terminal-green">
                        {/*Project header*/}
                        <div
                            className="grid grid-cols-3 items-center tracking_wide bg-terminal-green/5 gap-2 px-4 p-1 border-b border-terminal-green/30">
                            <div className="flex items-center gap-2">
                                <FaFolder/>
                                Project_0{project.id}.exe
                            </div>
                            <div className="col-start-3 flex items-center justify-end gap-1">
                                <div className="items-end w-3 h-3 rounded-full bg-terminal-green/20"/>
                                <div className="items-end w-3 h-3 rounded-full bg-terminal-green/20"/>
                                <div className="items-end w-3 h-3 rounded-full bg-terminal-green/20"/>
                            </div>
                        </div>

                        {/*Project body*/}
                        <div className="p-6">
                            <div className="flex items-center glow-text mb-4">
                                <ChevronRight/>
                                <h2 className="text-2xl">{project.title}</h2>
                            </div>
                            <p className="flex items-center font-ibm text-terminal-green/50 mb-6">
                                {'//'} {project.description}
                            </p>

                            {/*Project Tags*/}
                            <div className="flex gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech}
                                          className="px-3 py-1 border border-terminal-green/20 bg-terminal-green/10">
                                    {'¬'} {tech}
                                </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}