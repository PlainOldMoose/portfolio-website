export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-linear-to-r from-terminal-green/50"/>
                <h2 className="text-terminal-green">{'<ABOUT_ME>'}</h2>
                <div className="h-px flex-1 bg-linear-to-l from-terminal-green/50"/>
            </div>
        </section>
    );
}