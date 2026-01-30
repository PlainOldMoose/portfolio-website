import {ChevronRight, Terminal} from "lucide-react";
import {FaJava, FaReact} from "react-icons/fa";
import {SiPostgresql, SiSpringboot, SiTypescript} from "react-icons/si";

export default function About() {
    const skills = [
        {name: 'REACT.JS', icon: FaReact, level: 85},
        {name: 'JAVA', icon: FaJava, level: 85},
        {name: 'SPRING', icon: SiSpringboot, level: 85},
        {name: 'TYPESCRIPT', icon: SiTypescript, level: 85},
        {name: 'POSTGRESQL', icon: SiPostgresql, level: 85},
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
                    <div className="items-center border-2 border-terminal-green/30 text-terminal-green/60 p-6 glow-box">
                        <div className="flex items-center gap-2 pb-2">
                            <Terminal size={12}/>
                            <span className="text-s">cat about.txt</span>
                        </div>
                        <div className="text-terminal-green border-b border-terminal-green/30 m-2"/>
                        <p className="flex gap-2 ">
                            <ChevronRight size={16} className="shrink-0 mt-1"/>
                            <span className="font-ibm text-s leading-snug">
                            I'm Luque van der Merwe, a full stack software engineer with
                            a strong focus on clean, efficient, and user-friendly web applications.
                            My journey in tech started at age 9 when I curiously dismantled (and broke)
                            my family's computer. Now it's grown into a full blown obsession with building
                            apps to impact real problems.
                        </span>
                        </p>
                        <p className="flex gap-2 pt-4">
                            <ChevronRight size={16} className="shrink-0 mt-1"/>
                            <span className="font-ibm text-s leading-snug">
                            When i'm not coding i'm probably playing videogames or rocking out to
                            heavy metal music. I have a hunger for learning and I really enjoy
                            learning new skills and teaching them to others.
                        </span>
                        </p>
                    </div>

                    {/*Contact Buttons*/}
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
                    <div className="flex flex-col text-terminal-green gap-2">
                        {skills.map((skill) => (
                            <div className="border border-terminal-green/20 flex px-2 py-3" key={skill.name}>
                                <div className="border border-terminal-green/20 p-2">
                                    <skill.icon size={24}/>
                                </div>
                                <div className="p-2">{skill.name}</div>
                                <div className="p-2">{skill.level}%</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}