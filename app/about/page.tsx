import React from "react";
import { Metadata } from "next";
import profile from "@/public/PHI.jpg";
import Image from "next/image";
import InfoText from "@/components/common/ui/InfoText";
import SkillCard from "@/components/common/ui/SkillCard";

export const metadata: Metadata = {
  title: "About",
  description: "This is the about section of Phinehas Osei-Tutu",
};

const About: React.FC = () => {
  return (
    <section>
      <div className="my-12 flex flex-col gap-8 md:my-16 md:flex-row lg:gap-10">
        <div className="relative mx-auto aspect-square w-full max-w-[260px] shrink-0 overflow-hidden rounded-3xl border border-[#292d2e] bg-[#141617] md:mx-0 md:w-1/3 md:max-w-none">
          <Image
            src={profile}
            alt="Portrait of Phinehas Osei-Tutu"
            className="h-full w-full object-cover"
            width={300}
            height={500}
            priority={true}
          />
        </div>

        <div className="flex flex-col gap-8 md:w-2/3">
          <InfoText
            level={1}
            header="About"
            description="I’m a frontend engineer based in Accra, Ghana, and a Computer Engineering graduate of Kwame Nkrumah University of Science and Technology. I enjoy turning thoughtful designs into fast, accessible interfaces, and collaborating with designers and backend engineers to bring complete products to life."
          />
          <div className="flex flex-col gap-2">
            <InfoText header="Education" />
            <div className="surface-card p-4 text-sm leading-6">
              <p className="text-white">Pro-Dev Frontend Developer Course</p>
              <p>ALX Africa.</p>
              <p>
                Relevant course: Professional Foundation, and Software
                Engineering
              </p>
            </div>

            <div className="surface-card p-4 text-sm leading-6">
              <p className="text-white">
                BSc. Computer Engineering (FIRST CLASS HONOR)
              </p>
              <p>Kwame Nkrumah University of Science and Technology, Kumasi</p>
              <p>Relevant course: Software Engineering</p>
            </div>

            <div className="surface-card p-4 text-sm leading-6">
              <p className="text-white">W.A.S.S.C.E (Science)</p>
              <p>Ghana Senior High School, Koforidua.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <InfoText
              header="Skills and Technology Stack"
              description="The tools I use to build, test, and ship responsive web experiences."
            />
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 flex-wrap">
              <SkillCard skill="HTML" />
              <SkillCard skill="CSS" />
              <SkillCard skill="JavaScript" />
              <SkillCard skill="React.js" />
              <SkillCard skill="TailwindCSS" />
              <SkillCard skill="Git" />
              <SkillCard skill="GitHub" />
              <SkillCard skill="Redux" />
              <SkillCard skill="Next.js" />
              <SkillCard skill="TypeScript" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <InfoText
              header="Working together"
              description="Based in Accra, Ghana, I’m open to remote and on-site opportunities and comfortable collaborating across time zones."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
