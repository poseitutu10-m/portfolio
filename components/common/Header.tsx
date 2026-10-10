"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Experience", route: "/experience" },
  { name: "Projects", route: "/projects" },
  { name: "Contact", route: "/contact" },
];

const cv =
  "https://drive.google.com/file/d/1ziA0jB-tdn1Y9XUkc1hQq1F5FHwe9RXH/view?usp=sharing";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setOpen(false);

  return (
    <header className="relative z-20 flex items-center justify-between border-b border-[#252929] py-5">
      <Link
        href="/"
        onClick={closeMenu}
        className="text-lg font-semibold tracking-[-.05em] text-[#f2f1ed]"
      >
        Phinehas<span className="text-[#c5f277]">.</span>
      </Link>
      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="flex items-center gap-1 rounded-full border border-[#252929] bg-[#121414] p-1">
          {links.map(({ name, route }) => {
            const active = pathname === route;
            return (
              <li key={route}>
                <Link
                  href={route}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-full px-3.5 py-2 text-[13px] transition-colors ${active ? "bg-[#242827] text-[#f2f1ed]" : "text-[#999e9a] hover:text-[#f2f1ed]"}`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <a
        href={cv}
        target="_blank"
        rel="noreferrer"
        className="hidden items-center gap-1.5 rounded-full border border-[#444a46] px-4 py-2.5 text-xs font-medium text-[#e6e8e2] hover:border-[#c5f277] hover:text-[#c5f277] md:inline-flex"
      >
        Resume <FiArrowUpRight size={14} />
      </a>
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        className="rounded-lg p-2 text-[#e6e8e2] hover:bg-[#1b1e1d] md:hidden"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-2xl border border-[#303533] bg-[#151817] p-2 shadow-2xl md:hidden"
        >
          <ul className="flex flex-col">
            {links.map(({ name, route }) => (
              <li key={route}>
                <Link
                  href={route}
                  aria-current={pathname === route ? "page" : undefined}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3 text-sm ${pathname === route ? "bg-[#252a27] text-[#c5f277]" : "text-[#d1d4cf] hover:bg-[#202422]"}`}
                >
                  {name}
                </Link>
              </li>
            ))}
            <li className="mt-1 border-t border-[#303533] pt-2">
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-[#d1d4cf]"
              >
                Download resume <FiArrowUpRight />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
