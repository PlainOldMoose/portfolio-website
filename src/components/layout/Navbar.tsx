import {Terminal} from "lucide-react";
import {useEffect, useState} from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        {id: "about", label: "ABOUT"},
        {id: "projects", label: "MY_PROJECTS"},
        {id: "contact", label: "CONTACT"},
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "contact"];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="sticky top-0 z-50 flex items-center justify-between border-b border-terminal-green text-terminal-green bg-black">
            <div className="flex items-center gap-2">
                <Terminal size={30}/>
                <a href="#" className="text-2xl font-bold pb-1">guest@luque.dev</a>
                <span className="cursor-blink">_</span>
            </div>

            {/*Nav bar links inserted here*/}
            <div className="flex p-2 gap-6">
                {navLinks.map(({id, label}) => (
                    <a key={id}
                       href={`#${id}`}
                       className={`px-4 py-2 ${
                           activeSection === id ? "bg-terminal-green text-black" : "hover:bg-terminal-green/20"
                       }`}
                    >{label}</a>
                ))}
            </div>
        </nav>
    );
}