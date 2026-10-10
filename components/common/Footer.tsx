import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Footer: React.FC = () => (
  <footer className="flex flex-col gap-4 border-t border-[#252929] py-6 text-xs text-[#858a86] sm:flex-row sm:items-center sm:justify-between">
    <span>© {new Date().getFullYear()} Phinehas Osei-Tutu</span>
    <div className="flex items-center gap-5">
      <Link href="https://github.com/poseitutu10" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[#c5f277]">GitHub <FiArrowUpRight /></Link>
      <Link href="https://linkedin.com/in/poseitutu10" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[#c5f277]">LinkedIn <FiArrowUpRight /></Link>
      <Link href="/contact" className="hover:text-[#c5f277]">Get in touch</Link>
    </div>
  </footer>
);

export default Footer;
