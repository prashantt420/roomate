
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Container from "@/components/ui/container";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Groups", href: "#groups" },
  { label: "Roommates", href: "#roommates" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="roomate-navbar">
      <Container className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="navbar-logo"
          >
            <span className="navbar-logo-text">roomate</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="navbar-desktop"
          >
            <div className="navbar-links">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="navbar-link">
                  {link.label}
                </a>
              ))}
            </div>

            <a href="#profiles" className="navbar-cta">
              <span>Find a Roommate</span>

              <span className="navbar-cta-icon">
                <ArrowUpRight size={20} strokeWidth={3} />
              </span>
            </a>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            className="navbar-mobile-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="navbar-mobile-menu"
            >
              <nav className="navbar-mobile-links">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="navbar-mobile-link"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={18} />
                  </motion.a>
                ))}

                <a
                  href="#profiles"
                  onClick={() => setMobileOpen(false)}
                  className="navbar-mobile-cta"
                >
                  <span>Find a Roommate</span>
                  <ArrowUpRight size={20} />
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
