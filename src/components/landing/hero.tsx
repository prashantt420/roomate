
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart, MapPin, Sparkles, Users } from "lucide-react";
import Container from "@/components/ui/container";

const floatingTransition = {
  duration: 5,
  repeat: Infinity,
  repeatType: "reverse" as const,
  ease: "easeInOut" as const,
};

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-lime" />
      <div className="hero-bg-pink" />

      <Container className="hero-container">
        <div className="hero-layout">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-content"
          >
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              <span>Roommate finding, reimagined</span>
            </div>

            <h1 className="hero-heading">
              Find your
              <br />
              people.
              <br />
              Find your
              <br />
              <span className="hero-place">place.</span>
            </h1>

            <p className="hero-description">
              Finding a home is one thing. Finding the people you actually want
              to live with is another. Let's make both happen.
            </p>

            <div className="hero-actions">
              <a
                href="#profiles"
                className="roomate-button roomate-button-pink hero-primary-button group"
              >
                Find your Roomate
                <span className="hero-button-icon">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={3}
                    className="transition-transform group-hover:rotate-45"
                  />
                </span>
              </a>

              <a
                href="#groups"
                className="roomate-button roomate-button-light hero-secondary-button"
              >
                How it works
              </a>
            </div>

            {/* Social proof */}
            <div className="hero-social-proof">
              <div className="hero-avatar-stack">
                {[
                  "photo-1534528741775-53994a69daeb",
                  "photo-1500648767791-00dcc994a43e",
                  "photo-1531123897727-8f129e1688ce",
                  "photo-1506794778202-cad84cf45f1d",
                ].map((photo) => (
                  <div key={photo} className="hero-avatar">
                    <img
                      src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=100&q=80`}
                      alt=""
                    />
                  </div>
                ))}
              </div>

              <div className="hero-social-text">
                <p className="hero-social-title">Better people. Better living.</p>
                <p className="hero-social-subtitle">
                  Your next chapter starts here.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL - DESKTOP ONLY */}
          <div className="hero-visual">

            {/* Main photo card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-photo-card"
            >
              <div className="hero-photo-inner">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=90"
                  alt="Friends spending time together"
                  className="hero-main-image"
                />

                <div className="hero-photo-overlay">
                  <p className="hero-photo-eyebrow">
                    The right people change everything
                  </p>
                  <h2>
                    Life is better
                    <br />
                    together.
                  </h2>
                </div>
              </div>

              {/* Floating profile label */}
              <div className="hero-flatmates-card">
                <div className="hero-flatmates-header">
                  <Users size={19} strokeWidth={2.5} />
                  <span>Your future flatmates</span>
                </div>
                <p>Still strangers. Soon your people.</p>
              </div>
            </motion.div>

            {/* Match card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={floatingTransition}
              className="hero-match-card"
            >
              <div className="hero-match-header">
                <div className="hero-heart-icon">
                  <Heart size={17} fill="black" />
                </div>
                <div>
                  <p className="hero-match-label">Compatibility</p>
                  <p className="hero-match-value">96% Match</p>
                </div>
              </div>

              <div className="hero-match-tags">
                <span>Clean</span>
                <span>Chill</span>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [-3, -1, -3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="hero-location-card"
            >
              <MapPin size={16} strokeWidth={3} />
              <span>Vesu, Surat</span>
            </motion.div>

            {/* Sparkle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="hero-sparkle"
            >
              <Sparkles size={25} strokeWidth={2.5} />
            </motion.div>

            </div>
        </div>
      </Container>
    </section>
  );
}
