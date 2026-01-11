'use client';
import { awardsData, publicationsData } from '../../assets/assets';

const Awards = () => {
    return (
        <section id="awards" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Awards & Publications
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Awards */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                            </svg>
                            Awards & Honors
                        </h3>
                        <div className="space-y-4">
                            {awardsData.map((award, index) => (
                                <div
                                    key={index}
                                    className={`p-5 rounded-2xl transition-all border ${
                                        award.highlight
                                            ? 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800'
                                            : 'bg-white dark:bg-black border-gray-100 dark:border-gray-900'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                {award.highlight && (
                                                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                )}
                                                <h4 className="font-bold text-gray-900 dark:text-white">
                                                    {award.title}
                                                </h4>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                {award.description}
                                            </p>
                                        </div>
                                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium whitespace-nowrap">
                                            {award.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Publications */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Publications
                        </h3>
                        <div className="space-y-4">
                            {publicationsData.map((pub, index) => (
                                <div
                                    key={index}
                                    className="p-5 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-900"
                                >
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                                        {pub.title}
                                    </h4>
                                    <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
                                        {pub.venue}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                        {pub.description}
                                    </p>
                                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full text-sm border border-gray-200 dark:border-gray-800">
                                        {pub.year}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="mt-8 p-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl text-white">
                            <h4 className="text-lg font-bold mb-4">Research Impact</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                    <div className="text-3xl font-bold">$1.8M</div>
                                    <div className="text-sm opacity-80">Research Funding</div>
                                </div>
                                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                    <div className="text-3xl font-bold">6+</div>
                                    <div className="text-sm opacity-80">Team Members Led</div>
                                </div>
                                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                    <div className="text-3xl font-bold">2</div>
                                    <div className="text-sm opacity-80">Master&apos;s Degrees</div>
                                </div>
                                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                    <div className="text-3xl font-bold">4+</div>
                                    <div className="text-sm opacity-80">Research Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
