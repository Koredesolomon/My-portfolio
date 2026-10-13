export type Category = "Frontend" | "Backend" | "Database" | "CMS & Tools" | "Design";

export const categories: Category[] = ["Frontend", "Backend", "Database", "CMS & Tools", "Design"];

export type Element = {
  symbol: string;
  name: string;
  category: Category;
  description: string;
  usedIn: string[];
};

const OVAL = "Oval Studios";
const BOLU = "Boluwatife Idowu\u2019s Agency";
const EDS = "EdSofta Limited";
const TLC = "TLCHub STEM Platform";
const CHURCH = "Church Service System";

// Order = atomic number. Source: CV.
export const elements: Element[] = [
  { symbol: "Ht", name: "HTML5", category: "Frontend", description: "Semantic, accessible markup as the foundation of every build.", usedIn: [EDS, BOLU] },
  { symbol: "Cs", name: "CSS3", category: "Frontend", description: "Responsive layouts and custom CSS that keep designs pixel-faithful.", usedIn: [BOLU, EDS] },
  { symbol: "Js", name: "JavaScript", category: "Frontend", description: "Interactive features and custom plugins without bloated dependencies.", usedIn: [OVAL, BOLU, CHURCH] },
  { symbol: "Ts", name: "TypeScript", category: "Frontend", description: "Typed React and Next.js code that stays maintainable.", usedIn: [TLC] },
  { symbol: "Re", name: "React", category: "Frontend", description: "Component-driven user interfaces.", usedIn: [OVAL, TLC] },
  { symbol: "Nx", name: "Next.js", category: "Frontend", description: "Fast React sites with headless CMS content and server rendering.", usedIn: [OVAL, TLC] },
  { symbol: "Rn", name: "React Native", category: "Frontend", description: "Mobile screens and interfaces for exam-practice apps.", usedIn: ["UTME prep app (" + EDS + ")"] },
  { symbol: "Tw", name: "Tailwind CSS", category: "Frontend", description: "Utility-first styling for consistent, quick-to-build interfaces.", usedIn: [TLC, "This portfolio"] },
  { symbol: "Ph", name: "PHP", category: "Backend", description: "Custom WordPress logic and web apps built from scratch.", usedIn: [BOLU, CHURCH, EDS] },
  { symbol: "Nd", name: "Node.js", category: "Backend", description: "JavaScript on the server for APIs and tooling.", usedIn: [TLC] },
  { symbol: "Ne", name: "NestJS", category: "Backend", description: "Structured TypeScript backend for application APIs.", usedIn: [TLC] },
  { symbol: "Rs", name: "REST APIs", category: "Backend", description: "Custom endpoints and third-party API integrations.", usedIn: [BOLU, TLC] },
  { symbol: "Gq", name: "GraphQL", category: "Backend", description: "Querying WordPress content into Next.js with WPGraphQL.", usedIn: [OVAL] },
  { symbol: "Py", name: "Python", category: "Backend", description: "Backend logic, data handling and scripting.", usedIn: ["Election Poll Web App"] },
  { symbol: "Dj", name: "Django", category: "Backend", description: "Full-stack framework for data-driven applications.", usedIn: ["Election Poll Web App"] },
  { symbol: "Mg", name: "MongoDB", category: "Database", description: "Document storage for student results and performance tracking.", usedIn: [TLC] },
  { symbol: "Sq", name: "SQL", category: "Database", description: "Relational data modelling, queries and reporting.", usedIn: ["Election Poll Web App"] },
  { symbol: "Wp", name: "WordPress", category: "CMS & Tools", description: "Custom themes, plugins and headless setups clients can manage themselves.", usedIn: [OVAL, BOLU, CHURCH] },
  { symbol: "El", name: "Elementor", category: "CMS & Tools", description: "Custom pages and dynamic sections without prebuilt template bloat.", usedIn: [BOLU, CHURCH] },
  { symbol: "Wc", name: "WooCommerce", category: "CMS & Tools", description: "Store and ticketing integrations on WordPress.", usedIn: ["WordPress client work"] },
  { symbol: "Ac", name: "ACF", category: "CMS & Tools", description: "Advanced Custom Fields and Custom Post Types for structured content.", usedIn: [CHURCH] },
  { symbol: "Gh", name: "Git & GitHub", category: "CMS & Tools", description: "Version control and project hosting.", usedIn: ["All projects"] },
  { symbol: "Cp", name: "cPanel & Hosting", category: "CMS & Tools", description: "Hosting setup, DNS, migrations, backups and performance tuning.", usedIn: [BOLU, TLC + " (Hostinger VPS)"] },
  { symbol: "Fg", name: "Figma to Code", category: "Design", description: "Turning Figma designs into responsive, faithful builds.", usedIn: [BOLU] },
  { symbol: "Ux", name: "UI/UX Design", category: "Design", description: "Design thinking that bridges the gap between design and code.", usedIn: ["UI/UX courses"] },
];
