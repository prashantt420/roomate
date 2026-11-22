
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

const homes = [
  {
    name: "Modern apartment in Vesu",
    location: "Vesu, Surat",
    price: "₹18,000",
    type: "3 BHK",
    members: "3–4 people",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900",
    featured: true,
  },
  {
    name: "Cozy home in Adajan",
    location: "Adajan, Surat",
    price: "₹15,000",
    type: "2 BHK",
    members: "2–3 people",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
    featured: false,
  },
  {
    name: "Spacious home in Pal",
    location: "Pal, Surat",
    price: "₹22,000",
    type: "3 BHK",
    members: "3–4 people",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900",
    featured: false,
  },
];

export default function HomeSection() {
  return (
    <section id="homes" className="bg-white py-14 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="FIND YOUR HOME"
          title="Your group. Your next home."
          description="Once you find your people, finding a place becomes a lot easier. Explore homes that fit your group, lifestyle and budget."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {homes.map((home, index) => (
            <motion.article
              key={home.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group overflow-hidden rounded-[22px] border border-[#ECE8F3] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-[26px]"
            >
              {/* Property image */}
              <div className="relative h-[190px] overflow-hidden sm:h-[230px]">
                <img
                  src={home.image}
                  alt={home.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#24212C] backdrop-blur sm:left-4 sm:top-4">
                  {home.type}
                </div>

                {home.featured && (
                  <div className="absolute right-3 top-3 rounded-full bg-[#7956D8] px-3 py-1.5 text-xs font-semibold text-white sm:right-4 sm:top-4">
                    Featured
                  </div>
                )}
              </div>

              {/* Property details */}
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-semibold tracking-tight text-[#24212C] sm:text-lg">
                  {home.name}
                </h3>

                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-[#85808E] sm:text-sm">
                  <MapPin size={14} />
                  {home.location}
                </div>

                {/* Pricing and group size */}
                <div className="mt-4 flex items-center justify-between border-t border-[#F0EDF5] pt-3.5 sm:mt-5 sm:pt-4">
                  <div>
                    <p className="text-xl font-semibold text-[#7956D8] sm:text-2xl">
                      {home.price}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#85808E] sm:text-xs">
                      per month
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-[#85808E] sm:text-sm">
                    <Users size={14} />
                    {home.members}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Explore homes */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center sm:mt-12"
        >
          <a
            href="/homes"
            className="inline-flex items-center gap-2 rounded-full border border-[#E8E1F4] bg-white px-5 py-2.5 text-sm font-semibold text-[#24212C] transition-all hover:border-[#7956D8] hover:text-[#7956D8] sm:px-6 sm:py-3"
          >
            Explore all homes
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
