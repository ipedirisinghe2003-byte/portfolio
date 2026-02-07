/**
 * Animations Module
 * Handles all animations and interactive effects
 */
import { getElement, getElements } from './utils.js';
export class Animations {
    /**
     * Setup intersection observer for scroll animations
     */
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);
        // Observe elements to animate
        getElements('.project-card, .skill-category, .cert-card, .timeline-item, .mobile-app-card, .highlight-card').forEach((el) => {
            observer.observe(el);
        });
    }
    /**
     * Setup typewriter effect for hero subtitle
     */
    setupTypewriterEffect() {
        const heroSubtitle = getElement('.hero-subtitle');
        if (!heroSubtitle)
            return;
        const text = 'Software Engineer & IT Undergraduate';
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                heroSubtitle.innerHTML = text.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, 50);
            }
        };
        // Start typewriter effect after page loads
        window.addEventListener('load', () => {
            setTimeout(typeWriter, 1000);
        });
    }
    /**
     * Initialize all animations
     */
    init() {
        this.setupScrollAnimations();
        this.setupTypewriterEffect();
    }
}
//# sourceMappingURL=animations.js.map