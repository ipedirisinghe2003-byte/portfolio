/**
 * Portfolio Application - Main Entry Point
 * Orchestrates all modules and initializes the application
 */

import { Navigation } from './navigation.js';
import { Animations } from './animations.js';
import { Contact } from './contact.js';
import { Particles } from './particles.js';

/**
 * Main application class
 */
class PortfolioApp {
  private navigation: Navigation;
  private animations: Animations;
  private contact: Contact;

  constructor() {
    this.navigation = new Navigation();
    this.animations = new Animations();
    this.contact = new Contact();
  }

  /**
   * Initialize the entire application
   */
  init(): void {
    // Initialize particles background
    Particles.initialize();

    // Initialize navigation
    this.navigation.init();

    // Initialize animations
    this.animations.init();

    // Initialize contact form
    this.contact.init();

    console.log('Portfolio application initialized successfully!');
  }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp();
  app.init();
});
