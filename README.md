# React + Vite + Tailwind CSS + shadcn/ui

A modern React application built with Vite, styled with Tailwind CSS, and enhanced with beautiful shadcn/ui components.

## Features

- ⚡ **Vite** - Lightning fast build tool and development server
- ⚛️ **React 18** - Latest React features and hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful and accessible component library
- 🌙 **Dark Mode** - Built-in dark mode support
- 📱 **Responsive** - Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components
│       └── button.jsx
├── lib/
│   └── utils.js      # Utility functions
├── App.jsx           # Main app component
├── index.css         # Global styles with Tailwind
└── main.jsx          # App entry point
```

## Adding More shadcn/ui Components

To add more shadcn/ui components, you can:

1. Visit the [shadcn/ui website](https://ui.shadcn.com/)
2. Copy the component code
3. Place it in `src/components/ui/`
4. Import and use in your components

## Customization

- **Colors**: Modify CSS variables in `src/index.css`
- **Theme**: Update `tailwind.config.js` for custom design tokens
- **Components**: Add new components in `src/components/`

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## License

MIT
