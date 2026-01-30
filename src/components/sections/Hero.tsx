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
            <div className="border-2 border-terminal-green bg-black text-center max-w-4xl mx-auto">

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
                    <div className="flex flex-col gap-0 text-terminal-green/70 items-baseline pb-10">
                        <span>{'> INITIALIZING SYSTEM...'}</span>
                        <span>{'> LOADING PROFILE...'}</span>
                        <span>{'> STATUS: ONLINE'}</span>
                        <span>{'> WELCOME TO MY PROFILE'}</span>
                    </div>
                    <span className="text-terminal-green/70"> HELLO I'M</span>
                    <pre className="py-10 ascii-art">{ASCII_LOGO}</pre>
                    <div className="flex justify-center items-center gap-2">
                        <ChevronRight size={32}/>
                        <span className="glow-text text-2xl">JUNIOR SOFTWARE ENGINEER</span>
                        <span className="cursor-blink">█</span>
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
        </section>
    );
}