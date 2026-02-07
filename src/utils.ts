/**
 * Utility functions for the Portfolio Application
 */

/**
 * Safely get an element from the DOM
 */
export function getElement<T extends HTMLElement>(
  selector: string
): T | null {
  return document.querySelector<T>(selector);
}

/**
 * Safely get all elements matching a selector
 */
export function getElements<T extends HTMLElement>(
  selector: string
): NodeListOf<T> {
  return document.querySelectorAll<T>(selector);
}

/**
 * Add event listener with type safety
 */
export function addEventListener<K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Window,
  event: K,
  handler: (this: HTMLElement | Window, ev: HTMLElementEventMap[K]) => any
): void {
  (element as any).addEventListener(event, handler as EventListener);
}

/**
 * Debounce function for performance
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function (...args: Parameters<T>): void {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, wait);
  };
}

/**
 * Throttle function for performance
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;

  return function (...args: Parameters<T>): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Scroll to element with offset
 */
export function scrollToElement(
  element: HTMLElement,
  offset: number = 100
): void {
  window.scrollTo({
    top: element.offsetTop - offset,
    behavior: 'smooth',
  });
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}
