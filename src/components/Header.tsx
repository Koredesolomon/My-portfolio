import { site } from "@/data/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#milestones", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-[8%] py-4">
        <a href="#top" className="hidden font-serif text-lg sm:block">
          {site.name}
        </a>
        <nav className="flex items-center gap-4 overflow-x-auto text-xs sm:gap-6 sm:text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-medium text-fg transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
