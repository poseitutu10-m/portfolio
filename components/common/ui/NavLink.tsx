"use client";
import { UseMyContext } from "@/context";
import { NavLinkProps } from "@/interfaces";
import Link from "next/link";
import React from "react";

const NavLink: React.FC<NavLinkProps> = ({ name, route }) => {
  const { nav, selectNav } = UseMyContext();
  return (
    <li
      className={`${nav == name ? "text-white" : ""} text-sm`}
      onClick={() => selectNav(name)}
    >
      <Link href={route}>{name}</Link>
    </li>
  );
};

export default NavLink;
