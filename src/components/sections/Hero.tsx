import {ChevronRight} from "lucide-react";

export default function Hero() {
    const ASCII_LOGO = ` ██╗     ██╗   ██╗ ██████╗ ██╗   ██╗███████╗
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
                <div className="px-4 py-2 border-b border-terminal-green/50 bg-terminal-green/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff3333]"/>
                        <div className="w-3 h-3 rounded-full bg-[#ffb000]"/>
                        <div className="w-3 h-3 rounded-full bg-[#00ff41]"/>
                    </div>
                </div>

                {/*Window Body*/}
                <div className="px-15 py-15 text-terminal-green">
                    <span>Hello, I'm</span>
                    <pre className="py-10 ascii-art">{ASCII_LOGO}</pre>
                    <div className="flex justify-center items-center gap-2">
                        <ChevronRight size={16}/>
                        <span>
                        JUNIOR SOFTWARE ENGINEER
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}