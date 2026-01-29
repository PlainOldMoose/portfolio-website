export default function Hero() {
    const ASCII_LOGO = ` ██╗     ██╗   ██╗ ██████╗ ██╗   ██╗███████╗
 ██║     ██║   ██║██╔═══██╗██║   ██║██╔════╝
 ██║     ██║   ██║██║   ██║██║   ██║█████╗
 ██║     ██║   ██║██║▄▄ ██║██║   ██║██╔══╝
 ███████╗╚██████╔╝╚██████╔╝╚██████╔╝███████╗
 ╚══════╝ ╚═════╝  ╚══▀▀═╝  ╚═════╝ ╚══════╝`;
    return (
        <section
            id="home" className="py-2">
            <div className="border-2 border-[#00ff41] bg-black text-center max-w-4xl mx-auto">
                <div className="px-4 py-2 border-b border-[#00ff41]/50 bg-[#00ff41]/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff3333]"/>
                        <div className="w-3 h-3 rounded-full bg-[#ffb000]"/>
                        <div className="w-3 h-3 rounded-full bg-[#00ff41]"/>
                    </div>
                </div>
                <div className="text-terminal-green py-2">Hello, I'm</div>
                <pre className="text-terminal-green py-2">{ASCII_LOGO}</pre>
            </div>
        </section>
    );
}