import {Terminal} from "lucide-react";
import {useEffect, useState} from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        {id: "home", label: "HOME", key: "F1"},
        {id: "about", label: "ABOUT", key: "F2"},
        {id: "projects", label: "MY_PROJECTS", key: "F3"},
        {id: "contact", label: "CONTACT", key: "F4"},
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
            className="sticky top-0 z-50 grid grid-cols-3 items-center border-b border-terminal-green text-terminal-green bg-black">
            <div className="flex items-center gap-2">
                <Terminal size={30}/>
                <a href="#" className="text-2xl font-bold pb-1">guest@luque.dev</a>
                <span className="cursor-blink">_</span>
            </div>

            {/*Nav bar links inserted here*/}
            <div className="flex justify-center p-2 ">
                {navLinks.map(({id, label, key}) => (
                    <a key={id}
                       href={`#${id}`}
                       className={`px-4 py-2 ${
                           activeSection === id ? "bg-terminal-green text-black" : "hover:bg-terminal-green/10"
                       }`}
                    ><span className="text-xs mr-1 opacity-50">[{key}]</span>{label}</a>
                ))}
            </div>
        </nav>
    );
}