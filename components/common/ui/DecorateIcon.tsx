import { DecoIconsProps } from "@/interfaces";
import React from "react";

const DecorateIcon: React.FC<DecoIconsProps> = ({ children, route }) => {
  return (
    <a
      href={route}
      className="p-1 md:p-2 border border-gray-500 rounded-xl cursor-pointer hover:opacity-70"
    >
      {children}
    </a>
  );
};

export default DecorateIcon;
