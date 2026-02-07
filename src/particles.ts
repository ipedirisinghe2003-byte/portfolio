/**
 * Particles Module
 * Handles particle background animation
 */

interface ParticlesConfig {
  particles: {
    number: { value: number; density: { enable: boolean; value_area: number } };
    color: { value: string };
    shape: { type: string };
    opacity: { value: number; random: boolean };
    size: { value: number; random: boolean };
    line_linked: {
      enable: boolean;
      distance: number;
      color: string;
      opacity: number;
      width: number;
    };
    move: { enable: boolean; speed: number; direction: string; random: boolean };
  };
  interactivity: {
    detect_on: string;
    events: {
      onhover: { enable: boolean; mode: string };
      onclick: { enable: boolean; mode: string };
    };
  };
}

export class Particles {
  /**
   * Initialize particle background
   */
  static initialize(): void {
    const config = this.getConfig();

    // Initialize particles if library is available
    if (typeof (window as any).particlesJS !== 'undefined') {
      (window as any).particlesJS('particles-js', config);
    }
  }

  /**
   * Get particles configuration
   */
  private static getConfig(): ParticlesConfig {
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
