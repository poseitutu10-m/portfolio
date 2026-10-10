import { SkillCardProps } from "@/interfaces";
import React from "react";

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return <span className="rounded-full border border-[#343a36] bg-[#1b201d] px-3 py-1.5 text-xs font-medium text-[#cbd2c5]">{skill}</span>;
};

export default SkillCard;
