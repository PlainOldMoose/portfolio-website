import {ChevronRight, Terminal} from "lucide-react";

export default function About() {
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
                <div className="items-center border-2 border-terminal-green/30 text-terminal-green/60 p-6 glow-box">
                    <div className="flex items-center gap-2 pb-2">
                        <Terminal size={12}/>
                        <span className="text-s">cat about.txt</span>
                    </div>
                    <div className="text-terminal-green border-b border-terminal-green/30 m-2"/>
                    <p className="flex gap-2 ">
                        <ChevronRight size={16} className="shrink-0 mt-1"/>
                        <span className="font-ibm text-s leading-snug">
                            I'm a passionate junior developer with a love for creating clean,
                            efficient, and user-friendly web applications. My journey in tech
                            started with curiosity and has grown into a full-blown obsession
                            with building things that make a difference.
                        </span>
                    </p>
                    <p className="flex gap-2 pt-4">
                        <ChevronRight size={16} className="shrink-0 mt-1"/>
                        <span className="font-ibm text-s leading-snug">
                            I'm a passionate junior developer with a love for creating clean,
                            efficient, and user-friendly web applications. My journey in tech
                            started with curiosity and has grown into a full-blown obsession
                            with building things that make a difference.
                        </span>
                    </p>
                </div>

                <div className="text-terminal-green">Second column</div>
            </div>
        </section>
    );
}