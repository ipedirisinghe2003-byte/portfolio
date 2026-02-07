/**
 * Utility functions for the Portfolio Application
 */
/**
 * Safely get an element from the DOM
 */
export declare function getElement<T extends HTMLElement>(selector: string): T | null;
/**
 * Safely get all elements matching a selector
 */
export declare function getElements<T extends HTMLElement>(selector: string): NodeListOf<T>;
/**
 * Add event listener with type safety
 */
export declare function addEventListener<K extends keyof HTMLElementEventMap>(element: HTMLElement | Window, event: K, handler: (this: HTMLElement | Window, ev: HTMLElementEventMap[K]) => any): void;
/**
 * Debounce function for performance
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Throttle function for performance
 */
export declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
/**
 * Scroll to element with offset
 */
export declare function scrollToElement(element: HTMLElement, offset?: number): void;
/**
 * Check if element is in viewport
 */
export declare function isInViewport(element: HTMLElement): boolean;
//# sourceMappingURL=utils.d.ts.map