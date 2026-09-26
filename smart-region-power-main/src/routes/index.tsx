import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  BarChart3,
  Bolt,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  Gauge,
  Leaf,
  MapPinned,
  Network,
  Server,
  Snowflake,
  Sparkles,
} from "lucide-react";
import { useEffect } from "react";

import heroImage from "@/assets/data-center-hero.jpg";
import femaleIcon from "@/assets/femaleicon.jpeg";
import harisImage from "@/assets/haris-masood.png";
import mahamImage from "@/assets/maham-faisal.png";
import raziaImage from "@/assets/razia-reshamwala.png";
import rehanaImage from "@/assets/rehana-tabasum.png";
import sherazImage from "@/assets/sheraz.png";
import farazImage from "@/assets/faraz.png";
import umaimaImage from "@/assets/umaima.png";
import mustafaImage from "@/assets/mustafa.png";
import shenilaImage from "@/assets/shenila-zardari.png";
import nedSeEmblem from "@/assets/nedlogo-transparent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Data Center Cooling and Energy Efficiency Lab" },
      {
        name: "description",
        content:
          "An intelligent decision-support system for data center region selection, power planning, cooling, and energy efficiency.",
      },
      { property: "og:title", content: "Data Center Cooling and Energy Efficiency Lab" },
      {
        property: "og:description",
        content:
          "Smarter data center site selection through region, power, workload, cooling, and sustainability analysis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const analysisAreas = [
  {
    number: "01",
    icon: MapPinned,
    title: "Regional Readiness",
    copy: "Reviews infrastructure, connectivity, climate, land, security, and expansion potential.",
  },
  {
    number: "02",
    icon: Bolt,
    title: "Power Feasibility",
    copy: "Matches available capacity, demand, reliability, tariffs, and renewable energy potential.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "AI Workload",
    copy: "Translates compute, storage, networking, and peak demand into infrastructure requirements.",
  },
  {
    number: "04",
    icon: Snowflake,
    title: "Cooling Strategy",
    copy: "Compares cooling approaches against climate, efficiency, cost, and operational suitability.",
  },
  {
    number: "05",
    icon: Leaf,
    title: "Sustainability",
    copy: "Considers carbon impact, water use, energy efficiency, and responsible growth indicators.",
  },
  {
    number: "06",
    icon: Gauge,
    title: "Decision Engine",
    copy: "Scores the evidence and presents the strongest region and power options for review.",
  },
];

const projectTeam = [
  { name: "Rehana Tabasum", role: "Research Assistant · Group Lead", image: rehanaImage },
  { name: "Haris Masood", role: "Final Year Student", image: harisImage },
  { name: "Afza Khursheed", role: "Final Year Student", image: femaleIcon },
  { name: "Zunaira Anwar", role: "Final Year Student", image: femaleIcon },
  { name: "Maham Faisal", role: "3rd Year Student", image: mahamImage },
  { name: "Razia Imran Reshamwala", role: "3rd Year Student", image: raziaImage },
];

const leadership = [
  { name: "Prof. Dr. Shenila Zardari", role: "Chairperson, Department of Software Engineering", image: shenilaImage },
  { name: "Engr. Dr. Syed Muhammad Sheraz", role: "Principal Investigator", image: sherazImage },
  { name: "Engr. Dr. Muhammad Faraz Hyder", role: "Co-Principal Investigator", image: farazImage },
  { name: "Engr. Dr. Mustafa Latif", role: "Co-Principal Investigator", image: mustafaImage },
];

const externalCollaboration = [
  { name: "Dr. Umaima Haider", role: "External Collaboration", image: umaimaImage },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Data Center Cooling and Energy Efficiency Lab home">
      <span className="brand-mark" aria-hidden="true"><Server size={19} /></span>
      <span className="brand-copy">
        <strong>DC²E Lab</strong>
        <small>Cooling &amp; Energy Efficiency</small>
      </span>
    </a>
  );
}

function PersonCard({ person }: { person: (typeof projectTeam)[number] }) {
  return (
    <article className="person-card">
      <div className="portrait-wrap">
        <img src={person.image} alt={`Portrait of ${person.name}`} loading="lazy" width={360} height={360} />
      </div>
      <div className="person-copy">
        <h3>{person.name}</h3>
        <p>{person.role}</p>
      </div>
    </article>
  );
}

