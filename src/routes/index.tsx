import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  BarChart3,
  Bolt,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Gauge,
  Leaf,
  MapPinned,
  Menu,
  Network,
  Server,
  Snowflake,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type TouchEvent, type WheelEvent } from "react";

import heroImage from "@/assets/data-center-hero.jpg";
import afzaIcon from "@/assets/afza-icon.png";
import harisImage from "@/assets/haris-masood.png";
import raziaImage from "@/assets/raazia-portrait.webp";
import rehanaImage from "@/assets/rehana-tabasum.png";
import sherazImage from "@/assets/sheraz.png";
import farazImage from "@/assets/faraz-white-bg.webp";
import mustafaImage from "@/assets/mustafa-white-bg.webp";
import shenilaImage from "@/assets/shenila-white-bg.webp";
import umaimaImage from "@/assets/umaima-white-bg.webp";
import sunehraIcon from "@/assets/zunaira-icon.png";
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
  { name: "Engr. Rehana Tabasum", role: "Research Assistant", image: rehanaImage },
  {
    name: "Ms. Afza Khursheed",
    role: "Undergraduate Research Student",
    image: afzaIcon,
  },
  {
    name: "Mr. Haris Masood",
    role: "Undergraduate Research Student",
    image: harisImage,
  },
  {
    name: "Ms. Sunehra",
    role: "Undergraduate Research Student",
    image: sunehraIcon,
  },
  {
    name: "Ms. Raazia Imran Reshamwala",
    role: "Undergraduate Research Student",
    image: raziaImage,
  },
  {
    name: "Ms. Maham Faisal",
    role: "Undergraduate Research Student",
    image: sunehraIcon,
  },
];

const leadership = [
  {
    name: "Prof. Dr. Shenila Zardari",
    role: "Chairperson, Department of Software Engineering",
    image: shenilaImage,
  },
  { name: "Engr. Dr. Syed Muhammad Sheraz", role: "Principal Investigator", image: sherazImage },
  { name: "Engr. Dr. Muhammad Faraz Hyder", role: "Co-Principal Investigator", image: farazImage },
  { name: "Engr. Dr. Mustafa Latif", role: "Co-Principal Investigator", image: mustafaImage },
];

const externalCollaboration = [
  { name: "Dr. Umaima Haider", role: "University of East London", image: umaimaImage },
];

const researchProjects = [
  {
    name: "GreenQuanta",
    subtitle: "Quantum-Inspired Energy-Efficient Workload Allocation in Data Centers",
    status: "Ongoing project",
    summary:
      "A simulated optimization system for placing workloads on servers while balancing energy use, carbon footprint, and an end-user-defined SLA violation threshold.",
    details: [
      "The model considers workload resource needs, physical server capacity, energy consumption, and emissions. A quantum computing-based approach solves the allocation problem in simulation; physical quantum hardware is outside the project scope.",
      "A web interface will accept data center and workload inputs, let users set the acceptable SLA violation threshold, and present the allocation alongside energy, carbon savings, and SLA results. Deployment on real data center infrastructure is outside the project scope.",
    ],
    topics: ["Workload placement", "Energy & carbon", "SLA constraints"],
  },
  {
    name: "AI-Aware Cooling Selection",
    subtitle: "Decision Support System for Sustainable Cooling Selection in GPU-Based Data Centers",
    status: "Ongoing project",
    summary:
      "Connecting AI workload behavior to physical cooling needs so operators can compare suitable cooling technologies with evidence.",
    details: [
      "Machine learning predicts GPU heat generation from workload configurations and translates computational demand into cooling requirements.",
      "A multi-criteria decision engine ranks available cooling technologies against thermodynamic and economic constraints, with the aim of reducing operational carbon impact and municipal water use while considering lifecycle cost.",
    ],
    topics: ["GPU heat prediction", "Cooling comparison", "Carbon, water & cost"],
  },
  {
    name: "COOlience",
    subtitle:
      "An Environment-Friendly Approach to Smarter Cooling and Carbon Reduction in Data Centres",
    status: "Completed project",
    summary:
      "A software platform that brings cooling simulation, a Random Forest recommendation engine, and an LLM-powered advisory assistant into one decision workflow.",
    details: [
      "COOlience compares air-side economization, evaporative cooling, and chilled water systems through annual 8,760-hour simulations and reports PUE, CUE, and WUE. Its recommendation engine was trained on 500 simulated scenarios.",
      "In the reported examples, evaporative cooling reached a PUE of 1.009 but did not meet the referenced ASHRAE temperature limits; chilled water was the dependable option for high-power AI loads despite higher installation cost and water use. The recommendations therefore depend on climate and workload.",
      "The present model uses simulated rather than operational data. Liquid immersion, indirect evaporative cooling, building control integrations, and richer advisor capabilities remain future work, alongside sensor-based validation and an offline, focused AI assistant.",
    ],
    topics: ["Cooling simulation", "PUE · CUE · WUE", "AI-assisted advice"],
  },
] as const;

