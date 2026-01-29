import { Terminal } from "lucide-react";

export default function Navbar() {

    return (
        <nav className="flex items-center justify-between p-4 border-b border-[#00ff41] text-terminal-green">
            <div className="flex items-center gap-2">
                <Terminal size={16}/>
                <div className="text-2xl font-bold">LUQUE.dev</div>
                <span className="cursor-blink">_</span>
            </div>
            <div className="flex gap-6">
                <a>About</a>
                <a>My Projects</a>
                <a>Contact</a>
            </div>
        </nav>
    );
}