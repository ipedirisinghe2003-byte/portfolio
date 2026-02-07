# Project Structure Documentation

This document describes the TypeScript project structure and organization.

## Directory Layout

```
imasha/
├── src/                          # Source TypeScript files
│   ├── main.ts                  # Main entry point - Application orchestrator
│   ├── navigation.ts            # Navigation and header functionality
│   ├── animations.ts            # Animation and scroll effects
│   ├── contact.ts               # Contact form handling
│   ├── particles.ts             # Particle background initialization
│   ├── utils.ts                 # Utility functions and helpers
│   └── styles.css               # Global styles (extracted from HTML)
│
├── dist/                         # Compiled output (auto-generated)
│   ├── main.js                  # Compiled main module
│   ├── main.js.map              # Source map for debugging
│   ├── navigation.js            # Compiled navigation module
│   ├── animations.js            # Compiled animations module
│   ├── contact.js               # Compiled contact module
│   ├── particles.js             # Compiled particles module
│   ├── utils.js                 # Compiled utilities
│   └── *.d.ts / *.d.ts.map      # TypeScript declaration files
│
├── images/                       # Assets folder
│   ├── profile.jpeg             # Profile photo
│   ├── resume.pdf               # Resume document
│   ├── ai.pdf                   # AI Certificate
│   ├── ml.pdf                   # Machine Learning Certificate
│   ├── fe.pdf                   # Frontend Development Certificate
│   └── ... (other certificates and PDFs)
│
├── index.html                    # Main HTML file
├── package.json                  # NPM configuration
├── tsconfig.json                 # TypeScript configuration
├── README.md                      # Project overview
├── STRUCTURE.md                   # This file
└── .gitignore                     # Git ignore rules

```

## Module Breakdown

### `src/main.ts` - Application Entry Point
The main orchestrator that:
- Initializes all module instances
- Coordinates module initialization
- Handles page ready events
- Provides console logging for debugging

**Key Classes:**
- `PortfolioApp` - Main application class

### `src/navigation.ts` - Navigation Module
Handles all navigation-related features:
- Mobile menu toggle
- Header scroll effects
- Smooth scrolling for anchor links
- Responsive navigation

**Key Classes:**
- `Navigation` - Navigation functionality manager

**Methods:**
- `setupMobileMenu()` - Mobile menu toggle functionality
- `setupHeaderScroll()` - Header scroll effect
- `setupSmoothScroll()` - Anchor link smooth scrolling

### `src/animations.ts` - Animations Module
Manages all animation effects:
- Intersection Observer for scroll animations
- Typewriter effect for hero section
- Element animation triggers

**Key Classes:**
- `Animations` - Animation manager

**Methods:**
- `setupScrollAnimations()` - Scroll-triggered animations
- `setupTypewriterEffect()` - Hero section typewriter effect

### `src/contact.ts` - Contact Module
Handles contact form functionality:
- Form submission handling
- Input validation
- User feedback

**Key Classes:**
- `Contact` - Contact form manager

**Methods:**
- `setupContactForm()` - Form setup
- `handleSubmit()` - Form submission logic
- `validateForm()` - Input validation

### `src/particles.ts` - Particles Module
Initializes particle background animation:
- Particles.js configuration
- Static initialization method

**Key Classes:**
- `Particles` - Particle animation manager

**Methods:**
- `initialize()` - Initialize particle animation
- `getConfig()` - Get particles configuration

### `src/utils.ts` - Utilities Module
Reusable utility functions:
- DOM element selection helpers
- Event listener utilities
- Debounce and throttle functions
- Scroll and viewport helpers

**Exported Functions:**
- `getElement<T>()` - Get single DOM element with type safety
- `getElements<T>()` - Get multiple DOM elements
- `addEventListener<K>()` - Add event listener with typing
- `debounce<T>()` - Debounce function
- `throttle<T>()` - Throttle function
- `scrollToElement()` - Smooth scroll to element
- `isInViewport()` - Check if element is in viewport

### `src/styles.css` - Global Styles
All project styles extracted from HTML:
- CSS variables for theming
- Component styles (buttons, cards, etc.)
- Layout and grid styles
- Animation keyframes
- Responsive media queries
- Dark theme styling

## Build Process

### TypeScript Compilation
```bash
npm run build
```
Compiles all `.ts` files in `src/` to JavaScript in `dist/`

### Watch Mode
```bash
npm run watch
```
Continuously watches for changes and recompiles

### Development Server
```bash
npm run dev
```
Compiles and starts a local HTTP server on port 8000

## Import/Export Pattern

Modules use ES2020 modules:

```typescript
// Importing from another module
import { Navigation } from './navigation';
import { getElement } from './utils';

// Exporting from module
export class MyClass { }
export function myFunction() { }
```

## Type Safety

All modules include:
- Full TypeScript type annotations
- Interface definitions for complex objects
- Proper return type declarations
- Parameter type specifications

Example:
```typescript
setupContactForm(element: HTMLFormElement): void {
    // Implementation
}
```

## Performance Optimizations

1. **Debouncing** - Scroll events use debounce
2. **Throttling** - Resize events use throttle
3. **Lazy Loading** - Intersection Observer for animations
4. **Module Splitting** - Code separated into functional modules
5. **Source Maps** - Debug compiled code easily

## HTML Integration

The HTML file references:
- External CSS: `<link rel="stylesheet" href="src/styles.css">`
- Compiled JS: `<script type="module" src="dist/main.js"></script>`
- Third-party libraries via CDN (Font Awesome, Google Fonts, Particles.js)

## Adding New Features

To add a new feature:

1. **Create a new module** in `src/`
   ```typescript
   export class MyFeature {
       init(): void { }
   }
   ```

2. **Import in main.ts**
   ```typescript
   import { MyFeature } from './my-feature';
   ```

3. **Initialize in PortfolioApp**
   ```typescript
   const myFeature = new MyFeature();
   myFeature.init();
   ```

4. **Rebuild**
   ```bash
   npm run build
   ```

## Debugging

1. **Source Maps** - Compiled files include `.js.map` files
2. **Console Logging** - `main.ts` logs initialization
3. **Browser DevTools** - Open with F12 and check Console tab
4. **Watch Mode** - Use `npm run watch` during development

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- **TypeScript** - Compiled to JavaScript
- **Particles.js** - Animated background (CDN)
- **Font Awesome** - Icons (CDN)
- **Google Fonts** - Typography (CDN)

## Version Control

Common git operations:

```bash
# Ignore compiled files
dist/
node_modules/

# Track source files
src/
index.html
package.json
tsconfig.json
```

---

**Last Updated:** February 3, 2026
