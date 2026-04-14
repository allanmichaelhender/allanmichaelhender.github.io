# Portfolio Website Implementation Plan

Build a single-screen, hover-based portfolio website using React + TypeScript + Tailwind CSS to showcase 3 projects with dynamic background and content changes.

## Tech Stack

- **React + TypeScript** with Vite for fast development and type safety
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for modern, accessible UI components
- **Framer Motion** for smooth UI animations
- **GitHub Pages** for deployment (static build)

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── LeftPanel.tsx (2/3 width: name, 1-liner, social icons, project descriptions)
│   │   ├── RightPanel.tsx (1/3 width: 3 project list items)
│   │   ├── Background.tsx (dynamic background with project images/videos)
│   │   ├── ContactModal.tsx (contact info popup)
│   │   └── ProjectItem.tsx (individual project in right panel)
│   ├── data/
│   │   └── projects.ts (project data with descriptions, images, videos)
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Implementation Steps

1. **Initialize project**
   - Create new GitHub repo named `portfolio-new`
   - Clone to `C:\Users\allan\CascadeProjects\portfolio`
   - Initialize Vite + React + TypeScript
   - Install dependencies: Tailwind CSS, shadcn/ui, Framer Motion, Lucide icons

2. **Setup Tailwind CSS**
   - Configure Tailwind with custom colors and fonts
   - Add base styles and animations

3. **Create data structure**
   - Define TypeScript interface for projects (title, brief description, full description, images/videos, links)
   - Create project data for 3 projects

4. **Build components**
   - LeftPanel (2/3 width): name + 1-liner at top, social icons at bottom, displays full project description on hover
   - RightPanel (1/3 width): column with 3 project items with brief descriptions
   - Background: dynamic background that changes to project images/videos on hover
   - ContactModal: popup with full contact info and spelled-out social/email links
   - ProjectItem: individual project in right panel with hover state

5. **Add hover interactions**
   - Hover over project item: background changes to project content, LeftPanel shows full description
   - Smooth transitions with Framer Motion
   - Contact button opens modal

6. **Configure GitHub Pages deployment**
   - Update Vite config for GitHub Pages base path (root path `/` for user site)
   - Add build script to package.json
   - **Final step**: Rename existing repo `allanmichaelhender.github.io` to `allanmichaelhender.github.io-old`, rename `portfolio-new` to `allanmichaelhender.github.io`, push and deploy

## Design Approach

- **Single-screen layout**: No scrolling, everything visible at once
- **Left panel (2/3 width)**: Name + 1-liner centered, social icons (LinkedIn, GitHub, email) at bottom
- **Right panel (1/3 width)**: Column with 3 project items, each with brief description
- **Dynamic background**: Changes to project images/videos on hover
- **Hover interaction**: When hovering a project, left panel shows full description, background shows project content
- **Contact modal**: Button opens popup with full contact info and spelled-out social/email links
- **Pure black background** (#000) with **purple accent color**
- **Minimal typography**: 2 typefaces, 2 sizes max - bold titles, clean interface text
- Title: "Software Engineering, AI & ML"
- **Objective design**: Focus on content, not distracting from projects
- Clean, brutalist simplicity
- Subtle animations that enhance without distracting
- Responsive design: stacks vertically on mobile
- Accessible color contrasts and keyboard navigation
- **3 projects**: Each with brief description (right panel) and full description (shown on hover)

## Design References

- https://v4.brittanychiang.com/
- https://geofflevy.com/