function Index() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-reveal-ready");
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal, .scroll-reveal-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top">
      <header className="site-header">
        <div className="header-left">
          <Brand />
          <span className="header-divider" aria-hidden="true" />
          <img className="univ-logo" src={nedSeEmblem} alt="Department of Software Engineering, NED University emblem" width={46} height={46} />
          <div className="univ-copy">
            <strong>Department of Software Engineering</strong>
            <small>NED University of Engineering &amp; Technology</small>
          </div>
        </div>
        <nav aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#outcomes">Outcomes</a>
          <a href="#team">Team</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={heroImage} alt="Modern energy-efficient data center server aisle" width={1920} height={1088} />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow"><Sparkles size={15} /> Intelligent decision support for data center planning</div>
          <h1 id="hero-title">Smarter site selection.<br /><span>Stronger energy decisions.</span></h1>
          <p>One evidence-led system that identifies the most suitable region and power pathway for efficient, resilient data center development.</p>
          <div className="hero-actions">
            <a className="primary-action" href="#approach">Explore the system <ChevronRight size={17} /></a>
            <a className="text-action" href="#team">Meet the research team <ArrowDown size={16} /></a>
          </div>
        </div>
        <div className="hero-metrics" aria-label="System scope">
          <div><strong>06</strong><span>analysis domains</span></div>
          <div><strong>01</strong><span>integrated decision engine</span></div>
          <div><strong>360°</strong><span>site feasibility view</span></div>
        </div>
      </section>

      <section className="intro section-shell scroll-reveal" id="approach">
        <div className="section-heading">
          <p className="section-kicker">The project</p>
          <h2>From requirements to a confident recommendation.</h2>
        </div>
        <div className="intro-copy">
          <p>The system brings location, energy, workload, cooling, and sustainability evidence into one clear planning process.</p>
          <p>It does not preselect a city. It evaluates available regional options against the project’s actual requirements, then recommends the strongest fit with transparent supporting data.</p>
        </div>
      </section>

      <section className="process-band scroll-reveal">
        <div className="section-shell">
          <div className="process-header">
            <div>
              <p className="section-kicker light">How it works</p>
              <h2>Six connected views.<br />One practical decision.</h2>
            </div>
            <p>Each stage strengthens the next, turning complex technical inputs into a concise site-selection recommendation.</p>
          </div>
          <div className="analysis-grid">
            {analysisAreas.map(({ number, icon: Icon, title, copy }) => (
              <article className="analysis-card scroll-reveal-item" key={title}>
                <div className="analysis-top"><span>{number}</span><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="outputs section-shell scroll-reveal" id="outcomes">
        <div className="output-visual" aria-hidden="true">
          <div className="signal-ring ring-one" />
          <div className="signal-ring ring-two" />
          <div className="signal-ring ring-three" />
          <div className="signal-core"><BarChart3 size={40} /><span>DSS</span></div>
          <span className="signal-label label-a">Region</span>
          <span className="signal-label label-b">Power</span>
          <span className="signal-label label-c">Cooling</span>
          <span className="signal-label label-d">Impact</span>
        </div>
        <div className="output-copy">
          <p className="section-kicker">Decision output</p>
          <h2>A recommendation built for action.</h2>
          <p>The final view brings the strongest options and their evidence together, helping planners compare trade-offs without unnecessary complexity.</p>
          <ul>
            <li><CheckCircle2 size={18} /> Region and site suitability</li>
            <li><CheckCircle2 size={18} /> Power availability and cost analysis</li>
            <li><CheckCircle2 size={18} /> Recommended infrastructure and cooling strategy</li>
            <li><CheckCircle2 size={18} /> Sustainability score, risks, and reporting</li>
          </ul>
        </div>
      </section>

      <section className="data-strip scroll-reveal" >
        <div className="section-shell data-inner">
          <Database size={26} />
          <p><strong>Evidence in, clarity out.</strong> Utility data, climate records, infrastructure benchmarks, project requirements, and research evidence support every recommendation.</p>
          <Network size={26} />
        </div>
      </section>

      <section className="team-section section-shell scroll-reveal" id="team">
        <div className="section-heading team-heading">
          <div><p className="section-kicker">Research team</p><h2>The people behind the system.</h2></div>
          <p>A multidisciplinary group working across infrastructure planning, AI workloads, cooling, sustainability, and decision analysis.</p>
        </div>

        <div className="leadership-title"><span>Project leadership</span></div>
        <div className="leadership-grid">
          {leadership.map((person) => <div className="scroll-reveal-item" key={person.name}><PersonCard person={person} /></div>)}
        </div>

        <div className="leadership-title"><span>External collaboration</span></div>
        <div className="leadership-grid">
          {externalCollaboration.map((person) => <div className="scroll-reveal-item" key={person.name}><PersonCard person={person} /></div>)}
        </div>

        <div className="leadership-title"><span>Team members</span></div>
        <div className="team-grid">
          {projectTeam.map((person) => <div className="scroll-reveal-item" key={person.name}><PersonCard person={person} /></div>)}
        </div>
      </section>

      <footer className="scroll-reveal">
        <div className="footer-inner section-shell">
          <Brand />
          <p>Department of Software Engineering · NED University of Engineering &amp; Technology</p>
          <a href="#top">Back to top <ArrowDown className="back-arrow" size={15} /></a>
        </div>
      </footer>
    </main>
  );
}