"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/du-an", label: "Dự Án" },
  { href: "/dich-vu", label: "Dịch Vụ" },
  { href: "/ve-chung-toi", label: "Về Chúng Tôi" },
  { href: "/lien-he", label: "Liên Hệ" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const transparent = !isScrolled && isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className={`font-serif text-[26px] font-bold tracking-[0.15em] transition-colors duration-500 ${
                  transparent ? "text-white" : "text-charcoal"
                }`}
              >
                HK
              </span>
              <span
                className={`font-sans text-[9px] tracking-[0.5em] uppercase font-light -mt-1 transition-colors duration-500 ${
                  transparent ? "text-white/80" : "text-gold"
                }`}
              >
                DECORD
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 hover:text-gold ${
                    pathname === link.href
                      ? "text-gold"
                      : transparent
                      ? "text-white/90"
                      : "text-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="flex items-center gap-4">
              <Link
                href="/lien-he"
                className={`hidden md:inline-flex items-center px-6 py-2.5 border transition-all duration-300 font-sans text-[10px] tracking-[0.2em] uppercase ${
                  transparent
                    ? "border-white/60 text-white hover:bg-white hover:text-charcoal"
                    : "border-gold text-gold hover:bg-gold hover:text-white"
                }`}
              >
                Tư Vấn Miễn Phí
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`md:hidden p-1.5 transition-colors duration-300 ${
                  transparent ? "text-white" : "text-charcoal"
                }`}
                aria-label="Mở menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-50 bg-charcoal flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between h-20 px-6">
              <Link href="/" className="flex flex-col leading-none">
                <span className="font-serif text-[26px] font-bold tracking-[0.15em] text-white">
                  HK
                </span>
                <span className="font-sans text-[9px] tracking-[0.5em] uppercase font-light -mt-1 text-gold">
                  DECORD
                </span>
              </Link>
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="text-white p-1.5"
                aria-label="Đóng menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <X size={22} />
              </motion.button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 font-serif text-4xl tracking-widest text-white hover:text-gold transition-colors duration-200 text-center"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/lien-he"
                  className="inline-flex items-center px-10 py-3.5 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 font-sans text-[11px] tracking-[0.2em] uppercase"
                >
                  Tư Vấn Miễn Phí
                </Link>
              </motion.div>
            </nav>

            <div className="px-6 pb-10 text-center">
              <p className="text-white/30 text-[10px] font-sans tracking-[0.3em] uppercase">
                © {new Date().getFullYear()} HK-DECORD
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
