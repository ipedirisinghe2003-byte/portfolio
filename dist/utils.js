/**
 * Utility functions for the Portfolio Application
 */
/**
 * Safely get an element from the DOM
 */
export function getElement(selector) {
    return document.querySelector(selector);
}
/**
 * Safely get all elements matching a selector
 */
export function getElements(selector) {
    return document.querySelectorAll(selector);
}
/**
 * Add event listener with type safety
 */
export function addEventListener(element, event, handler) {
    element.addEventListener(event, handler);
}
/**
 * Debounce function for performance
 */
export function debounce(func, wait) {
    let timeout = null;
    return function (...args) {
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
export function throttle(func, limit) {
    let inThrottle = false;
    return function (...args) {
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
export function scrollToElement(element, offset = 100) {
    window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
    });
}
/**
 * Check if element is in viewport
 */
export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth);
}
//# sourceMappingURL=utils.js.map