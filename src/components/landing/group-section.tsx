"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  UserPlus,
  Search,
  Sparkles,
} from "lucide-react";

const groupFeatures = [
  {
    number: "01",
    title: "Start your own group",
    description:
      "Found a place but need roommates? Create your group and find people who fit your vibe.",
    icon: Users,
    tag: "Take the lead",
    color: "pink",
    bottomLabel: "Create your group",
  },
  {
    number: "02",
    title: "Join an existing group",
    description:
      "Skip the awkward introductions. Join people who are already looking for one more roommate.",
    icon: UserPlus,
    tag: "Find your people",
    color: "lime",
    bottomLabel: "Find a group",
  },
  {
    number: "03",
    title: "Find your people",
    description:
      "Connect with people who share your lifestyle, interests, budget and the kind of energy you want at home.",
    icon: Search,
    tag: "Better together",
    color: "blue",
    bottomLabel: "Make connections",
  },
];

export default function GroupSection() {
  return (
    <section id="groups" className="group-section">
      <div className="group-decor group-decor-one" />
      <div className="group-decor group-decor-two" />

      <div className="group-container">
        <div className="group-header">
          <div className="group-header-content">
            <div className="group-eyebrow">
              <Sparkles size={16} />
              <span>ROOMATE GROUPS</span>
            </div>

            <h2>
              Better together.
              <br />
              <span>Room together.</span>
            </h2>

            <p>
              Finding a place is easier when you don't have to do it alone.
              Start a group, join one, and find people who make a house feel
              like home.
            </p>
          </div>
        </div>

        {/* STACKING CARDS */}
        <div className="group-stack">
          {groupFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                className={`group-card group-card-${index + 1} group-card-${feature.color}`}
                style={{
  zIndex: index + 1,
}}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="group-card-top">
                  <span className="group-card-number">
                    {feature.number}
                  </span>

                  <div className="group-card-icon">
                    <Icon size={26} strokeWidth={2.2} />
                  </div>
                </div>

                <span className="group-card-tag">{feature.tag}</span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="group-card-bottom">
                  <span>{feature.bottomLabel}</span>
                  <ArrowUpRight size={22} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="group-bottom-banner">
          <div>
            <span className="group-banner-eyebrow">YOUR NEXT CHAPTER</span>
            <h3>Good roommates. Better memories.</h3>
          </div>

          <a href="#roommates" className="group-banner-button">
            Find your roommates
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}