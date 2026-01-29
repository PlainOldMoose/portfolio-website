export default function Hero() {
    const ASCII_LOGO = ` ██╗     ██╗   ██╗ ██████╗ ██╗   ██╗███████╗
 ██║     ██║   ██║██╔═══██╗██║   ██║██╔════╝
 ██║     ██║   ██║██║   ██║██║   ██║█████╗
 ██║     ██║   ██║██║▄▄ ██║██║   ██║██╔══╝
 ███████╗╚██████╔╝╚██████╔╝╚██████╔╝███████╗
 ╚══════╝ ╚═════╝  ╚══▀▀═╝  ╚═════╝ ╚══════╝`;
    return (
        <section
            id="home">
            <div className="border-2 border-[#00ff41] bg-black text-center max-w-4xl mx-auto">
                <div className="text-terminal-green">Hello, I'm</div>
                <pre className="text-terminal-green">{ASCII_LOGO}</pre>
            </div>
        </section>
    );
}