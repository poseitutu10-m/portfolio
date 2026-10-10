import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight, FiArrowUpRight, FiMapPin } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Phinehas Osei-Tutu | Frontend Engineer",
  description: "Frontend engineer in Accra, Ghana, building thoughtful digital experiences.",
};

export default function Home() {
  return (
    <div className="pb-12">
      <section className="grid min-h-[76vh] items-center gap-12 py-16 md:grid-cols-[1.15fr_.85fr] md:py-20">
        <div className="order-2 md:order-1">
          <p className="eyebrow mb-6 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#c5f277] shadow-[0_0_14px_#c5f277]" />Frontend engineer · Accra, Ghana</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-.065em] text-[#f2f1ed] sm:text-6xl lg:text-[5rem]">
            Thoughtful interfaces. <span className="text-[#c5f277]">Built for people.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#a5a8a5] md:text-lg md:leading-8">
            I’m Phinehas, a frontend engineer who turns product ideas into clear, responsive web experiences. I work closely with design and backend teams to make the details feel effortless.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-[#c5f277] px-5 py-3 text-sm font-semibold text-[#10120d] hover:-translate-y-0.5 hover:bg-[#d6ff91]">
              Explore my work <FiArrowUpRight size={17} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#3a3e3c] px-5 py-3 text-sm font-medium text-[#e8e9e5] hover:border-[#c5f277] hover:text-[#c5f277]">
              Let’s talk <FiArrowDownRight size={17} />
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-2 text-sm text-[#858a86]"><FiMapPin className="text-[#c5f277]" /> Accra, Ghana <span className="mx-1 text-[#454947]">/</span> Open to remote opportunities</div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[420px] md:order-2">
          <div className="relative rounded-[2rem] border border-[#292d2e] bg-[#141617] p-3 shadow-[0_30px_100px_-40px_rgba(197,242,119,.18)]">
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.5rem] bg-[#202423]">
              <Image src="/PHI.jpg" alt="Portrait of Phinehas Osei-Tutu" fill priority sizes="(max-width: 768px) 90vw, 420px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div><p className="text-xl font-semibold tracking-tight text-white">Phinehas Osei-Tutu</p><p className="mt-1 text-sm text-white/75">Frontend Engineer</p></div>
                <span className="mb-1 h-2.5 w-2.5 rounded-full bg-[#c5f277] ring-4 ring-[#c5f277]/20" />
              </div>
            </div>
            {/* <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#343938] bg-[#191c1d] px-4 py-3 shadow-xl sm:block">
              <p className="text-xs uppercase tracking-[.14em] text-[#858a86]">Currently</p><p className="mt-1 text-sm font-medium text-[#f2f1ed]">Building for the web <span className="text-[#c5f277]">↗</span></p>
            </div> */}
          </div>
        </div>
      </section>

      <section className="border-t border-[#252929] py-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-[#858a86]">A little about how I work</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-[#c4c7c3]"><span>Human-centered UI</span><span>Responsive by default</span><span>Thoughtful collaboration</span></div>
        </div>
      </section>
    </div>
  );
}
