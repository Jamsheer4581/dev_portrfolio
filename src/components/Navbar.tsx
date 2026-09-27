"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-6 py-4 backdrop-blur-xl">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          J<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-300 transition hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}