function Brand() {
  return (
    <a
      className="brand"
      href="#top"
      aria-label="Data Center Cooling and Energy Efficiency Lab home"
    >
      <span className="brand-mark" aria-hidden="true">
        <Server size={19} />
      </span>
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
        <img
          src={person.image}
          alt={`Portrait of ${person.name}`}
          loading="lazy"
          width={360}
          height={360}
        />
      </div>
      <div className="person-copy">
        <h3>{person.name}</h3>
        <p>{person.role}</p>
      </div>
    </article>
  );
}

function Index() {
  const [activeProject, setActiveProject] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const wheelDistance = useRef(0);
  const lastWheelChange = useRef(0);

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

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const project = researchProjects[activeProject]!;
  const selectProject = (index: number) =>
    setActiveProject((index + researchProjects.length) % researchProjects.length);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;
    if (!start || !touch) return;
    const dx = start.x - touch.clientX;
    const dy = start.y - touch.clientY;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      selectProject(activeProject + (dx > 0 ? 1 : -1));
    }
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
      wheelDistance.current = 0;
      return;
    }
    if (Date.now() - lastWheelChange.current < 550) return;
    wheelDistance.current += event.deltaX;
    if (Math.abs(wheelDistance.current) >= 45) {
      selectProject(activeProject + (wheelDistance.current > 0 ? 1 : -1));
      wheelDistance.current = 0;
      lastWheelChange.current = Date.now();
    }
  };

  return (
    <main id="top">
      <header className={`site-header${scrolled || menuOpen ? " is-scrolled" : ""}`}>
        <div className="header-left">
          <Brand />
          <span className="header-divider" aria-hidden="true" />
          <img
            className="univ-logo"
            src={nedSeEmblem}
            alt="Department of Software Engineering, NED University emblem"
            width={46}
            height={46}
          />
          <div className="univ-copy">
            <strong>Department of Software Engineering</strong>
            <small>NED University of Engineering &amp; Technology</small>
          </div>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav
          id="main-navigation"
          className={menuOpen ? "is-open" : ""}
          aria-label="Main navigation"
        >
          <a href="#approach" onClick={() => setMenuOpen(false)}>
            Approach
          </a>
          <a href="#outcomes" onClick={() => setMenuOpen(false)}>
            Outcomes
          </a>
          <a href="#research" onClick={() => setMenuOpen(false)}>
            Research
          </a>
          <a href="#team" onClick={() => setMenuOpen(false)}>
            Team
          </a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Start a conversation <ChevronRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={heroImage}
          alt="Modern energy-efficient data center server aisle"
          width={1920}
          height={1088}
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={15} /> Intelligent decision support for data center planning
          </div>
          <h1 id="hero-title">
            Smarter site selection.
            <br />
            <span>Stronger energy decisions.</span>
          </h1>
          <p>
            One evidence-led system that identifies the most suitable region and power pathway for
            efficient, resilient data center development.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#approach">
              Explore the system <ChevronRight size={17} />
            </a>
            <a className="text-action" href="#team">
              Meet the research team <ArrowDown size={16} />
            </a>
          </div>
        </div>
        <div className="hero-metrics" aria-label="System scope">
          <div>
            <strong>06</strong>
            <span>analysis domains</span>
          </div>
          <div>
            <strong>01</strong>
            <span>integrated decision engine</span>
          </div>
          <div>
            <strong>360°</strong>
            <span>site feasibility view</span>
          </div>
        </div>
      </section>

      <section className="intro section-shell scroll-reveal" id="approach">
        <div className="section-heading">
          <p className="section-kicker">The project</p>
          <h2>From requirements to a confident recommendation.</h2>
        </div>
        <div className="intro-copy">
          <p>
            The system brings location, energy, workload, cooling, and sustainability evidence into
            one clear planning process.
          </p>
          <p>
            It does not preselect a city. It evaluates available regional options against the
            project’s actual requirements, then recommends the strongest fit with transparent
            supporting data.
          </p>
        </div>
      </section>

      <section className="process-band scroll-reveal">
        <div className="section-shell">
          <div className="process-header">
            <div>
              <p className="section-kicker light">How it works</p>
              <h2>
                Six connected views.
                <br />
                One practical decision.
              </h2>
            </div>
            <p>
              Each stage strengthens the next, turning complex technical inputs into a concise
              site-selection recommendation.
            </p>
          </div>
          <div className="analysis-grid">
            {analysisAreas.map(({ number, icon: Icon, title, copy }) => (
              <article className="analysis-card scroll-reveal-item" key={title}>
                <div className="analysis-top">
                  <span>{number}</span>
                  <Icon size={22} />
                </div>
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
          <div className="signal-core">
            <BarChart3 size={40} />
            <span>DSS</span>
          </div>
          <span className="signal-label label-a">Region</span>
          <span className="signal-label label-b">Power</span>
          <span className="signal-label label-c">Cooling</span>
          <span className="signal-label label-d">Impact</span>
        </div>
        <div className="output-copy">
          <p className="section-kicker">Decision output</p>
          <h2>A recommendation built for action.</h2>
          <p>
            The final view brings the strongest options and their evidence together, helping
            planners compare trade-offs without unnecessary complexity.
          </p>
          <ul>
            <li>
              <CheckCircle2 size={18} /> Region and site suitability
            </li>
            <li>
              <CheckCircle2 size={18} /> Power availability and cost analysis
            </li>
            <li>
              <CheckCircle2 size={18} /> Recommended infrastructure and cooling strategy
            </li>
            <li>
              <CheckCircle2 size={18} /> Sustainability score, risks, and reporting
            </li>
          </ul>
        </div>
      </section>

      <section className="data-strip scroll-reveal">
        <div className="section-shell data-inner">
          <Database size={26} />
          <p>
            <strong>Evidence in, clarity out.</strong> Utility data, climate records, infrastructure
            benchmarks, project requirements, and research evidence support every recommendation.
          </p>
          <Network size={26} />
        </div>
      </section>

      <section className="research-section" id="research" aria-labelledby="research-title">
        <div className="section-shell">
          <div className="research-heading scroll-reveal">
            <div>
              <p className="section-kicker">Research</p>
              <h2 id="research-title">Ideas tested against real constraints.</h2>
            </div>
            <p>Explore the lab’s ongoing work and completed cooling research.</p>
          </div>

          <div className="research-explorer">
            <div
              className="research-deck"
              aria-live="polite"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
            >
              <article className="research-feature" key={project.name}>
                <div className="research-feature-top">
                  <span>
                    {String(activeProject + 1).padStart(2, "0")} /{" "}
                    {String(researchProjects.length).padStart(2, "0")}
                  </span>
                  <span className="research-status">{project.status}</span>
                </div>
                <div className="research-feature-body">
                  <h3>{project.name}</h3>
                  <p className="research-subtitle">{project.subtitle}</p>
                  <p className="research-summary">{project.summary}</p>
                  <div className="research-details">
                    {project.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </div>
                <div className="research-feature-bottom">
                  <div className="research-topics">
                    {project.topics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                  <div className="research-controls" aria-label="Browse projects">
                    <button
                      type="button"
                      onClick={() => selectProject(activeProject - 1)}
                      aria-label="Previous project"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() => selectProject(activeProject + 1)}
                      aria-label="Next project"
                    >
                      →
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div className="research-index" aria-label="Select a research project">
              <p className="research-index-label">Explore the projects</p>
              {researchProjects.map((item, index) => (
                <button
                  className={`research-index-item${index === activeProject ? " is-active" : ""}`}
                  type="button"
                  key={item.name}
                  onClick={() => selectProject(index)}
                  aria-pressed={index === activeProject}
                >
                  <span className="research-index-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.status}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="publication-block scroll-reveal" aria-labelledby="publication-title">
            <div>
              <p className="section-kicker">Publication</p>
              <h3 id="publication-title">Published research</h3>
            </div>
            <div className="publication-list">
              <article className="publication-entry">
                <span className="publication-year">2026</span>
                <div>
                  <p className="publication-type">Journal article · Volume 52</p>
                  <h4>
                    Cost-benefit and environmental analysis of enhanced network switch refresh model
                    for data centers
                  </h4>
                  <p>Syed Muhammad Sheraz, Asad Arfeen, and Umaima Haider</p>
                  <cite>Sustainable Computing: Informatics and Systems</cite>
                  <span className="publication-article"> · Article 101469</span>
                  <div className="publication-actions">
                    <a
                      className="publication-doi"
                      href="https://doi.org/10.1016/j.suscom.2026.101469"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View DOI <ChevronRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>

              <article className="publication-entry">
                <span className="publication-year">2023</span>
                <div>
                  <p className="publication-type">Journal article · IEEE Access · Volume 11</p>
                  <h4>
                    Energy-Efficient Data Center Network Infrastructure With Network Switch Refresh
                    Model
                  </h4>
                  <p>Syed Muhammad Sheraz, Asad Arfeen, and Umaima Haider</p>
                  <cite>IEEE Access</cite>
                  <span className="publication-article"> · Pages 45066–45082</span>
                  <div className="publication-actions">
                    <a
                      className="publication-doi"
                      href="https://ieeexplore.ieee.org/document/10113865/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View article <ExternalLink size={15} aria-hidden="true" />
                    </a>
                    <a
                      className="publication-doi"
                      href="https://doi.org/10.1109/ACCESS.2023.3272499"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOI: 10.1109/ACCESS.2023.3272499
                      <ExternalLink size={15} aria-hidden="true" />
                    </a>
                    <a
                      className="publication-doi"
                      href="https://ieeexplore.ieee.org/iel7/6287639/6514899/10113865.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download PDF <Download size={15} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section-shell scroll-reveal" id="team">
        <div className="section-heading team-heading">
          <div>
            <p className="section-kicker">Research team</p>
            <h2>The people behind the system.</h2>
          </div>
          <p>
            A multidisciplinary group working across infrastructure planning, AI workloads, cooling,
            sustainability, and decision analysis.
          </p>
        </div>

        <div className="leadership-title">
          <span>Project leadership</span>
        </div>
        <div className="leadership-grid">
          {leadership.map((person) => (
            <div className="scroll-reveal-item" key={person.name}>
              <PersonCard person={person} />
            </div>
          ))}
        </div>

        <div className="leadership-title">
          <span>External collaboration</span>
        </div>
        <div className="leadership-grid">
          {externalCollaboration.map((person) => (
            <div className="scroll-reveal-item" key={person.name}>
              <PersonCard person={person} />
            </div>
          ))}
        </div>

        <div className="leadership-title">
          <span>Team members</span>
        </div>
        <div className="team-grid">
          {projectTeam.map((person) => (
            <div className="scroll-reveal-item" key={person.name}>
              <PersonCard person={person} />
            </div>
          ))}
        </div>
      </section>

      <section
        className="contact-section section-shell scroll-reveal"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-information">
          <p className="section-kicker light">Contact information</p>
          <h2 id="contact-title">Get in touch</h2>
          <div className="contact-detail">
            <span>Lab</span>
            <strong>Data Center Cooling and Energy Efficiency Lab</strong>
          </div>
          <div className="contact-detail">
            <span>Department</span>
            <strong>
              Department of Software Engineering
              <br />
              NED University of Engineering &amp; Technology
            </strong>
          </div>
          <div className="contact-detail">
            <span>Location</span>
            <strong>University Road, Karachi 75270, Pakistan</strong>
          </div>
          <div className="contact-detail">
            <span>Email</span>
            <a href="mailto:sheraz@neduet.edu.pk">sheraz@neduet.edu.pk</a>
          </div>
        </div>
        <div className="contact-enquiry">
          <p className="section-kicker">Send an enquiry</p>
          <h3>Start a conversation.</h3>
          <form action="https://formsubmit.co/sheraz@neduet.edu.pk" method="POST">
            <input type="hidden" name="_subject" value="New DC²E Lab website enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input
              className="form-honeypot"
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="contact-fields">
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Subject
                <input name="subject" type="text" required placeholder="How can we help?" />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} required placeholder="Write your message" />
              </label>
            </div>
            <button type="submit">
              Submit enquiry <ChevronRight size={17} aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      <section
        className="location-section section-shell scroll-reveal"
        aria-labelledby="location-title"
      >
        <div className="location-copy">
          <p className="section-kicker">Find us</p>
          <h2 id="location-title">NED University of Engineering &amp; Technology</h2>
          <p>University Road, Karachi 75270, Pakistan</p>
          <a
            href="https://www.openstreetmap.org/?mlat=24.933469&amp;mlon=67.111924#map=16/24.933469/67.111924"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open full map <ChevronRight size={16} />
          </a>
        </div>
        <iframe
          title="Map of NED University of Engineering and Technology in Karachi"
          src="https://www.openstreetmap.org/export/embed.html?bbox=67.1038%2C24.9285%2C67.1200%2C24.9385&amp;layer=mapnik&amp;marker=24.933469%2C67.111924"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <footer className="scroll-reveal">
        <div className="footer-main section-shell">
          <div className="footer-about">
            <Brand />
            <p>
              Data Center Cooling and Energy Efficiency Lab
              <br />
              Department of Software Engineering
              <br />
              NED University of Engineering &amp; Technology
            </p>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            <a href="#approach">Approach</a>
            <a href="#outcomes">Outcomes</a>
            <a href="#research">Research</a>
            <a href="#team">Team</a>
          </div>
          <div className="footer-links">
            <h2>Contact</h2>
            <p>
              University Road
              <br />
              Karachi 75270, Pakistan
            </p>
            <a href="mailto:sheraz@neduet.edu.pk">sheraz@neduet.edu.pk</a>
          </div>
        </div>
        <div className="footer-inner section-shell">
          <p>© {new Date().getFullYear()} Data Center Cooling and Energy Efficiency Lab</p>
          <a href="#top">
            Back to top <ArrowDown className="back-arrow" size={15} />
          </a>
        </div>
      </footer>
    </main>
  );
}
