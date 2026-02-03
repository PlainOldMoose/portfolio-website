import {ChevronRight, Terminal} from "lucide-react";
import {FaJava, FaReact} from "react-icons/fa";
import {
    SiApachemaven,
    SiDocker,
    SiLinux,
    SiPostgresql,
    SiProxmox,
    SiSpringboot,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import {TbBrandCSharp} from "react-icons/tb";
import {DiJavascript} from "react-icons/di";

export default function About() {
    const skillCategories = [
        {
            title: 'LANGUAGES',
            skills: [
                {name: 'JAVA', icon: FaJava},
                {name: 'TYPESCRIPT', icon: SiTypescript},
                {name: 'JAVASCRIPT', icon: DiJavascript},
                {name: 'C SHARP', icon: TbBrandCSharp},
            ]
        },
        {
            title: 'TOOLS/FRAMEWORKS',
            skills: [
                {name: 'REACT.JS', icon: FaReact},
                {name: 'SPRINGBOOT', icon: SiSpringboot},
                {name: 'POSTGRESQL', icon: SiPostgresql},
                {name: 'TAILWIND', icon: SiTailwindcss},
                {name: 'MAVEN', icon: SiApachemaven},
            ]
        },
        {
            title: 'DEVOPS',
            skills: [
                {name: 'DOCKER', icon: SiDocker},
                {name: 'PROXMOX', icon: SiProxmox},
                {name: 'LINUX', icon: SiLinux},
            ]
        },
    ]

    return (
        <section id="about" className="py-20">
            {/*Section header*/}
            <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-linear-to-r from-terminal-green/50"/>
                <h2 className="text-terminal-green text-4xl glow-text tracking-wider">{'<ABOUT_ME>'}</h2>
                <div className="h-px flex-1 bg-linear-to-l from-terminal-green/50"/>
            </div>

            {/*Section body*/}
            <div className="grid grid-cols-2 items-start p-6 gap-x-8">
                {/*Column 1*/}
                <div>
                    {/*About Box*/}
                    <div
                        className="items-center border-2 border-terminal-green/30 hover:border-terminal-green text-terminal-green/60 p-6 glow-box">
                        <div className="flex items-center gap-2 pb-2">
                            <Terminal size={12}/>
                            <span className="text-s">cat about.txt</span>
                        </div>
                        <div className="text-terminal-green border-b border-terminal-green/30 m-2"/>
                        <p className="flex gap-2 ">
                            <ChevronRight size={16} className="shrink-0 mt-1"/>
                            <span className="font-ibm text-s leading-snug hover:text-terminal-green">
                                    I'm Luque van der Merwe, a full-stack software engineer who specialises in
                                    Java Spring Boot backends with PostgreSQL and REST APIs. I’m currently learning
                                    React to help develop a full-stack skill set. I recently graduated from
                                    Royal Holloway with First Class Honours in Computer Science.
                                    My focus is on designing scalable solutions to real problems.
                                </span>
                        </p>
                        <p className="flex gap-2 pt-4">
                            <ChevronRight size={16} className="shrink-0 mt-1"/>
                            <span className="font-ibm text-s leading-snug hover:text-terminal-green">
                                    You can find my most recent project at <a href="https://idl.vandermerwe.uk"
                                                                                   target="_blanK"
                                                                                   rel="noreferrer noopener"
                                                                                   className="hover:text-terminal-green underline">idl.vandermerwe.uk</a> -
                                    An in-house league management system for DotA 2 (videogame). It
                                    tracks metrics for around 100~ players and it's self-hosted on my Proxmox homelab,
                                    just like this website! I also write Java plugins for a UK university
                                    Minecraft server which hosts an active community of ~150 players.

                            </span>
                        </p>
                        <p className="flex gap-2 pt-4">
                            <ChevronRight size={16} className="shrink-0 mt-1"/>
                            <span className="font-ibm text-s leading-snug hover:text-terminal-green">
                                Outside of programming, I am a rock and metal enthusiast. My
                                hobbies include playing competitive DotA 2 and video editing.
                            </span>
                        </p>
                    </div>

                    {/*Info Buttons*/}
                    <div className="grid grid-cols-2 text-terminal-green/50 mt-4 gap-4">
                        <div className="border border-terminal-green/20 bg-terminal-green/5 p-2">
                            <div className="text-xs pt-2 px-2 ">STATUS</div>
                            <div className="text-xl px-4 text-terminal-green">- AVAILABLE</div>
                        </div>
                        <div className="border border-terminal-green/20 bg-terminal-green/5 p-2">
                            <div className="text-xs pt-2 px-2 ">LOCATION</div>
                            <div className="text-xl px-4 text-terminal-green">- REMOTE/UK</div>
                        </div>
                    </div>
                </div>

                {/*Column 2*/}
                <div>
                    {/*Header*/}
                    <div className="flex text-terminal-green/50 flex pb-4">
                        <ChevronRight/>
                        <span>SCANNING SKILL_MODULES...</span>
                    </div>
                    {/*Skills Boxes*/}
                    <div className="flex flex-col gap-4">
                        {skillCategories.map((category) => (
                            <div key={category.title}>
                                <div className="text-terminal-green/50 text-xs mb-2">[{category.title}]</div>
                                <div className="grid grid-cols-2 text-terminal-green gap-2">
                                    {category.skills.map((skill) => (
                                        <div className="group border border-terminal-green/20 text-terminal-green/70 hover:text-terminal-green hover:border-terminal-green flex px-2 py-3"
                                             key={skill.name}>
                                            <div className="border border-terminal-green/20 group-hover:border-terminal-green p-2">
                                                <skill.icon size={24} className="opacity-50 group-hover:opacity-100"/>
                                            </div>
                                            <div className="p-2">{skill.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*Footer*/}
                    <div className="text-terminal-green/50 flex py-4">
                        <ChevronRight/>
                        <span>SCAN COMPLETE.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}