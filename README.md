# DuckPal — CS Skill Tree

An interactive, RPG-style skill tree that maps out a Computer Science learning path. Built for the **CodeHS coding challenge**.

**By: Sanam Choudhary**

![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-38bdf8?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646cff?logo=vite&logoColor=white)

---

## Overview

DuckPal presents CS topics as an interactive skill tree — start from **CS Basics** at the top and unlock nodes across 8 branches as you progress. Each node includes a description and curated learning resources. Progress is saved automatically in your browser.

### Skill Branches

| Branch | Nodes | Description |
|---|---|---|
| **Foundations** | 1 | CS Basics — the root of the tree |
| **Web Dev** | 6 | Internet, HTML/CSS, JavaScript, React, APIs, Databases |
| **Python** | 6 | Syntax, Functions, File I/O, Libraries, Projects |
| **Data Analysis** | 4 | Branches from Python — Pandas, Visualization, ML Intro |
| **Algorithms** | 4 | Sorting, Searching, Recursion, Big-O |
| **OOP & Design** | 4 | Classes, Inheritance, Design Patterns |
| **Systems** | 4 | OS Basics, Networking, Memory, Security |
| **Cloud** | 4 | Branches from Systems — VMs, Containers, Deployment |

**33 nodes total.**

## Features

- **Tree-based layout** — root at top-center with branches fanning downward across 7 columns
- **SVG connections** — direction-aware bezier curves between nodes with hover tooltips showing the branch name
- **Three node states** — locked (greyed out), unlocked (pulsing glow), completed (checked)
- **Side panel** — click any unlocked/completed node to view its description and learning resources
- **Progress bar** — track overall completion at the top of the page
- **Persistent progress** — saved to `localStorage`, survives page refreshes
- **Reset button** — clear all progress with a confirmation prompt

## Tech Stack

- **React 19** — component-based UI with hooks
- **Tailwind CSS 4** — utility-first styling via the Vite plugin
- **Vite 7** — fast dev server and build tool
- **localStorage** — client-side persistence (no backend)

## Project Structure

```
skill-tree/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx                  # Main app shell & state management
    ├── main.jsx                 # React entry point
    ├── index.css                # Tailwind import & custom animations
    ├── data/
    │   └── nodes.js             # 33 skill nodes, color palette, node map
    ├── layout/
    │   └── positions.js         # Coordinate map, pixel math, constants
    └── components/
        ├── SkillNode.jsx        # Individual node card
        ├── SvgConnections.jsx   # SVG edges with hover tooltips
        ├── SidePanel.jsx        # Detail panel for selected node
        └── ProgressBar.jsx      # Header progress bar
```

## Getting Started

```bash
# Clone the repo
git clone https://github.com/SanamChoudhary/DuckPal.git
cd DuckPal/skill-tree

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

## License

This project was created for the CodeHS coding challenge.
