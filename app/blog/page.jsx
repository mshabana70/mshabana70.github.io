'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, personalInfo } from '../../assets/assets';

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Get unique categories
    const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

    // Filter posts
    const filteredPosts = selectedCategory === 'all'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    const publishedPosts = filteredPosts.filter(post => post.published);
    const draftPosts = filteredPosts.filter(post => !post.published);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black">
            {/* Header */}
            <header className="bg-white dark:bg-black border-b dark:border-gray-900">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                            {personalInfo.name.split(' ')[0]}
                            <span className="text-purple-600">.</span>
                        </Link>
                        <Link
                            href="/"
                            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                            &larr; Back to Portfolio
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-12">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Research Blog
                    </h1>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Thoughts and insights on AI security, adversarial machine learning, mechanistic interpretability, and the intersection of AI and cybersecurity.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                selectedCategory === category
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 border border-gray-200 dark:border-gray-800'
                            }`}
                        >
                            {category === 'all' ? 'All Posts' : category}
                        </button>
                    ))}
                </div>

                {/* Published Posts */}
                {publishedPosts.length > 0 ? (
                    <div className="space-y-6 mb-12">
                        {publishedPosts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-shadow border border-gray-100 dark:border-gray-900"
                            >
                                <Link href={`/blog/${post.id}`}>
                                    {/* Post Image Header */}
                                    {post.image && (
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">
                                                        {post.category}
                                                    </span>
                                                    <span className="text-gray-400 text-sm">
                                                        {post.readTime} read
                                                    </span>
                                                </div>
                                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                                    {post.title}
                                                </h2>
                                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {post.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded text-xs border border-gray-200 dark:border-gray-800"
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                ) : null}

                {/* Coming Soon Section */}
                {draftPosts.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Coming Soon
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {draftPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 dark:border-gray-800 opacity-75"
                                >
                                    {/* Draft Post Image Header */}
                                    {post.image ? (
                                        <div className="relative h-32 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover opacity-50"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        </div>
                                    ) : (
                                        <div className="h-32 bg-gradient-to-br from-purple-600/50 to-pink-600/50 flex items-center justify-center">
                                            <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                                                {post.category}
                                            </span>
                                            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded text-xs font-medium">
                                                Draft
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-500 text-sm">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <svg className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400 mb-2">
                            No posts in this category
                        </h3>
                        <p className="text-gray-400 dark:text-gray-500">
                            Check back later or explore other categories.
                        </p>
                    </div>
                )}

                {/* Newsletter Subscribe */}
                <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                    <p className="mb-6 opacity-90">
                        Get notified when I publish new research posts and insights on AI security.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-xs mt-4 opacity-70">
                        No spam, unsubscribe anytime.
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t dark:border-gray-900 py-8 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default BlogPage;
