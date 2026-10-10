import InfoText from "@/components/common/ui/InfoText";
import SkillCard from "@/components/common/ui/SkillCard";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Phinehas Osei-Tutu",
};

type Project = {
  name: string;
  blurb: string;
  // highlights: string[];
  stack: string[];
  live?: string;
  repo?: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "Bisame",
    blurb:
      "Bisame e-commerce offers a marketplace where buyers and sellers connects. It connects businesses and service providers to customers in a unique way.",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    live: "https://bisame.com",
    image: "/bisame.png",
  },
  {
    name: "BisameConnect",
    blurb:
      "Grow with BisaMe — Refer, Connect, and Earn. BisameConnect is a referral platform that connects businesses and service providers to customers in a unique way.",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    live: "https://affiliate-agents.bisame.com/",
    image: "/bisame-connect.png",
  },
  {
    name: "Bisame Rider",
    blurb:
      "Be among the first riders in Accra to earn more with instant payouts on BisaMe. BisameRider is a delivery platform that connects riders to BisaMe.",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    live: "https://landing-page.rider.bisame.com/",
    image: "/bisame-rider.png",
  },
  {
    name: "Event Pulse (Volunteer)",
    blurb:
      "Volunteering engagement with PentaTech to enhance Event Pulse’s public site, focusing on speed and mobile usability for event-goers.",
    stack: ["React", "TailwindCSS"],
    live: "https://www.event-pulse.com",
    image: "/eventpulse.png",
  },
  {
    name: "HealthSquare",
    blurb:
      "Secure patient portal that surfaces visit summaries, lab trends, and care reminders in a clean, mobile-first UI.",
    stack: ["React", "JavaScript", "TailwindCSS"],
    live: "https://health-square-by-phinehas.netlify.app/",
    repo: "https://github.com/poseitutu10/healthcaresquare",
    image: "/healthsquare.png",
  },
  {
    name: "FreshField",
    blurb:
      "Built FreshField's grocery shopping experience during my internship at Zap Technologies with a focus on clarity and responsiveness.",
    stack: ["React", "TailwindCSS", "Netlify"],
    live: "https://freshfieldbyposeitutu10.netlify.app",
    image: "/freshfield.png",
  },
  {
    name: "MattressHome",
    blurb:
      "Online mattress catalog built during my internship, emphasizing smooth browsing and fast filtering for shoppers.",
    stack: ["React", "TailwindCSS", "Netlify", "REST API"],
    live: "https://mattresshomebyposeitutu10.netlify.app",
    image: "/mattresshome.png",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article className="surface-card group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-[#48543b]">
      <div className="relative h-52 w-full overflow-hidden bg-[#202423]">
        <Image
          src={project.image}
          alt={`${project.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={false}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <header className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold tracking-tight text-[#f2f1ed]">
            {project.name}
          </h3>
          <p className="text-sm leading-6 text-[#a5a8a5]">{project.blurb}</p>
        </header>

        {/* <ul className="list-disc list-inside space-y-2 text-sm leading-6 text-[#c4c7c3] marker:text-[#c5f277]">
          {project.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul> */}

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <SkillCard key={tech} skill={tech} />
          ))}
        </div>

        {(project.live || project.repo) && (
          <div className="flex gap-3 flex-wrap">
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                className="rounded-full border border-[#c5f277]/50 px-4 py-2 text-sm font-medium text-[#c5f277] hover:bg-[#c5f277] hover:text-[#11140d]"
              >
                Live demo
              </Link>
            )}
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                className="rounded-full border border-[#3a3e3c] px-4 py-2 text-sm text-[#d1d4cf] hover:border-[#c5f277] hover:text-[#c5f277]"
              >
                Source code
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="my-12 flex flex-col gap-8">
      <InfoText
        level={1}
        header="Projects"
        description="Here are some of the projects I've worked on, showcasing my skills and experience in web development."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
