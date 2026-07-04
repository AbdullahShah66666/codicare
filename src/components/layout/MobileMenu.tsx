"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/ui/Logo";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const secondaryLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Toggle open state
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle open/close side effects (scroll lock and keyboard interactions)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Store the active element to restore it later
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Restore focus when closing
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap implementation
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const menuNode = menuRef.current;
    
    // Select all interactive elements within the drawer
    const focusableElements = menuNode.querySelectorAll<HTMLElement>(
      'button, a[href], [tabindex="0"]'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element on open (which is the close button or logo)
    firstElement.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab: loop back to the end
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab: loop to the beginning
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        ref={toggleButtonRef}
        onClick={toggleMenu}
        className="inline-flex items-center justify-center rounded-xl p-2.5 text-primary transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
        }`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-navigation-drawer"
        ref={menuRef}
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-[320px] sm:max-w-sm bg-surface shadow-soft transition-all duration-300 ease-in-out lg:hidden flex flex-col border-l border-subtle/40 ${
          isOpen ? "translate-x-0 visible" : "translate-x-full invisible"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
      >
        {/* Drawer Header (aligned with navbar height) */}
        <div className="flex h-20 items-center justify-between px-6 border-b border-subtle/40 flex-shrink-0">
          <Logo onClick={handleLinkClick} className="scale-90 origin-left" />
          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-primary transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col">
          {/* Main Navigation Links */}
          <nav className="space-y-1.5 flex-shrink-0" aria-label="Mobile links">
            {mainLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3.5 text-base font-semibold transition-all duration-200 ${
                    active
                      ? "bg-primary-light text-accent shadow-sm"
                      : "text-secondary hover:bg-surface-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="my-6 border-t border-subtle/80 flex-shrink-0" />

          {/* Secondary Legal Links */}
          <div className="space-y-1 flex-shrink-0">
            {secondaryLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-primary-light text-accent shadow-sm"
                      : "text-secondary hover:bg-surface-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Spacer to push CTA to bottom */}
          <div className="flex-1 min-h-[40px]" />

          {/* Primary CTA Button */}
          <div className="mt-auto pt-6 flex-shrink-0">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="inline-flex w-full items-center justify-center rounded-full bg-inverse px-5 py-3.5 text-sm font-semibold text-on-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
