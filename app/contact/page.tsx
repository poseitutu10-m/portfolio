import { Metadata } from "next";
import React from "react";
import InfoText from "@/components/common/ui/InfoText";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "This is the contact section of Phinehas Osei-Tutu's website"
}

const Contact: React.FC = () => {
  const phone = "+233550493688";
  const email = "phinehasoseitutu1@gmail.com";

  return (
    <section className="my-12 flex flex-col gap-8">
      <InfoText
        level={1}
        header="Let's work together"
        description="Want to collaborate, hire, or get a quick walkthrough of my recent work? Reach out via phone or email and I'll respond promptly."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="surface-card flex flex-col gap-4 p-6">
          <h3 className="text-lg font-semibold text-[#f2f1ed]">Direct contact</h3>
          <div className="space-y-2 text-sm">
            <p className="text-[#c4c7c3]">
              Phone:{" "}
              <Link
                href={`tel:${phone}`}
                className="text-[#c5f277] hover:text-[#e0ffad]"
              >
                {phone}
              </Link>
            </p>
            <p className="text-[#c4c7c3]">
              Email:{" "}
              <Link
                href={`mailto:${email}`}
                className="text-[#c5f277] hover:text-[#e0ffad]"
              >
                {email}
              </Link>
            </p>
            <p className="leading-6 text-[#858a86]">
              Based in Accra, available for remote-first roles and freelance engagements.
            </p>
          </div>
        </div>

        <div className="surface-card flex flex-col gap-3 p-6">
          <h3 className="text-lg font-semibold text-[#f2f1ed]">Need a quick response?</h3>
          <p className="text-sm leading-6 text-[#a5a8a5]">
            Send a brief summary of the project, timeline, and any links or design files. I usually reply within one business day.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href={`mailto:${email}?subject=Project%20Inquiry&body=Hi%20Phinehas,%20let's%20talk%20about...`}
              className="rounded-full border border-[#c5f277]/50 px-4 py-2 text-sm font-medium text-[#c5f277] hover:bg-[#c5f277] hover:text-[#11140d]"
            >
              Email now
            </Link>
            <Link
              href={`tel:${phone}`}
              className="rounded-full border border-[#3a3e3c] px-4 py-2 text-sm text-[#d1d4cf] hover:border-[#c5f277] hover:text-[#c5f277]"
            >
              Call now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
