import {ChevronRight} from "lucide-react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiMaildotru} from "react-icons/si";

export default function Hero() {
    const ASCII_LOGO = `  ██╗     ██╗   ██╗ ██████╗ ██╗   ██╗███████╗
  ██║     ██║   ██║██╔═══██╗██║   ██║██╔════╝
██║     ██║   ██║██║   ██║██║   ██║█████╗
██║     ██║   ██║██║▄▄ ██║██║   ██║██╔══╝
  ███████╗╚██████╔╝╚██████╔╝╚██████╔╝███████╗
  ╚══════╝ ╚═════╝  ╚══▀▀═╝  ╚═════╝ ╚══════╝`;
    return (
        <section
            id="home" className="py-10">
            {/*Hero Window*/}
            <div className="border-2 border-terminal-green bg-bg-black text-center max-w-4xl mx-auto">

                {/* Window Header*/}
                <div className="grid grid-cols-3 px-4 py-1 border-b border-terminal-green/50 bg-terminal-green/5">
                    <div className="flex gap-2 self-center">
                        <div className="w-3 h-3 rounded-full bg-[#ff3333]"/>
                        <div className="w-3 h-3 rounded-full bg-[#ffb000]"/>
                        <div className="w-3 h-3 rounded-full bg-terminal-green"/>
                    </div>
                    <div className="text-center text-s text-terminal-green">Terminal</div>
                </div>

                {/*Window Body*/}
                <div className="px-5 pt-2 pb-5 text-terminal-green">
                    <div className="flex flex-col gap-0 items-baseline pb-10 text-terminal-green/50">
                        <span>{'> INITIALIZING SYSTEM...'}</span>
                        <span>{'> LOADING PROFILE...'}</span>
                        <span>{'> STATUS: ONLINE'}</span>
                        <span>{'> WELCOME TO MY PROFILE'}</span>
                    </div>
                    <span className="text-terminal-green/70"> HELLO I'M</span>
                    <pre className="pt-4 pb-10 ascii-art">{ASCII_LOGO}</pre>
                    <div className="flex justify-center items-center gap-2">
                        <ChevronRight size={16}/>
                        <span className="glow-text text-2xl">FULL-STACK SOFTWARE ENGINEER</span>

                    </div>
                    <div className="flex text-xl flex flex-col font-bold">
                        <span>{'> LOCATION: HIGH WYCOMBE, UK'}</span>
                        <span>{'> AVAILABLE: TRUE'}</span>
                    </div>
                    <div className="flex mt-8 flex-col gap-0 items-baseline text-terminal-green/50">
                        <span>{'> PROFILE LOADED...'}</span>
                        <span>{'> WELCOME, GUEST'}</span>
                        <span>{'>'} <span className="cursor-blink">█</span></span>
                    </div>
                    <div className="my-6 border-t border-terminal-green/20"/>
                    <div className="flex items-center justify-center gap-4">
                        <a href="https://github.com/PlainOldMoose" target="_blank" rel="noreferrer noopener"><FaGithub
                            size={32} opacity={0.30} className="hover hover:opacity-100"/></a>
                        <a href="https://www.linkedin.com/in/luque-van-der-merwe/" target="_blank"
                           rel="noreferrer noopener"><FaLinkedin
                            size={32} opacity={0.30} className="hover hover:opacity-100"/></a>
                        <a href="mailto:luque@vandermerwe.uk" target="_blank"
                           rel="noreferrer noopener"><SiMaildotru size={32} opacity={0.30}
                                                                  className="hover hover:opacity-100"/></a>
                    </div>
                </div>
            </div>
        </section>
    );
}