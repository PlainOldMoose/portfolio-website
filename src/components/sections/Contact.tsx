import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiMaildotru} from "react-icons/si";

export default function Contact() {
    return (
        <section id="contact" className="py-20">

            {/*Section Head*/}
            <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-linear-to-r from-terminal-green/50"/>
                <h2 className="text-terminal-green text-4xl glow-text tracking-wider">{'<CONTACT_ME>'}</h2>
                <div className="h-px flex-1 bg-linear-to-l from-terminal-green/50"/>
            </div>

            {/*Section Body*/}
            <div className="p-6">
                {/*Contact window*/}
                <div className="border-2 border-terminal-green/30 bg-black text-center max-w-4xl mx-auto glow-box">
                    {/* Window Header*/}
                    <div className="grid grid-cols-3 px-4 py-1 border-b border-terminal-green/50 bg-terminal-green/5">
                        <div className="flex gap-2 self-center">
                            <div className="w-3 h-3 rounded-full bg-[#ff3333]"/>
                            <div className="w-3 h-3 rounded-full bg-[#ffb000]"/>
                            <div className="w-3 h-3 rounded-full bg-terminal-green"/>
                        </div>
                        <div className="text-center text-s text-terminal-green">contact.sh - running</div>
                    </div>

                    {/*Window Body*/}
                    <div className="px-5 pt-2 pb-5 text-terminal-green">
                        <div className="flex flex-col gap-0 text-terminal-green/50 items-baseline pb-10">
                            <span>{'> INITIALIZING CONTACT PROTOCOL...'}</span>
                            <span>{'> LOADING COMMUNICATION CHANNELS...'}</span>
                            <span>{'> STATUS: READY'}</span>
                            <span>{'> READY FOR INPUT'}</span>
                            <span className="cursor-blink">█</span>
                        </div>
                        <p className="text-left font-ibm text-sm border-l-2 border-terminal-green/30 pl-4 mb-12">
                            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
                            Whether you have a question or just want to say hello, my inbox is always open
                        </p>
                        <div className="space-y-6 text-terminal-green/50">
                            <p>{'>'} PRIMARY_CHANNEL</p>

                            <a href="mailto:luque@vandermerwe.uk"
                               className="inline-flex items-center gap-2 retro-button p-3 text-2xl">
                                <SiMaildotru/>
                                LUQUE@VANDERMERWE.UK
                            </a>
                        </div>
                        <div className="mt-8 pt-4 border-t border-terminal-green/20"/>
                        <div className="flex items-center justify-center gap-4">
                            <span className="text-xs text-terminal-green/50">LINKS:</span>
                            <FaGithub size={32} opacity={0.30}/>
                            <FaLinkedin size={32} opacity={0.30}/>
                            <SiMaildotru size={32} opacity={0.30}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}