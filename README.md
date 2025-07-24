# 🚀 Modern Developer Portfolio

> A visually stunning, interactive portfolio built with cutting-edge web technologies. Showcases projects with smooth animations, modern UI/UX design, and responsive layouts that adapt to any device.

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-FF6B6B?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## 🌟 Live Demo

**[View Portfolio →](https://your-portfolio-url.com)**

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

### 🎨 **Visual Excellence**
- **Glassmorphism UI** with modern blur effects and transparency
- **Dark/Light Mode** toggle with smooth transitions
- **Micro-interactions** that delight users
- **Gradient backgrounds** and hover effects
- **Responsive design** that works on all devices

### 🚀 **Performance & Animations**
- **Framer Motion** powered animations with 60fps performance
- **Lazy loading** for images and components
- **Optimized bundle** size with Next.js 14+ App Router
- **Smooth page transitions** and scroll animations
- **Progressive loading** states

### 📱 **Interactive Components**
- **Animated project cards** with hover states
- **Modal dialogs** with rich project details
- **Tech stack badges** with color coding
- **Key metrics visualization** with icons
- **Timeline animations** for experience section

### 🔧 **Developer Experience**
- **TypeScript** for type safety
- **ESLint & Prettier** for code quality
- **Modular architecture** for easy maintenance
- **Custom hooks** for reusable logic
- **Context providers** for state management

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 18** - Latest React with concurrent features

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Production-ready motion library
- **Lucide Icons** - Beautiful & consistent icons

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **PostCSS** - CSS processing


## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pawandasila/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checks
```

## 📁 Project Structure

```
portfolio-nextjs/
├── 📁 public/                 # Static assets
│   ├── 📁 images/            # Project images
│   ├── 📁 icons/             # Custom icons
│   └── 📁 screenshots/       # README screenshots
├── 📁 src/                   # Source code
│   ├── 📁 app/               # Next.js app directory
│   │   ├── 📁 globals.css    # Global styles
│   │   ├── 📁 layout.tsx     # Root layout
│   │   └── 📁 page.tsx       # Home page
│   ├── 📁 components/        # Reusable components
│   │   ├── 📁 ui/            # shadcn/ui components
│   │   ├── 📁 layout/        # Layout components
│   │   └── 📁 common/        # Common components
│   ├── 📁 sections/          # Page sections
│   │   ├── 📄 Hero.tsx       # Hero section
│   │   ├── 📄 Projects.tsx   # Projects showcase
│   │   ├── 📄 About.tsx      # About section
│   │   └── 📄 Contact.tsx    # Contact section
│   ├── 📁 lib/               # Utility functions
│   │   ├── 📄 utils.ts       # Common utilities
│   │   └── 📄 constants.ts   # App constants
│   ├── 📁 hooks/             # Custom React hooks
│   ├── 📁 contexts/          # React contexts
│   └── 📁 types/             # TypeScript types
├── 📄 tailwind.config.js     # Tailwind configuration
├── 📄 next.config.js         # Next.js configuration
├── 📄 tsconfig.json          # TypeScript configuration
├── 📄 package.json           # Dependencies
└── 📄 README.md              # This file
```

## 🎨 Customization

### Adding New Projects

1. **Edit the projects data** in `src/lib/constants.ts`:
   ```typescript
   export const projects = [
     {
       id: 1,
       title: "Your Project Name",
       description: "Brief description of your project",
       year: "2024",
       company: "Your Company",
       image: "/images/your-project.jpg",
       technologies: ["React", "TypeScript", "Tailwind"],
       keyResults: [
         { icon: "TrendingUp", text: "50% performance improvement" },
         { icon: "Users", text: "10k+ active users" }
       ],
       highlights: ["Feature 1", "Feature 2", "Feature 3"],
       liveUrl: "https://your-project.com",
       sourceUrl: "https://github.com/username/project"
     }
   ];
   ```

2. **Add project images** to the `public/images/` directory

3. **Update the Projects component** in `src/sections/Projects.tsx` if needed

### Customizing Colors & Theme

1. **Edit Tailwind configuration** in `tailwind.config.js`:
   ```javascript
   module.exports = {
     theme: {
       extend: {
         colors: {
           primary: {
             50: '#your-color-50',
             // ... other shades
           }
         }
       }
     }
   }
   ```

2. **Update CSS variables** in `src/app/globals.css`:
   ```css
   :root {
     --primary: 210 40% 98%;
     --primary-foreground: 222.2 47.4% 11.2%;
     /* ... other variables */
   }
   ```

### Adding New Sections

1. **Create a new section component** in `src/sections/`
2. **Import and use** in `src/app/page.tsx`
3. **Add navigation** if needed in the header component

## 🌐 Deployment

### Vercel (Recommended)

1. **Push your code** to GitHub
2. **Connect your repository** on [Vercel](https://vercel.com)
3. **Deploy automatically** with zero configuration

### Netlify

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```
2. **Deploy the `out` folder** to Netlify

### Self-Hosting

1. **Build for production**
   ```bash
   npm run build
   ```
2. **Start the production server**
   ```bash
   npm run start
   ```

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3.5s

### Optimization Features
- Image optimization with Next.js Image component
- Automatic code splitting
- Prefetching for faster navigation
- Lazy loading for improved performance
- Optimized fonts with next/font

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Motion library for React
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [Vercel](https://vercel.com/) - Platform for frontend frameworks

## 📬 Contact & Support

- **Portfolio**: [View Portfolio](https://portfolio-sandy-seven-32.vercel.app/)
- **GitHub**: [@Pawandasila](https://github.com/Pawandasila)
- **Email**: dasilapawan.dev@gmai.com
- **LinkedIn**: [Pawan Dasila](https://www.linkedin.com/in/pawan-dasila-92483b251/)

### Get Help
- 🐛 **Bug Reports**: [Create an issue](https://github.com/Pawandasila/portfolio/issues)
- 💡 **Feature Requests**: [Start a discussion](https://github.com/Pawandasila/portfolio/discussions)
- 📖 **Documentation**: [Visit the Wiki](https://github.com/Pawandasila/portfolio/wiki)

---

⭐ **Star this repo** if you find it helpful!

Made with ❤️ by [Pawan Dasila](https://github.com/Pawandasila)