export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "PORTFOLIO_SITE",
        description: 'This very website! Built with React, TypeScript, TailwindCSS.',
        technologies: ['React', 'TailwindCSS', 'TypeScript'],
        githubUrl: 'https://github.com/PlainOldMoose/portfolio-website',
        liveUrl: 'https://vandermerwe.uk'
    },
    {
        id: 2,
        title: "IDL_WEB_APP",
        description: 'This very website! Built with React, TypeScript, TailwindCSS.',
        technologies: ['React', 'TailwindCSS', 'TypeScript'],
        githubUrl: 'https://github.com/PlainOldMoose/portfolio-website',
        liveUrl: 'https://vandermerwe.uk'
    },
]