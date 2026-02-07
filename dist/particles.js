/**
 * Particles Module
 * Handles particle background animation
 */
export class Particles {
    /**
     * Initialize particle background
     */
    static initialize() {
        const config = this.getConfig();
        // Initialize particles if library is available
        if (typeof window.particlesJS !== 'undefined') {
            window.particlesJS('particles-js', config);
        }
    }
    /**
     * Get particles configuration
     */
    static getConfig() {
        return {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#00D4AA' },
                shape: { type: 'circle' },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6C5CE7',
                    opacity: 0.2,
                    width: 1,
                },
                move: { enable: true, speed: 2, direction: 'none', random: true },
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                },
            },
        };
    }
}
//# sourceMappingURL=particles.js.map