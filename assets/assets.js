import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './mahmoud_portfolio.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

// Personal Information
export const personalInfo = {
    name: "Mahmoud E. Shabana",
    title: "Associate AI Security Researcher",
    organization: "Carnegie Mellon University Software Engineering Institute",
    location: "Pittsburgh, PA",
    email: "mshabana@andrew.cmu.edu",
    phone: "+1 (646) 427-8840",
    linkedin: "https://www.linkedin.com/in/mahmoud-e-shabana/",
    github: "https://github.com/mshabana70",
    twitter: "https://twitter.com/_MoMatters",
    seiAuthorPage: "https://www.sei.cmu.edu/authors/mahmoud-shabana/",
    bio: "AI Security Researcher specializing in adversarial machine learning, mechanistic interpretability, and automated vulnerability discovery. Currently leading research initiatives at CMU SEI focused on reverse engineering deep learning systems and developing AI red team evaluation frameworks.",
    shortBio: "Breaking AI systems to make them safer. Principal Investigator at CMU SEI with a $1.8M DoD research grant.",
};

// Research Interests
export const researchInterests = [
    {
        title: "Adversarial Machine Learning",
        description: "Developing and defending against attacks on ML systems, including evasion attacks, data poisoning, and model extraction.",
        icon: "shield"
    },
    {
        title: "AI-driven System Security",
        description: "Analyzing security vulnerabilities in AI-enabled systems, from edge devices to enterprise deployments.",
        icon: "lock"
    },
    {
        title: "Mechanistic Interpretability",
        description: "Understanding the internal mechanisms of neural networks to ensure model safety and alignment.",
        icon: "brain"
    },
    {
        title: "Automated Vulnerability Discovery",
        description: "Building agentic systems for autonomous binary analysis, reverse engineering, and vulnerability research.",
        icon: "search"
    }
];

// Education
export const educationData = [
    {
        institution: "New York University Tandon School of Engineering",
        location: "Brooklyn, NY",
        degree: "Master of Science in Cybersecurity",
        period: "September 2022 - May 2024",
        gpa: "3.90/4.00",
        highlights: ["CyberCorp Scholarship for Service (SFS) Recipient", "NYU OSIRIS CTF Member & CSAW Challenge Developer"]
    },
    {
        institution: "Monmouth University",
        location: "West Long Branch, NJ",
        degree: "Master of Science in Software Engineering",
        period: "September 2020 - January 2022",
        gpa: "3.68/4.00",
        highlights: ["Bill Boylan Student-Athlete Award", "Chi Alpha Sigma Honor Society"]
    }
];

// Research Experience
export const experienceData = [
    {
        title: "Principal Investigator & Associate AI Security Researcher",
        organization: "Carnegie Mellon University Software Engineering Institute",
        location: "Pittsburgh, PA",
        period: "July 2024 - Present",
        type: "research",
        highlights: [
            "Lead a team of six researchers as Principal Investigator to reverse engineer deep learning executables from AI-enabled edge systems",
            "Directed AI Red team auto-evaluation framework using RAG-based LLM evaluation for security risk assessment",
            "Prototyped defensive cyber framework for automated ML-based malware detection for DoD agency",
            "Designed hierarchical agentic reverse engineering platform using GhidraMCP, WinDbg MCP, and Vagrant VMs",
            "Conducted vulnerability research on AI artifacts in modern anti-virus solutions",
            "Selected as technical committee member for Malware Technical Exchange Meeting (MTEM) 2026",
            "Nominated for Newcomer of the Year award 2025"
        ]
    },
    {
        title: "Graduate Student Research Assistant",
        organization: "NYU Tandon - Center for Cybersecurity",
        advisor: "Dr. Brendan Dolan-Gavitt",
        location: "Brooklyn, NY",
        period: "September 2023 - May 2024",
        type: "research",
        highlights: [
            "Fine-tuned open-source LLMs for code evaluation on decompiled output from Ghidra and IDA Pro",
            "Established novel benchmark dataset for evaluating security assessment capabilities of code LLMs",
            "Cross-examined performance against StarCoder, CodeLlama, WizardCoder, and Replit LLM",
            "Presented findings to Carnegie Mellon SEI - CERT Division"
        ]
    },
    {
        title: "Graduate Researcher - Cyber Recon Research Program",
        organization: "United States Cyber Command",
        advisor: "Dr. Travis Trammell",
        location: "Brooklyn, NY",
        period: "November 2022 - April 2023",
        type: "research",
        highlights: [
            "Gathered intelligence on foreign APT organizations targeting US Election Infrastructure",
            "Monitored Iranian APT social media activity using sock puppet accounts and secure OPSEC practices",
            "Analyzed emerging threat of generative AI in amplifying state-sponsored influence operations",
            "Presented findings to cyber professionals at US Cyber Command"
        ]
    },
    {
        title: "Research Assistant - Summer Research Program",
        organization: "Monmouth University",
        location: "West Long Branch, NJ",
        period: "May 2018 - September 2018",
        type: "research",
        highlights: [
            "Analyzed photogrammetric point clouds for infrastructure damage assessment using drone imagery",
            "Conducted comparative analysis of SIFT, ORB, and SURF feature detection algorithms",
            "Co-authored publication in 2019 International Conference on Computer Vision and Graphics (AISC 943)"
        ]
    }
];

