'use client';
import { useState } from 'react';
import { experienceData, workExperience, educationData } from '../../assets/assets';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('research');

    const tabs = [
        { id: 'research', label: 'Research Experience' },
        { id: 'work', label: 'Work Experience' },
        { id: 'education', label: 'Education' }
    ];

    return (
        <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Experience & Education
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${
                                activeTab === tab.id
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Research Experience */}
                {activeTab === 'research' && (
                    <div className="space-y-8">
                        {experienceData.map((exp, index) => (
                            <div
                                key={index}
                                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-200 dark:before:bg-purple-900"
                            >
                                <div className="absolute left-0 top-0 w-2 h-2 bg-purple-600 rounded-full -translate-x-[3px]"></div>
                                <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-sm hover:shadow-md hover:shadow-purple-500/5 transition-shadow border border-gray-100 dark:border-gray-900">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {exp.title}
                                            </h3>
                                            <p className="text-purple-600 dark:text-purple-400 font-medium">
                                                {exp.organization}
                                            </p>
                                            {exp.advisor && (
                                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                                    Advisor: {exp.advisor}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-800">
                                                {exp.location}
                                            </span>
                                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                <span className="mt-2 w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Work Experience */}
                {activeTab === 'work' && (
                    <div className="space-y-8">
                        {workExperience.map((exp, index) => (
                            <div
                                key={index}
                                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-pink-200 dark:before:bg-pink-900"
                            >
                                <div className="absolute left-0 top-0 w-2 h-2 bg-pink-600 rounded-full -translate-x-[3px]"></div>
                                <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-sm hover:shadow-md hover:shadow-pink-500/5 transition-shadow border border-gray-100 dark:border-gray-900">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {exp.title}
                                            </h3>
                                            <p className="text-pink-600 dark:text-pink-400 font-medium">
                                                {exp.organization}
                                            </p>
                                            {exp.department && (
                                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                                    {exp.department}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-800">
                                                {exp.location}
                                            </span>
                                            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium">
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                <span className="mt-2 w-1.5 h-1.5 bg-pink-600 rounded-full flex-shrink-0"></span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Education */}
                {activeTab === 'education' && (
                    <div className="grid md:grid-cols-2 gap-6">
                        {educationData.map((edu, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-black rounded-2xl p-6 shadow-sm hover:shadow-md hover:shadow-purple-500/5 transition-shadow border border-gray-100 dark:border-gray-900"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                                        <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium">
                                            {edu.institution}
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                                            {edu.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-4">
                                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                                        {edu.period}
                                    </span>
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                                        GPA: {edu.gpa}
                                    </span>
                                </div>

                                {edu.highlights.length > 0 && (
                                    <div className="border-t dark:border-gray-800 pt-4">
                                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                            Honors & Awards
                                        </h4>
                                        <ul className="space-y-1">
                                            {edu.highlights.map((highlight, hIndex) => (
                                                <li key={hIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                                                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;
