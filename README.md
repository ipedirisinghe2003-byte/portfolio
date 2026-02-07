# Prashadi's Portfolio - TypeScript Project

A modern, responsive personal portfolio website built with HTML, CSS, and TypeScript.

## Project Structure

```
imasha/
├── src/
│   └── main.ts              # Main TypeScript application file
├── dist/                    # Compiled JavaScript (generated after build)
│   └── main.js
├── images/                  # PDF certificates and profile photo
├── index.html               # Main HTML file
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Features

- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎨 Modern gradient UI with dark theme
- 🚀 TypeScript for type-safe code
- 📊 Interactive particles background
- 📱 Mobile-friendly navigation menu
- 💼 Project portfolio section
- 📚 Education and certifications showcase
- 🎯 Contact form
- ⌨️ Typewriter effect on hero section

## Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - comes with Node.js

## Installation

1. Navigate to the project directory:
   ```bash
   cd "c:\Users\mkuru\OneDrive\Desktop\imasha"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Build & Development

### Compile TypeScript to JavaScript

```bash
npm run build
```

This generates the `dist/main.js` file from the TypeScript source.

### Watch Mode (Auto-compile on file changes)

```bash
npm run watch
```

This continuously watches for changes in the `src/` directory and automatically recompiles.

### Development Server

```bash
npm run dev
```

This builds the project and starts a local web server on `http://localhost:8000`.

## How It Works

The project uses **TypeScript** to provide type safety and better code organization:

1. **src/main.ts** - Contains the `PortfolioApp` class with all interactive features
2. **tsconfig.json** - Configures how TypeScript compiles to JavaScript
3. **dist/main.js** - The compiled JavaScript file (auto-generated)
4. **index.html** - Imports the compiled script using `<script type="module" src="dist/main.js"></script>`

## Key TypeScript Classes & Methods

### PortfolioApp Class

- `initializeParticles()` - Initialize animated particle background
- `setupMobileMenu()` - Handle mobile menu toggle
- `setupHeaderScroll()` - Add scroll effect to header
- `setupContactForm()` - Handle form submission
- `setupSmoothScroll()` - Enable smooth scrolling for anchor links
- `setupScrollAnimations()` - Add animations on scroll
- `setupTypewriterEffect()` - Typewriter effect on hero section
- `init()` - Initialize all features

## File Paths

All PDF certificates and profile images are stored in the `images/` folder:

- `images/profile.jpeg` - Profile photo
- `images/resume.pdf` - Resume
- `images/ai.pdf` - AI Certificate
- `images/ml.pdf` - Machine Learning Certificate
- `images/fe.pdf` - Frontend Development Certificate
- `images/pm.pdf` - Project Management Certificate
- `images/IBM.pdf` - IBM Certificate
- `images/sliit2.pdf` - SLIIT AI/ML Certificate
- And other certificates...

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **TypeScript** - Type-safe JavaScript
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES2020+)** - Modern JavaScript features
- **Particles.js** - Animated particle background

## Performance

- Minified and optimized TypeScript compilation
- Source maps for debugging (in development)
- Efficient event listeners and DOM manipulation
- Lazy loading with Intersection Observer API

## Customization

### Modify Colors

Edit the CSS variables in `index.html`:

```css
:root {
    --primary: #00D4AA;
    --primary-dark: #00B894;
    --secondary: #6C5CE7;
    --accent: #FF7675;
    /* ... other colors ... */
}
```

### Update Portfolio Content

Edit the HTML sections in `index.html` to add/modify:
- Projects
- Certifications
- Education
- Skills
- Contact information

### Extend TypeScript

Add new methods to the `PortfolioApp` class in `src/main.ts` and rebuild.

## Troubleshooting

### "dist/main.js not found"
Solution: Run `npm run build` first to compile TypeScript.

### Particles not showing
Solution: Make sure particles.js CDN link is active and particles-js div exists in HTML.

### Form submission not working
Solution: Ensure `index.html` loads the compiled `dist/main.js` file with `<script type="module">`.

## Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Implement email sending functionality
- [ ] Add blog section
- [ ] Create project detail pages
- [ ] Add testimonials section
- [ ] Implement analytics tracking

## License

MIT License - Feel free to use this template for your own portfolio!

## Support

For issues or questions, feel free to reach out through the contact form on the portfolio.

---

**Happy coding!** 🚀