// Work Experience
export const workExperience = [
    {
        title: "Reverse Engineering Intern",
        organization: "Johns Hopkins Applied Physics Laboratory (APL)",
        department: "Asymmetric Operations",
        location: "Howard, MD",
        period: "May 2023 - August 2023",
        highlights: [
            "Generalized image classification of PCB components using data augmentation with Keras",
            "Implemented backend CLI application for ML model testing using Python Typer",
            "Researched and replicated CVEs to exploit backdoors on embedded systems",
            "Reversed CAN Bus messages for physical component mapping and remote execution"
        ]
    },
    {
        title: "Software Developer",
        organization: "Broadridge Financial Solutions",
        department: "FXL Product Dev Team",
        location: "Newark, NJ",
        period: "January 2022 - July 2022",
        highlights: [
            "Documented API functions for external users using XML and Swagger YAML",
            "Developed Full-Stack desktop trading application for multi-million dollar clients",
            "Configured interface adapters using C#, .NET HTTP Handlers, and SQL"
        ]
    }
];

// Skills
export const skillsData = {
    programming: ["Python", "C/C++", "JavaScript", "SQL"],
    mlFrameworks: ["PyTorch", "TensorFlow", "Keras", "SciKit-Learn", "Pandas", "vLLM"],
    aiTools: ["Pydantic-AI", "LangChain", "PyRit", "Garak", "CleverHans"],
    securityTools: ["Metasploit", "Pwntools", "Ghidra", "IDA Pro", "WinDbg", "OllyDbg", "AFL++", "Angr", "Wireshark"],
    binaryAnalysis: ["LLVM", "MLIR", "PTX"],
    devOps: ["Docker", "AWS", "Git", "Linux"],
    certifications: [
        { name: "Certified AI Penetration Tester - Red Team (CAIPT-RT)", status: "Active" },
        { name: "OSCP", status: "In Progress" },
        { name: "HackTheBox CPTS", status: "In Progress" }
    ],
    clearance: "TS/SCI"
};

// Featured Projects (from GitHub and resume)
export const projectsData = [
    {
        title: "ClearBox AI",
        description: "Browser-based mechanistic interpretability toolkit for GPT-2. Visualize attention patterns, extract hidden states, and experiment with steering vectors - all running locally via WebGPU.",
        technologies: ["TypeScript", "WebGPU", "React", "Transformers"],
        github: "https://github.com/esamnyu/clearbox_ai",
        category: "Interpretability",
        featured: true,
        image: null // Add project screenshot path here, e.g., "/projects/clearbox-ai.png"
    },
    {
        title: "REA-LLM",
        description: "Fine-tuning open-source Large Language Models for reverse engineering tasks. Evaluates decompiled output from Ghidra and IDA Pro for security assessment.",
        technologies: ["Python", "PyTorch", "Transformers", "Ghidra"],
        github: "https://github.com/mshabana70/REA-LLM",
        category: "AI Security",
        featured: true,
        image: null // Add project screenshot path here
    },
    {
        title: "Gradient Evasion Attacks",
        description: "Implementation of 'Evasion attacks against machine learning at test time' by Biggio et al., 2017. Demonstrates adversarial ML attack techniques.",
        technologies: ["Python", "NumPy", "SciKit-Learn"],
        github: "https://github.com/mshabana70/gradient-evasion-attacks",
        category: "Adversarial ML",
        featured: true,
        image: null // Add project screenshot path here
    },
    {
        title: "Neural Decompilation",
        description: "Research on neural network decompilation - recovering model architectures and weights from compiled executables.",
        technologies: ["Python", "PyTorch", "Binary Analysis"],
        github: "https://github.com/mshabana70/neural-decompilation",
        category: "AI Security",
        featured: true,
        image: null // Add project screenshot path here
    },
    {
        title: "Micrograd",
        description: "A custom Neural Network library for building neural networks from scratch. Educational implementation of autograd and backpropagation.",
        technologies: ["Python", "NumPy"],
        github: "https://github.com/mshabana70/micrograd",
        category: "Deep Learning",
        featured: false,
        image: null // Add project screenshot path here
    },
    {
        title: "AI Red Team Framework",
        description: "RAG-based LLM evaluation framework for identifying and grading security risks in AI systems. Developed in collaboration with CMU.",
        technologies: ["Python", "LangChain", "RAG", "LLMs"],
        category: "AI Security",
        featured: true,
        private: true,
        image: null // Add project screenshot path here
    },
    {
        title: "Agentic Reverse Engineering Platform",
        description: "Hierarchical agentic platform utilizing GhidraMCP, WinDbg MCP, and Vagrant VMs for autonomous binary summarization and sandboxing.",
        technologies: ["Python", "Ghidra", "WinDbg", "Vagrant"],
        category: "Security Tools",
        featured: true,
        private: true,
        image: null // Add project screenshot path here
    }
];

