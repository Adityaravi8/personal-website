import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full text-[#e2e8f0] z-50 transition-all duration-300 ${
        scrolled ? "nav-glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold tracking-wide">
          Aditya<span className="gradient-text">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-xl text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden nav-glass px-6 pb-4 flex flex-col gap-4 mt-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-2 text-sm uppercase tracking-widest text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
