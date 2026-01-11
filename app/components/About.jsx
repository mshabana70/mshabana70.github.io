'use client';
import { personalInfo, researchInterests, skillsData } from '../../assets/assets';

const About = () => {
    const getIcon = (iconName) => {
        const icons = {
            shield: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            lock: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            brain: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            search: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        };
        return icons[iconName] || icons.shield;
    };

    return (
        <section id="about" className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                {/* Bio Section */}
                <div className="mb-16">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
                        {personalInfo.bio}
                    </p>
                </div>

                {/* Research Interests */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Research Interests
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {researchInterests.map((interest, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-lg hover:shadow-purple-500/10 transition-all group border border-transparent hover:border-purple-500/20"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                        {getIcon(interest.icon)}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {interest.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {interest.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Overview */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Technical Skills */}
                    <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-950/30 rounded-2xl border border-purple-100 dark:border-purple-900/30">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Technical Skills
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                    Programming
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillsData.programming.map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 bg-white dark:bg-black text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-sm border border-gray-100 dark:border-gray-800">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                    ML/AI Frameworks
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillsData.mlFrameworks.map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 bg-white dark:bg-black text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-sm border border-gray-100 dark:border-gray-800">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                    AI Security Tools
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillsData.aiTools.map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 bg-white dark:bg-black text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-sm border border-gray-100 dark:border-gray-800">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security & Certifications */}
                    <div className="p-8 bg-gradient-to-br from-green-50 to-purple-50 dark:from-gray-900 dark:to-gray-900 rounded-2xl border border-green-100 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Security & Certifications
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                    Security Tools
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillsData.securityTools.slice(0, 6).map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 bg-white dark:bg-black text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-sm border border-gray-100 dark:border-gray-800">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                    Clearance
                                </h4>
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-semibold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    {skillsData.clearance}
                                </span>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                    Certifications
                                </h4>
                                <div className="space-y-2">
                                    {skillsData.certifications.map((cert) => (
                                        <div key={cert.name} className="flex items-center justify-between p-3 bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-gray-800">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cert.name}</span>
                                            <span className={`text-xs px-2 py-1 rounded-full ${
                                                cert.status === 'Active'
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                                            }`}>
                                                {cert.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
