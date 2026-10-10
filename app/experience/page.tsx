import InfoText from "@/components/common/ui/InfoText";
import SkillCard from "@/components/common/ui/SkillCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Phinehas Osei-Tutu",
};

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer (Contract)",
    company: "Bisame Digital Limited",
    location: "On-site",
    period: "October 2025 – Present",
    summary:
      "Building and enhancing client-facing web experiences with a focus on performance, accessibility, and maintainable code.",
    highlights: [
      "Delivered responsive UI flows and worked closely with backend teams for api integration.",
      "Set up reusable component patterns to speed up feature delivery and reduce CSS drift.",
      "Optimized performance for improving load times enhancing user satisfaction by 20%",
    ],
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "SeveighTech",
    location: "Remote",
    period: "January 2025 – June 2025",
    summary:
      "Building and iterating on client-facing web experiences with a focus on performance, accessibility, and developer ergonomics.",
    highlights: [
      "Delivered responsive UI flows that reduced handoff friction between design and backend teams.",
      "Set up reusable component patterns to speed up feature delivery and reduce CSS drift.",
      "Worked closely with backend team to integrate API",
    ],
    stack: ["React", "JavaScript", "TailwindCSS"],
  },
  {
    role: "Frontend Developer (Internship)",
    company: "SeveighTech",
    location: "Remote",
    period: "October 2024 – December 2024",
    summary:
      "Building and iterating on client-facing web experiences with a focus on performance, accessibility, and developer ergonomics.",
    highlights: [
      "Delivered responsive UI flows that reduced handoff friction between design and backend teams.",
      "Set up reusable component patterns to speed up feature delivery and reduce CSS drift.",
      "Collaborated across time zones to ship incremental improvements without blocking releases.",
    ],
    stack: ["React", "JavaScript", "TailwindCSS"],
  },
  {
    role: "Frontend Engineering Fellow",
    company: "ALX Africa (ProDev)",
    location: "Remote",
    period: "2023 – 2024",
    summary:
      "Completed an intensive program focused on production-grade front-end engineering and collaboration best practices.",
    highlights: [
      "Implemented feature work in agile sprints, covering planning, PR reviews, and demos.",
      "Built UI prototypes to validate user journeys before full implementation.",
      "Worked on API integration given API endpoints",
    ],
    stack: ["JavaScript", "React", "TailwindCSS", "Git", "GitHub"],
  },
  {
    role: "Frontend Engineer (Internship)",
    company: "Zap Technologies",
    location: "Remote",
    period: "2023 – 2024",
    summary:
      "Completed an intensive internship focused on production-grade front-end engineering and collaboration best practices.",
    highlights: [
      "Learn API integration and some effective caching strategies using React Query",
      "Built UI prototypes to validate user journeys before full implementation.",
      "Sharpen my user interface building skills by developing countless design prototypes",
    ],
    stack: ["HTML", "CSS","JavaScript", "React", "TailwindCSS", "Git", "GitHub"],
  },
];

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  return (
    <article className="surface-card flex flex-col gap-4 p-6 transition-colors hover:border-[#48543b]">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <p className="eyebrow !text-[.68rem]">{item.period}</p>
          <h3 className="mt-2 text-lg font-semibold text-[#f2f1ed]">{item.role}</h3>
          <p className="text-sm text-[#a5a8a5]">
            {item.company} · {item.location}
          </p>
        </div>
      </header>

      <p className="text-sm leading-6 text-[#a5a8a5]">{item.summary}</p>

      <ul className="list-disc list-inside space-y-2 text-sm leading-6 text-[#c4c7c3] marker:text-[#c5f277]">
        {item.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <SkillCard key={tech} skill={tech} />
        ))}
      </div>
    </article>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="my-12 flex flex-col gap-8">
      <InfoText
        level={1}
        header="Experience"
        description="Roles and collaborations where I honed my craft in frontend engineering, teamwork, and delivery."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {experiences.map((item) => (
          <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>

      <div className="surface-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#f2f1ed]">Availability</h3>
          <p className="mt-1 text-sm leading-6 text-[#a5a8a5]">
            Based in Accra and flexible with time zones. Open to remote-first
            teams and short-term engagements that need quick impact.
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1ziA0jB-tdn1Y9XUkc1hQq1F5FHwe9RXH/view?usp=sharing"
          target="_blank"
          className="w-fit rounded-full border border-[#c5f277]/50 px-4 py-2 text-sm font-medium text-[#c5f277] hover:bg-[#c5f277] hover:text-[#11140d]"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Experience;
