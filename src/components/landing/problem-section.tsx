
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import {
  UserRound,
  Puzzle,
  MessagesSquare,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const problems = [
  {
    number: "01",
    title: "The random stranger.",
    description:
      "You have no idea who you're moving in with. A profile isn't enough to know what living together will feel like.",
    icon: UserRound,
    color: "problem-card-pink",
  },
  {
    number: "02",
    title: "The lifestyle mismatch.",
    description:
      "Different routines, habits, cleanliness levels and expectations. Suddenly your home doesn't feel like home.",
    icon: Puzzle,
    color: "problem-card-lime",
  },
  {
    number: "03",
    title: "The endless search.",
    description:
      "Endless chats, ghosting, awkward introductions and listings that disappear before you can decide.",
    icon: MessagesSquare,
    color: "problem-card-blue",
  },
  {
    number: "04",
    title: "The missing piece.",
    description:
      "You have a flat, maybe even a group. But finding that one last person who fits is still a struggle.",
    icon: Clock3,
    color: "problem-card-pink-strong",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="problem-section">
      <Container>
        {/* Section heading */}
        <div className="problem-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="problem-eyebrow"
          >
            The roommate struggle
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="problem-title"
          >
            Finding a flatmate
            <br />
            shouldn&apos;t be a{" "}
            <span className="problem-title-highlight">gamble.</span>
          </motion.h2>

          <p className="problem-description">
            Finding a place is one thing. Finding someone you can actually live
            with is a completely different story.
          </p>
        </div>

        {/* Sticky cards */}
        <div className="problem-stack">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <div
                key={problem.number}
                className={`problem-sticky-wrapper problem-sticky-${index + 1}`}
              >
                <motion.article
                  initial={{ opacity: 0, y: 50, rotate: 1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className={`problem-card ${problem.color}`}
                >
                  {/* Card top */}
                  <div className="problem-card-top">
                    <span className="problem-number">{problem.number}</span>

                    <div className="problem-icon">
                      <Icon size={30} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="problem-card-content">
                    <h3>{problem.title}</h3>

                    <p>{problem.description}</p>
                  </div>

                  {/* Card bottom */}
                  <div className="problem-card-bottom">
                    <span>Sounds familiar?</span>

                    <div className="problem-card-arrow">
                      <ArrowUpRight size={25} strokeWidth={3} />
                    </div>
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>

        {/* Closing section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="problem-closing"
        >
          <h3>
            Maybe it&apos;s not about finding a room.
            <br />
            It&apos;s about finding{" "}
            <span className="problem-closing-highlight">your people.</span>
          </h3>

          <a href="#roommates" className="roomate-button roomate-button-black">
            Meet your people
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </Container>
    </section>
)}
