import Hero from "@/components/Hero";
import Header from "@/components/Header";
import CaseStudyCard from "@/components/CaseStudyCard";
import ProjectAccordion from "@/components/ProjectAccordion";
import Reveal from "@/components/Reveal";
import AcademicList from "@/components/AcademicList";
import Contact from "@/components/Contact";
import Milestones from "@/components/Milestones";
import Section, { Band } from "@/components/Section";
import StackTable from "@/components/StackTable";
import Timeline from "@/components/Timeline";
import { about, academics, caseStudies, languages, milestones, projects, site, timeline } from "@/data/site";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-10 text-xs uppercase tracking-[0.2em] text-muted">{children}</h2>;
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />

        <Band id="work" tone="light">
          <SectionLabel>01 — Key projects</SectionLabel>
          <div className="mb-20 grid gap-5 md:grid-cols-2">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 120} className="h-full">
                <CaseStudyCard study={c} index={i} />
              </Reveal>
            ))}
          </div>
          <SectionLabel>Shipped to production</SectionLabel>
          <Reveal>
            <ProjectAccordion projects={projects} />
          </Reveal>
        </Band>

        <Band id="about" tone="light">
          <SectionLabel>02 — About</SectionLabel>
          <Reveal>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="space-y-10 text-sm">
              <div>
                <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">Languages</h3>
                <p>{languages.join(", ")}</p>
              </div>
            </div>
          </div>
          </Reveal>
        </Band>

        <Section id="stack" tone="light" number="03" label="The Periodic Table of My Stack" title="Elements of modern systems.">
          <StackTable />
        </Section>

        <Section id="experience" tone="light" number="04" label="Chronological Path" title="Experience" subtitle="Shipping products, one build at a time.">
          <Timeline entries={timeline} />
        </Section>

        <Band id="academic" tone="light">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:sticky lg:top-28 lg:col-span-4">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">05 — Academic &amp; Learning</p>
              <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
                Always <span className="italic text-muted">learning.</span>
              </h2>
              <p className="mt-4 font-mono text-xs text-muted">
                {String(academics.length).padStart(2, "0")} CREDENTIALS &amp; PROGRAMMES
              </p>
              <p className="mt-2 max-w-sm text-xs leading-relaxed text-fg/80">
                A mathematics degree, hands-on web development training and ongoing design and community learning.
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-8">
              <AcademicList items={academics} />
            </Reveal>
          </div>
        </Band>

        <Milestones items={milestones} />

      </main>
      <Contact />
    </>
  );
}
