'use client';
import { useState } from 'react';
import Image from 'next/image';
import { assets, personalInfo, socialLinks } from '../../assets/assets';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // For now, this will open the user's email client
        const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
        window.location.href = mailtoLink;

        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Interested in collaboration, research opportunities, or just want to connect? Feel free to reach out.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Let&apos;s Connect
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            I&apos;m always open to discussing new research opportunities, collaborations in AI security,
                            or interesting problems in adversarial machine learning and mechanistic interpretability.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-4 mb-8">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-950 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors border border-gray-100 dark:border-gray-900"
                            >
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                                    <Image src={assets.mail_icon} alt="Email" width={24} height={24} className="dark:invert" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                    <p className="text-gray-900 dark:text-white font-medium">{personalInfo.email}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-900">
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                    <p className="text-gray-900 dark:text-white font-medium">{personalInfo.location}</p>
                                </div>
                            </div>

                            <a
                                href={personalInfo.seiAuthorPage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-950 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors border border-gray-100 dark:border-gray-900"
                            >
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Institution</p>
                                    <p className="text-gray-900 dark:text-white font-medium">CMU SEI Author Page</p>
                                </div>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                                Connect on Social
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900 hover:bg-purple-600 dark:hover:bg-purple-600 text-gray-600 dark:text-gray-400 hover:text-white transition-all border border-gray-200 dark:border-gray-800 hover:border-purple-600"
                                        aria-label={social.name}
                                    >
                                        {social.icon === 'github' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                        )}
                                        {social.icon === 'linkedin' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                        )}
                                        {social.icon === 'twitter' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                        )}
                                        {social.icon === 'mail' && (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 dark:bg-gray-950 rounded-2xl p-8 border border-gray-100 dark:border-gray-900">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                                    placeholder="Hi Mahmoud, I'd like to discuss..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white rounded-xl font-medium transition-colors shadow-lg shadow-purple-600/25"
                            >
                                {status === 'sending' ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        Send Message
                                        <Image src={assets.send_icon} alt="" width={16} height={16} className="invert" />
                                    </>
                                )}
                            </button>

                            {status === 'sent' && (
                                <p className="text-center text-green-600 dark:text-green-400 text-sm">
                                    Your email client should open with the message. If not, please email directly.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
