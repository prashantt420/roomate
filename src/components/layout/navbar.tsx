
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
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
    <header className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6 sm:pt-5">
      <Container className="max-w-[1440px]">
        <div className="relative flex items-center justify-between gap-3">

          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-20 flex h-[62px] min-w-[145px] items-center justify-center rounded-full border-[2px] border-black bg-[#171310] px-7 text-white shadow-[5px_5px_0_#FF48A0]"
          >
            <span className="text-[24px] font-black tracking-[-1.5px]">
              roomate<span className="text-[#FF48A0]">.</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden items-center gap-2 rounded-full border-[2px] border-black bg-[#FFFAF3] p-2 shadow-[6px_6px_0_#171310] md:flex"
          >
            <div className="flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-5 py-3 text-[15px] font-semibold transition-colors hover:bg-[#FBC8E3]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#profiles"
              className="group flex items-center gap-2 rounded-full border-[2px] border-black bg-[#FF48A0] py-1.5 pl-5 pr-2 font-bold"
            >
              Find a Roomate
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171310] text-[#FF48A0] transition-transform group-hover:rotate-45">
                <ArrowUpRight size={20} strokeWidth={3} />
              </span>
            </a>
          </motion.nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-[#FF48A0] shadow-[4px_4px_0_#171310] md:hidden"
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
              className="absolute left-4 right-4 top-[76px] overflow-hidden rounded-[28px] border-2 border-black bg-[#FFFAF3] shadow-[6px_6px_0_#171310] md:hidden"
            >
              <nav className="flex flex-col p-3">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="flex items-center justify-between border-b-2 border-black/10 px-4 py-4 text-lg font-bold last:border-0"
                  >
                    {link.label}
                    <ArrowUpRight size={18} />
                  </motion.a>
                ))}

                <a
                  href="#profiles"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 flex items-center justify-between rounded-full border-2 border-black bg-[#FF48A0] px-5 py-3 font-bold"
                >
                  Find a Roomate
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
