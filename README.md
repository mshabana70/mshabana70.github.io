# Mahmoud Shabana - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 15, React 19, and Tailwind CSS 4.

## Features

- Modern purple-themed design with dark mode support
- Responsive layout for all screen sizes
- Static site generation for fast performance
- Blog section with markdown-style content
- Project showcase with category filtering
- Contact form with email integration
- SEO optimized

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build
```

The static site will be exported to the `out/` directory.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── components/        # React components
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Home page
├── assets/                # Asset imports and data
├── public/                # Static assets
└── .github/workflows/     # GitHub Actions for deployment
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the main branch.

## License

MIT License - see [LICENSE](LICENSE) for details.
