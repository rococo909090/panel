# Panel Beating Learning Platform

An interactive learning website for automotive panel beating that emphasizes hands-on, interactive learning experiences.

## Features

- **Interactive Tutorials**: Step-by-step guides with clickable elements, tool selectors, and progress tracking
- **Video Library**: Embedded video player with YouTube integration and note-taking capabilities
- **Interactive Demonstrations**: Drag-and-drop tool matching, clickable car diagrams, and virtual tool selectors
- **Quizzes & Assessments**: Multiple question types with immediate feedback and progress tracking
- **Tools & Calculators**: Practical calculators for damage assessment, cost estimation, material calculation, and time estimation
- **Before/After Gallery**: Interactive slider comparisons showing real repair projects

## Technology Stack

- React 18
- React Router for navigation
- Framer Motion for animations
- React Icons for iconography
- Vite for build tooling
- CSS Modules for styling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
panel/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Layout/      # Header, Footer, Navigation
│   │   ├── Tutorials/   # Tutorial components
│   │   ├── Videos/      # Video player components
│   │   ├── Interactive/ # Interactive demo components
│   │   ├── Quizzes/     # Quiz components
│   │   ├── Tools/       # Calculator components
│   │   └── Gallery/     # Gallery components
│   ├── pages/           # Page components
│   ├── data/            # Content data files
│   ├── hooks/           # Custom React hooks
│   └── App.jsx          # Main app component
└── package.json
```

## Key Features Explained

### Interactive Learning

All sections emphasize interaction:
- Click to reveal information
- Drag and drop matching exercises
- Interactive diagrams with clickable areas
- Real-time calculators with instant feedback
- Progress tracking across all sections

### Progress System

The app tracks:
- Completed tutorials
- Quiz scores
- Completed interactive demos
- Overall learning progress

All progress is saved to local storage.

## License

MIT

