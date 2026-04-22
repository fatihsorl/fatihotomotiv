"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#iletisim", label: "İletişim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-10"
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0)",
          boxShadow: scrolled
            ? "0 8px 32px -8px rgba(15, 23, 42, 0.12)"
            : "0 0 0 rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between transition-[padding] duration-300 ease-out ${
            scrolled ? "py-3" : "py-5 sm:py-6"
          }`}
        >
          <Link href="#anasayfa" className="group flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-md">
            <motion.div
              className="relative"
              animate={{ scale: scrolled ? 0.88 : 1 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            >
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight sm:text-2xl">
                <span className={scrolled ? "text-slate-900" : "text-white drop-shadow-md"}>
                  FATİH
                </span>
                <span
                  className={
                    scrolled
                      ? "text-amber-600"
                      : "text-amber-400 drop-shadow-md"
                  }
                >
                  {" "}
                  OTOMOTİV
                </span>
              </span>
            </motion.div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Ana menü">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 * i,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    scrolled
                      ? "text-slate-700 hover:text-amber-700"
                      : "text-white/95 hover:text-amber-200"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.span
                    className="absolute inset-x-3 -bottom-0.5 h-px origin-left bg-amber-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          <button
            type="button"
            className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-xl md:hidden ${
              scrolled
                ? "bg-slate-100 text-slate-900"
                : "bg-white/15 text-white backdrop-blur-md"
            }`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <motion.span
              className="absolute h-0.5 w-5 rounded-full bg-current"
              animate={{
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 0 : -5,
              }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="absolute h-0.5 w-5 rounded-full bg-current"
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute h-0.5 w-5 rounded-full bg-current"
              animate={{
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? 0 : 5,
              }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              aria-label="Menüyü kapat"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="absolute right-4 top-[calc(5.5rem+env(safe-area-inset-top))] left-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-black/40 ring-1 ring-white/10"
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              aria-label="Mobil menü"
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleNav}
                      className="block rounded-xl px-4 py-4 text-lg font-medium text-white transition-colors hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
