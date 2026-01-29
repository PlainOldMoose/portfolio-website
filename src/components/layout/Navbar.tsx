import { Terminal } from "lucide-react";

export default function Navbar() {

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between p-4 border-b border-terminal-green text-terminal-green bg-black">
            <div className="flex items-center gap-2">
                <Terminal size={30}/>
                <a href="#" className="text-2xl font-bold pb-1">guest@luque.dev</a>
                <span className="cursor-blink">_</span>
            </div>
            <div className="flex gap-6">
                <a href="#about">About</a>
                <a href="#projects">My Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}