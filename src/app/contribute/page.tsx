"use client"
import { Navbar } from "@/components/navbar"
import { useEffect, useState } from "react"
import axios from "axios"

interface Tag {
    ID: number;
    Name: string;
}

interface Project {
    ID: number;
    Name: string;
    Desc: string;
    URL: string;
    Tag: Tag[];
}

const ProjectCard = ({ project }: { project: Project }) => (
    <div className="border border-white/20 rounded-lg p-6 hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="flex flex-col h-full">
            <h3 className="text-xl text-white font-semibold mb-2">{project.Name}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{project.Desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {project.Tag.map((tag) => (
                    <span
                        key={tag.ID}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                    >
                        {tag.Name}
                    </span>
                ))}
            </div>
            <a
                href={project.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-green-400 hover:text-green-300 transition-colors inline-block"
            >
                View Project →
            </a>
        </div>
    </div>
);

export default function Contribute() {
    const [projects, setProjects] = useState<Project[]>([
        {
            ID: 1,
            Name: "Demo Project",
            Desc: "This is a sample project to showcase data.",
            URL: "https://github.com/Intellexa-GDG-REC/Project_Name-GitRecQuest-v.1.0.0",
            Tag: [],
        },
    
    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.post('https://api.gitrecquest.tech/projects', {
                    withCredentials: true
                });
    
                setProjects(prevProjects => [
                    ...prevProjects,
                    ...response.data
                ]);
                setError(null);
            } catch (err) {
                setError('Failed to fetch projects. Please try again later.');
                console.error('Error fetching projects:', err);
            } finally {
                setLoading(false);
            }
        };
    
        fetchProjects();
    }, []);
    

    return (
        <div className="min-h-screen bg-black w-screen pt-6">
            {/* <Navbar /> */}
            <div className="text-5xl w-full font-bold text-white text-center">
                Contribute
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-10 pt-20">
                <div className="text-center mb-12">
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore our open source projects and find ways to contribute to the community.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-400 py-8">
                        {error}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                        {projects.map((project) => (
                            <ProjectCard key={project.ID} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
