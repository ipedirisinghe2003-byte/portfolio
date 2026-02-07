/**
 * Navigation Module
 * Handles header, mobile menu, and navigation interactions
 */
import { getElement, getElements, addEventListener, throttle } from './utils.js';
export class Navigation {
    constructor() {
        this.mobileMenuBtn = getElement('.mobile-menu-btn');
        this.navLinks = getElement('.nav-links');
        this.header = getElement('#header');
    }
    /**
     * Setup mobile menu toggle
     */
    setupMobileMenu() {
        if (!this.mobileMenuBtn || !this.navLinks)
            return;
        this.mobileMenuBtn.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        // Close menu when clicking on a link
        getElements('.nav-links a').forEach((link) => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
    }
    /**
     * Toggle mobile menu visibility
     */
    toggleMobileMenu() {
        if (!this.navLinks || !this.mobileMenuBtn)
            return;
        this.navLinks.classList.toggle('active');
        this.mobileMenuBtn.innerHTML = this.navLinks.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    }
    /**
     * Close mobile menu
     */
    closeMobileMenu() {
        if (!this.navLinks || !this.mobileMenuBtn)
            return;
        this.navLinks.classList.remove('active');
        this.mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    /**
     * Add scroll effect to header
     */
    setupHeaderScroll() {
        if (!this.header)
            return;
        const scrollHandler = throttle(() => {
            if (window.scrollY > 100) {
                this.header.classList.add('scrolled');
            }
            else {
                this.header.classList.remove('scrolled');
            }
        }, 50);
        addEventListener(window, 'scroll', scrollHandler);
    }
    /**
     * Setup smooth scrolling for anchor links
     */
    setupSmoothScroll() {
        getElements('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (targetId === '#')
                    return;
                const targetElement = document.querySelector(targetId);
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
    init() {
        this.setupMobileMenu();
        this.setupHeaderScroll();
        this.setupSmoothScroll();
    }
}
//# sourceMappingURL=navigation.js.map