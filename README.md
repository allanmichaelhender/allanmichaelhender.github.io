# Portfolio Website

A modern, single-screen portfolio website built with React, TypeScript, and Tailwind CSS. Features dynamic background videos, smooth hover interactions, and a clean minimalist design.

## Features

- **Single-screen layout** - No scrolling, everything visible at once
- **Dynamic background** - Project-specific videos with zoom and dimming controls
- **Hover interactions** - Smooth transitions with Framer Motion
- **Responsive design** - Optimized for desktop and mobile
- **Project showcase** - Three projects with detailed descriptions and tech stack tags
- **Contact modal** - Clean popup with contact information

## Tech Stack

- **React + TypeScript** with Vite for fast development and type safety
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth UI animations
- **HTML5 Video** for dynamic background footage

## Setup

1. Clone the repository:

```bash
git clone https://github.com/allanmichaelhender/allanmichaelhender.github.io.git
cd allanmichaelhender.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── LeftPanel.tsx      - Name, social icons, project descriptions
│   ├── RightPanel.tsx     - Project list items
│   ├── Background.tsx     - Dynamic video background
│   ├── ProjectItem.tsx    - Individual project component
│   └── ContactModal.tsx   - Contact information popup
├── data/
│   └── projects.ts        - Project data and metadata
├── App.tsx                - Main application component
└── index.css              - Global styles and animations
```

## Deployment

This site is deployed on GitHub Pages. To deploy:

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages using your preferred method (gh-pages package or GitHub Actions).

## Customization

- **Projects**: Edit `src/data/projects.ts` to add or modify projects
- **Styling**: Modify `src/index.css` for global styles and animations
- **Videos**: Add project videos to the `public/` folder
- **Colors**: Adjust Tailwind config and inline styles for color themes

## License

MIT
