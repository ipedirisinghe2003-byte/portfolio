/**
 * Navigation Module
 * Handles header, mobile menu, and navigation interactions
 */
export declare class Navigation {
    private mobileMenuBtn;
    private navLinks;
    private header;
    constructor();
    /**
     * Setup mobile menu toggle
     */
    setupMobileMenu(): void;
    /**
     * Toggle mobile menu visibility
     */
    private toggleMobileMenu;
    /**
     * Close mobile menu
     */
    private closeMobileMenu;
    /**
     * Add scroll effect to header
     */
    setupHeaderScroll(): void;
    /**
     * Setup smooth scrolling for anchor links
     */
    setupSmoothScroll(): void;
    /**
     * Initialize all navigation features
     */
    init(): void;
}
//# sourceMappingURL=navigation.d.ts.map