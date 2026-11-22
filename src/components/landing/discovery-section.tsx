"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  Heart,
  X,
  MapPin,
  Sparkles,
  ArrowUpRight,
  RotateCcw,
} from "lucide-react";

type SwipeDirection = "left" | "right";

type Profile = {
  name: string;
  age: number;
  location: string;
  compatibility: number;
  bio: string;
  image: string;
  tags: string[];
};

const profiles: Profile[] = [
  {
    name: "Aarav",
    age: 22,
    location: "Adajan, Surat",
    compatibility: 94,
    bio: "Looking for someone chill to share a space, good conversations, and occasional midnight Maggi.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90",
    tags: ["Early bird", "Clean", "Gym"],
  },
  {
    name: "Riya",
    age: 21,
    location: "Vesu, Surat",
    compatibility: 89,
    bio: "Design student. I love plants, peaceful spaces, and having people around without constant noise.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=90",
    tags: ["Creative", "Quiet", "Vegetarian"],
  },
  {
    name: "Dev",
    age: 23,
    location: "Pal, Surat",
    compatibility: 86,
    bio: "Software developer who loves movies, food, and finding people who don't take life too seriously.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=90",
    tags: ["Night owl", "Movies", "Friendly"],
  },
];

const cardVariants = {
  initial: {
    scale: 0.92,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (direction: SwipeDirection) => ({
    x: direction === "right" ? 1000 : -1000,
    opacity: 0,
    rotate: direction === "right" ? 35 : -35,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  }),
};

function SwipeCard({
  profile,
  direction,
  onSwipe,
}: {
  profile: Profile;
  direction: SwipeDirection;
  onSwipe: (direction: SwipeDirection) => void;
}) {
  const x = useMotionValue(0);

  const rotate = useTransform(x, [-300, 300], [-25, 25]);

  const likeOpacity = useTransform(x, [20, 120], [0, 1]);
  const nopeOpacity = useTransform(x, [-120, -20], [1, 0]);

  return (
    <motion.div
      custom={direction}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(_, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset > 120 || velocity > 700) {
          onSwipe("right");
        } else if (offset < -120 || velocity < -700) {
          onSwipe("left");
        } else {
          x.set(0);
        }
      }}
      style={{
        x,
        rotate,
        touchAction: "pan-y",
      }}
      className="discovery-swipe-card"
    >
      {/* LIKE */}
      <motion.div
        style={{ opacity: likeOpacity }}
        className="discovery-swipe-label discovery-like-label"
      >
        LIKE
      </motion.div>

      {/* NOPE */}
      <motion.div
        style={{ opacity: nopeOpacity }}
        className="discovery-swipe-label discovery-nope-label"
      >
        NOPE
      </motion.div>

      {/* Profile image */}
      <div className="discovery-profile-card">
        <img
          src={profile.image}
          alt={profile.name}
          draggable={false}
          className="discovery-profile-image"
        />

        <div className="discovery-image-overlay" />

        {/* Match score */}
        <div className="discovery-match-badge">
          <Sparkles size={16} strokeWidth={3} />
          <span>{profile.compatibility}% MATCH</span>
        </div>

        {/* Profile information */}
        <div className="discovery-profile-info">
          <div className="discovery-profile-location">
            <MapPin size={16} strokeWidth={3} />
            <span>{profile.location}</span>
          </div>

          <h3 className="discovery-profile-name">
            {profile.name}, {profile.age}
          </h3>

          <p className="discovery-profile-bio">{profile.bio}</p>

          <div className="discovery-profile-tags">
            {profile.tags.map((tag, index) => (
              <span
                key={tag}
                className={`discovery-tag discovery-tag-${index % 3}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DiscoverySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedProfiles, setLikedProfiles] = useState<string[]>([]);
  const [swipeDirection, setSwipeDirection] =
    useState<SwipeDirection>("right");

  const currentProfile = profiles[currentIndex];

  const handleSwipe = (direction: SwipeDirection) => {
    if (!currentProfile) return;

    setSwipeDirection(direction);

    if (direction === "right") {
      setLikedProfiles((prev) =>
        prev.includes(currentProfile.name)
          ? prev
          : [...prev, currentProfile.name]
      );
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const resetDiscovery = () => {
    setCurrentIndex(0);
    setLikedProfiles([]);
    setSwipeDirection("right");
  };

  return (
    <section className="discovery-section">
      <div className="discovery-background-shape discovery-shape-pink" />
      <div className="discovery-background-shape discovery-shape-lime" />

      <div className="discovery-container">
        <div className="discovery-layout">

          {/* LEFT SIDE: DISCOVERY CARDS */}
          <div className="discovery-left">

            <div className="discovery-card-label">
              <span className="discovery-label-dot" />
              YOUR FUTURE FLATMATES
            </div>

            <div className="discovery-card-stack">
              {/* Background card 1 */}
              {currentIndex < profiles.length - 1 && (
                <div className="discovery-stack-card discovery-stack-lime" />
              )}

              {/* Background card 2 */}
              {currentIndex < profiles.length - 2 && (
                <div className="discovery-stack-card discovery-stack-pink" />
              )}

              {/* Active card */}
              <AnimatePresence mode="wait" custom={swipeDirection}>
                {currentProfile && (
                  <SwipeCard
                    key={currentProfile.name}
                    profile={currentProfile}
                    direction={swipeDirection}
                    onSwipe={handleSwipe}
                  />
                )}
              </AnimatePresence>

              {/* Empty state */}
              {!currentProfile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="discovery-empty-state"
                >
                  <div className="discovery-empty-icon">
                    <Heart size={36} strokeWidth={3} />
                  </div>

                  <div className="discovery-empty-sticker">
                    YOU DID IT!
                  </div>

                  <h3>That&apos;s everyone!</h3>

                  <p>
                    You&apos;ve explored all available profiles.
                    Ready to give it another go?
                  </p>

                  <button
                    onClick={resetDiscovery}
                    className="discovery-reset-button"
                  >
                    <RotateCcw size={18} strokeWidth={3} />
                    START AGAIN
                  </button>
                </motion.div>
              )}
            </div>

            {/* Action buttons */}
            {currentProfile && (
              <div className="discovery-actions">
                <button
                  onClick={() => handleSwipe("left")}
                  className="discovery-action-button discovery-pass-button"
                  aria-label="Pass profile"
                >
                  <X size={30} strokeWidth={3.5} />
                </button>

                <button
                  onClick={() => handleSwipe("right")}
                  className="discovery-action-button discovery-like-button"
                  aria-label="Like profile"
                >
                  <Heart size={36} strokeWidth={3} />
                </button>
              </div>
            )}

            {/* Profile counter */}
            <div className="discovery-progress">
              <div className="discovery-progress-track">
                <div
                  className="discovery-progress-fill"
                  style={{
                    width: `${(Math.min(currentIndex, profiles.length) / profiles.length) * 100}%`,
                  }}
                />
              </div>

              <div className="discovery-progress-count">
                <span>
                  {Math.min(currentIndex + 1, profiles.length)}
                </span>
                <span className="discovery-progress-divider">/</span>
                <span>{profiles.length}</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: SECTION CONTENT */}
          <div className="discovery-content">

            <div className="discovery-eyebrow">
              <Sparkles size={17} strokeWidth={3} />
              THE DISCOVERY EXPERIENCE
            </div>

            <h2 className="discovery-heading">
              Less searching.
              <br />
              <span className="discovery-heading-highlight">
                More connecting.
              </span>
            </h2>

            <p className="discovery-description">
              Finding the right roommate isn&apos;t about scrolling
              through endless listings. It&apos;s about finding people
              you&apos;ll actually enjoy living with.
            </p>

            {/* Feature cards */}
            <div className="discovery-features">

              <div className="discovery-feature discovery-feature-pink">
                <div className="discovery-feature-icon discovery-feature-icon-lime">
                  <Sparkles size={23} strokeWidth={3} />
                </div>

                <div className="discovery-feature-content">
                  <h3>Compatibility first</h3>
                  <p>
                    Find people who match your budget, lifestyle,
                    habits, and energy.
                  </p>
                </div>

                <div className="discovery-feature-number">01</div>
              </div>

              <div className="discovery-feature discovery-feature-cream">
                <div className="discovery-feature-icon discovery-feature-icon-pink">
                  <Heart size={23} strokeWidth={3} />
                </div>

                <div className="discovery-feature-content">
                  <h3>Your people, your choice</h3>
                  <p>
                    Like the profiles that feel right. Skip the ones
                    that don&apos;t.
                  </p>
                </div>

                <div className="discovery-feature-number">02</div>
              </div>

              <div className="discovery-feature discovery-feature-lime">
                <div className="discovery-feature-icon discovery-feature-icon-blue">
                  <ArrowUpRight size={23} strokeWidth={3} />
                </div>

                <div className="discovery-feature-content">
                  <h3>Build your group</h3>
                  <p>
                    Connect with people and turn individual matches
                    into your future flatmate group.
                  </p>
                </div>

                <div className="discovery-feature-number">03</div>
              </div>
            </div>

            {/* Likes count */}
            <div className="discovery-likes-counter">
              <div className="discovery-likes-icon">
                <Heart size={20} fill="#FF48A0" strokeWidth={3} />
              </div>

              <span className="discovery-likes-count">
                {likedProfiles.length}
              </span>

              <span>
                {likedProfiles.length === 1 ? "profile liked" : "profiles liked"}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}