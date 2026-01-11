'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, personalInfo } from '../../../assets/assets';

// Sample blog post content - In a real app, this would come from a CMS or markdown files
const blogContent = {
    'intro-adversarial-ml': {
        content: `
## What is Adversarial Machine Learning?

Adversarial machine learning is a fascinating intersection of machine learning and cybersecurity. It studies how machine learning models can be fooled, attacked, or manipulated, and how we can defend against such attacks.

### The Basics

At its core, adversarial ML exploits the fact that machine learning models, particularly deep neural networks, can be surprisingly brittle. Small, carefully crafted perturbations to input data—often imperceptible to humans—can cause these models to make drastically wrong predictions.

### Types of Attacks

**1. Evasion Attacks**
These occur at test time, where an attacker modifies inputs to evade detection or cause misclassification.

**2. Poisoning Attacks**
These target the training process, injecting malicious data to corrupt the model's learning.

**3. Model Extraction**
Attackers can steal model functionality through careful querying of APIs.

### Why This Matters

As AI systems are deployed in security-critical applications—from malware detection to autonomous vehicles—understanding these vulnerabilities becomes crucial.

*This is a preview of upcoming content. Full post coming soon.*
        `,
    },
    'llm-security-research': {
        content: `
## The Security Landscape of Large Language Models

Large Language Models represent both unprecedented capabilities and novel security challenges. This post explores the current state of LLM security research.

### Prompt Injection

One of the most discussed vulnerabilities in LLMs is prompt injection—the ability to manipulate model behavior through carefully crafted inputs.

### Jailbreaking

Researchers and attackers alike have developed numerous techniques to bypass safety guardrails in deployed LLMs.

### AI Red Teaming

The emerging field of AI red teaming applies traditional security assessment methodologies to AI systems, identifying vulnerabilities before they can be exploited.

### Defense Strategies

- Input/output filtering
- Constitutional AI approaches
- Adversarial training
- Human oversight

*This is a preview of upcoming content. Full post coming soon.*
        `,
    },
    'mechanistic-interpretability': {
        content: `
## Understanding Neural Networks from the Inside Out

Mechanistic interpretability aims to understand exactly how neural networks compute their outputs—neuron by neuron, layer by layer.

### Why Interpretability Matters

As we deploy AI systems in high-stakes domains, we need to understand:
- What features the model is using
- Why it makes specific decisions
- How to identify and fix failure modes

### Key Techniques

**Activation Patching**
Surgically modifying activations to understand causal relationships.

**Probing**
Training simple classifiers on intermediate representations.

**Circuit Analysis**
Identifying the specific components responsible for particular behaviors.

### Tools and Resources

- TransformerLens
- Baukit
- Our own ClearBox AI toolkit

*This is a preview of upcoming content. Full post coming soon.*
        `,
    },
};

const BlogPostPage = () => {
    const params = useParams();
    const slug = params.slug;

    const post = blogPosts.find(p => p.id === slug);
    const content = blogContent[slug];

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Post Not Found
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        The blog post you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <Link
                        href="/blog"
                        className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/25"
                    >
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

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
                            href="/blog"
                            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                            &larr; All Posts
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-12">
                {/* Post Header */}
                <article>
                    {/* Featured Image */}
                    {post.image && (
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                    )}

                    <header className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                            <span className="text-gray-400 text-sm">
                                {post.readTime} read
                            </span>
                            {!post.published && (
                                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">
                                    Preview
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 pb-8 border-b dark:border-gray-800">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                                {personalInfo.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">
                                    {personalInfo.name}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* Post Content */}
                    <div className="prose dark:prose-invert prose-lg max-w-none">
                        {content ? (
                            <div
                                className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: content.content
                                        .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">$1</h2>')
                                        .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">$1</h3>')
                                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
                                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                                        .replace(/- (.*)/g, '<li class="ml-4">$1</li>')
                                        .replace(/\n\n/g, '</p><p class="mb-4">')
                                }}
                            />
                        ) : (
                            <div className="text-center py-12">
                                <svg className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400 mb-2">
                                    Content Coming Soon
                                </h3>
                                <p className="text-gray-400 dark:text-gray-500">
                                    This post is currently being written. Check back soon!
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="mt-8 pt-8 border-t dark:border-gray-800">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full text-sm border border-gray-200 dark:border-gray-800"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Share */}
                    <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-900">
                        <p className="font-medium text-gray-900 dark:text-white mb-4">
                            Share this post
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-black rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors border border-gray-200 dark:border-gray-800"
                            >
                                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-black rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors border border-gray-200 dark:border-gray-800"
                            >
                                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                {/* Related Posts */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        More Posts
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {blogPosts
                            .filter(p => p.id !== slug)
                            .slice(0, 2)
                            .map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/blog/${relatedPost.id}`}
                                    className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-shadow border border-gray-100 dark:border-gray-900"
                                >
                                    {relatedPost.image && (
                                        <div className="relative h-32 overflow-hidden">
                                            <Image
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">
                                            {relatedPost.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-3 mb-2">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
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

export default BlogPostPage;