// Awards
export const awardsData = [
    {
        title: "SEI Internal Project Proposal Grant",
        year: "2025",
        description: "Appointed as Principal Investigator for a 2-year research project with $1.8 million in Congressional DoD funding.",
        highlight: true
    },
    {
        title: "SEI Newcomer of the Year Nomination",
        year: "2025",
        description: "Nominated for SEI-wide award highlighting key contributors among new-hires in their first year."
    },
    {
        title: "CyberCorp Scholarship for Service (SFS)",
        year: "2022",
        description: "One of 12 graduate students at NYU Tandon selected for full academic scholarship.",
        highlight: true
    },
    {
        title: "Bill Boylan Student-Athlete Award",
        year: "2021",
        description: "Selected among all senior student-athletes for excellence in leadership, sportsmanship, and scholarship."
    },
    {
        title: "Chi Alpha Sigma Honor Society",
        year: "2020",
        description: "Two-time recipient for outstanding academic and athletic achievement."
    }
];

// Publications
export const publicationsData = [
    {
        title: "Photogrammetric Point Clouds for Infrastructure Damage Assessment",
        venue: "International Conference on Computer Vision and Graphics (AISC 943)",
        year: "2019",
        description: "Analysis of photogrammetric point clouds for infrastructure damage assessment using drone imagery and feature detection algorithms."
    }
];

// Blog Posts (placeholder structure for the blog feature)
export const blogPosts = [
    {
        id: "intro-adversarial-ml",
        title: "Introduction to Adversarial Machine Learning",
        excerpt: "A primer on how machine learning models can be attacked and defended against various adversarial techniques.",
        date: "2026-01-15",
        category: "Adversarial ML",
        tags: ["machine learning", "security", "adversarial attacks"],
        readTime: "8 min",
        published: false,
        image: null // Add blog header image path here, e.g., "/blog/adversarial-ml.png"
    },
    {
        id: "llm-security-research",
        title: "LLM Security: Current Landscape and Future Directions",
        excerpt: "Exploring the security implications of large language models and the emerging field of AI red teaming.",
        date: "2026-01-20",
        category: "AI Security",
        tags: ["LLMs", "red teaming", "security research"],
        readTime: "12 min",
        published: false,
        image: null // Add blog header image path here
    },
    {
        id: "mechanistic-interpretability",
        title: "Mechanistic Interpretability for Model Safety",
        excerpt: "Understanding the internal mechanisms of neural networks to build safer and more aligned AI systems.",
        date: "2026-01-25",
        category: "Interpretability",
        tags: ["interpretability", "model safety", "alignment"],
        readTime: "10 min",
        published: false,
        image: null // Add blog header image path here
    }
];

// Navigation Links
export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" }
];

// Social Links
export const socialLinks = [
    { name: "GitHub", url: "https://github.com/mshabana70", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/mahmoudshabana", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/_MoMatters", icon: "twitter" },
    { name: "Email", url: "mailto:mshabana@andrew.cmu.edu", icon: "mail" }
];
