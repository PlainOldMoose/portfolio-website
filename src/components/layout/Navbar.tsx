export default function Navbar() {

    return (
        <nav className="flex items-center justify-between p-4 bg-black">
            <div className="text-xl font-bold text-terminal-green">LUQUE.dev</div>
            <div className="flex gap-6 text-terminal-green">
                <a>About</a>
                <a>My Projects</a>
                <a>Contact</a>
            </div>
        </nav>
    );
}