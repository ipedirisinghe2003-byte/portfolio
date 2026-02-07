/**
 * Navigation Module
 * Handles header, mobile menu, and navigation interactions
 */

import { getElement, getElements, addEventListener, throttle } from './utils.js';

export class Navigation {
  private mobileMenuBtn: HTMLElement | null;
  private navLinks: HTMLElement | null;
  private header: HTMLElement | null;

  constructor() {
    this.mobileMenuBtn = getElement<HTMLElement>('.mobile-menu-btn');
    this.navLinks = getElement<HTMLElement>('.nav-links');
    this.header = getElement<HTMLElement>('#header');
  }

  /**
   * Setup mobile menu toggle
   */
  setupMobileMenu(): void {
    if (!this.mobileMenuBtn || !this.navLinks) return;

    this.mobileMenuBtn.addEventListener('click', () => {
      this.toggleMobileMenu();
    });

    // Close menu when clicking on a link
    getElements<HTMLAnchorElement>('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });
  }

  /**
   * Toggle mobile menu visibility
   */
  private toggleMobileMenu(): void {
    if (!this.navLinks || !this.mobileMenuBtn) return;

    this.navLinks.classList.toggle('active');
    this.mobileMenuBtn.innerHTML = this.navLinks.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  }

  /**
   * Close mobile menu
   */
  private closeMobileMenu(): void {
    if (!this.navLinks || !this.mobileMenuBtn) return;

    this.navLinks.classList.remove('active');
    this.mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }

  /**
   * Add scroll effect to header
   */
  setupHeaderScroll(): void {
    if (!this.header) return;

    const scrollHandler = throttle(() => {
      if (window.scrollY > 100) {
        this.header!.classList.add('scrolled');
      } else {
        this.header!.classList.remove('scrolled');
      }
    }, 50);

    addEventListener(window, 'scroll' as any, scrollHandler);
  }

  /**
   * Setup smooth scrolling for anchor links
   */
  setupSmoothScroll(): void {
    getElements<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();

        const targetId = anchor.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector<HTMLElement>(
          targetId as string
        );
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  /**
   * Initialize all navigation features
   */
  init(): void {
    this.setupMobileMenu();
    this.setupHeaderScroll();
    this.setupSmoothScroll();
  }
}
