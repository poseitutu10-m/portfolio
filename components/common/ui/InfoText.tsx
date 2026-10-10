import { InfoTextProps } from "@/interfaces";
import React from "react";

const InfoText: React.FC<InfoTextProps> = ({
  header,
  description,
  elements,
  level = 2,
}) => {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <div className="max-w-3xl space-y-3">
      <p className="eyebrow">Phinehas Osei-Tutu</p>
      <Heading className="section-title">{header}</Heading>
      {description && (
        <p className="max-w-2xl text-sm leading-7 text-[#a5a8a5] md:text-base">
          {description}
        </p>
      )}
      {elements}
    </div>
  );
};

export default InfoText;
