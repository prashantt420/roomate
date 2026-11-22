"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Heart,
} from "lucide-react";

const footerLinks = {
  Explore: [
    { label: "Find roommates", href: "#roommates" },
    { label: "Find a group", href: "#groups" },
    { label: "Find a home", href: "#homes" },
  ],
  Company: [
    { label: "About us", href: "#about" },
    { label: "Our mission", href: "#mission" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy policy", href: "#privacy" },
    { label: "Terms of service", href: "#terms" },
  ],
};

export default function FooterSection() {
  return (
    <footer className="roomate-footer">
      {/* CTA SECTION */}
      <section className="footer-cta">
        <div className="footer-cta-inner">
          <div className="footer-cta-label">
            <span className="footer-label-dot" />
            YOUR NEXT CHAPTER STARTS HERE
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Good homes start
            <br />
            <span>with good people.</span>
          </motion.h2>

          <p className="footer-cta-description">
            Meet people who get your lifestyle. Build your group.
            Find a place that feels like home.
          </p>

          <div className="footer-cta-actions">
            <Link href="/signup" className="footer-button-primary">
              Get started
              <ArrowUpRight size={20} />
            </Link>

            <Link href="#roommates" className="footer-button-secondary">
              Explore ROOMATE
            </Link>
          </div>

          <div className="footer-cta-decoration footer-cta-star">
            +
          </div>

          <div className="footer-cta-decoration footer-cta-circle">
            <span>FIND</span>
            <span>YOUR</span>
            <span>PEOPLE</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="footer-logo-symbol">r.</span>
              <span>roomate</span>
            </Link>

            <p>
              Finding a home is easier when you find
              the right people first.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                Instagram
              </a>

              <a href="#" aria-label="Twitter">
                Twitter
              </a>
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div className="footer-link-column" key={category}>
                <h4>{category}</h4>

                {links.map((link) => (
                  <Link href={link.href} key={link.label}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ROOMATE. All rights reserved.</p>

          <div className="footer-bottom-right">
            <span>Made for finding your people</span>
            <Heart size={14} fill="currentColor" />
          </div>
        </div>
      </div>
    </footer>
  );
}