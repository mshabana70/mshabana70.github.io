'use client';
import { useState } from 'react';
import Image from 'next/image';
import { projectsData } from '../../assets/assets';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const categories = ['all', ...new Set(projectsData.map(p => p.category))];

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    const getCategoryIcon = (category) => {
        const icons = {
            'AI Security': (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            'Adversarial ML': (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            'Interpretability': (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            'Security Tools': (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            'Deep Learning': (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        };
        return icons[category] || icons['AI Security'];
    };

    return (
        <section id="projects" className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of research projects and tools focused on AI security, adversarial machine learning, and reverse engineering.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                filter === category
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                                    : 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 border border-gray-200 dark:border-gray-800'
                            }`}
                        >
                            {category === 'all' ? 'All Projects' : category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-gray-50 dark:bg-gray-950 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-900"
                        >
                            {/* Project Image/Header */}
                            {project.image ? (
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2">
                                            {project.private && (
                                                <span className="px-2 py-1 bg-yellow-500/90 text-black rounded text-xs font-medium">
                                                    Private
                                                </span>
                                            )}
                                            {project.featured && (
                                                <span className="px-2 py-1 bg-purple-500/90 text-white rounded text-xs font-medium">
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-20">
                                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                            <defs>
                                                <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                                                </pattern>
                                            </defs>
                                            <rect width="100" height="100" fill={`url(#grid-${index})`}/>
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white">
                                            {getCategoryIcon(project.category)}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2">
                                            {project.private && (
                                                <span className="px-2 py-1 bg-yellow-500/90 text-black rounded text-xs font-medium">
                                                    Private
                                                </span>
                                            )}
                                            {project.featured && (
                                                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs font-medium">
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-white dark:bg-black text-gray-600 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Link */}
                                {project.github && !project.private ? (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-medium hover:bg-purple-600 dark:hover:bg-purple-400 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        View on GitHub
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center gap-2 w-full py-3 bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-500 rounded-xl font-medium cursor-not-allowed">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        Internal Project
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/mshabana70?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-full font-medium transition-all"
                    >
                        View All Repositories
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
