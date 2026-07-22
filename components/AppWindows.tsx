"use client";

import { useEffect, useRef, useState } from "react";
import { DATA, THEMES, APPS, type AppId, type ThemeId, type Project } from "@/lib/data";
import { ICONS } from "@/lib/icons";

const P = DATA.profile;

/* ---------------- about ---------------- */
export function AboutWindow() {
  return (
    <>
      <h1 className="about-name">
        Soham
        <br />
        Kale
      </h1>
      <div className="about-role">{P.title}</div>
      <p className="about-bio">{P.bio}</p>
      <div className="about-footer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="about-avatar" src={P.avatar} alt={P.name} />
        <div className="about-id">
          <div className="about-handle">{P.handle}</div>
          <div className="about-loc">{P.location}</div>
        </div>
        <div className="about-socials">
          <a href={P.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            {ICONS.github}
          </a>
          <a href={P.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            {ICONS.linkedin}
          </a>
          <a href={`mailto:${P.email}`} aria-label="Email">
            {ICONS.mail}
          </a>
        </div>
      </div>
    </>
  );
}

/* ---------------- experience ---------------- */
export function ExperienceWindow() {
  return (
    <>
      <div className="section-label">EXPERIENCE</div>
      {DATA.experience.map((e, i) => (
        <div className="exp-item" key={i}>
          <div className="exp-head">
            <div>
              <span className="exp-co">{e.company}</span>
              <span className="exp-role">{e.role}</span>
            </div>
            <span className="exp-period">{e.period}</span>
          </div>
          <p className="exp-sum">{e.summary}</p>
          <div className="exp-stack">{e.stack.join(" · ")}</div>
        </div>
      ))}
    </>
  );
}

/* ---------------- projects ---------------- */
function ProjectItem({ p }: { p: Project }) {
  return (
    <div className="proj-item">
      <div className="proj-head">
        <span className="proj-name">{p.name}</span>
        <span className="proj-links">
          {p.link && (
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              LIVE {ICONS.ext}
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noopener noreferrer">
              CODE {ICONS.ext}
            </a>
          )}
        </span>
      </div>
      <p className="proj-desc">{p.desc}</p>
      <div className="proj-stack">{p.stack.join(" · ")}</div>
    </div>
  );
}

export function ProjectsWindow() {
  const [tab, setTab] = useState<"personal" | "client">("personal");
  return (
    <>
      <div className="section-label">PROJECTS</div>
      <div className="tabs">
        <button className={`tab ${tab === "personal" ? "active" : ""}`} onClick={() => setTab("personal")}>
          PERSONAL
        </button>
        <button className={`tab ${tab === "client" ? "active" : ""}`} onClick={() => setTab("client")}>
          CLIENT WORK
        </button>
      </div>
      {DATA.projects[tab].map((p) => (
        <ProjectItem p={p} key={p.name} />
      ))}
    </>
  );
}

/* ---------------- writing ---------------- */
export function WritingWindow() {
  return (
    <>
      <div className="section-row">
        <div className="section-label">WRITING</div>
        <a
          className="section-link"
          href={`${P.linkedin}recent-activity/all/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW ALL →
        </a>
      </div>
      {DATA.writing.map((w) => (
        <a className="write-item" href={w.link} target="_blank" rel="noopener noreferrer" key={w.title}>
          <div className="write-head">
            <span className="write-title">{w.title}</span>
            <span className="write-date">{w.date}</span>
          </div>
          <p className="write-blurb">{w.blurb}</p>
        </a>
      ))}
    </>
  );
}

/* ---------------- contact ---------------- */
export function ContactWindow() {
  const rows = [
    { icon: ICONS.mail, name: "Email", value: P.email, href: `mailto:${P.email}` },
    { icon: ICONS.linkedin, name: "LinkedIn", value: "soham-kale", href: P.linkedin },
    { icon: ICONS.github, name: "GitHub", value: `@${P.githubUser}`, href: P.github },
  ];
  return (
    <>
      <div className="section-label">CONTACT</div>
      <h2 className="contact-heading">Let&apos;s Connect</h2>
      <p className="contact-sub">Open to full-time roles, collaborations, or just a conversation.</p>
      {rows.map((r) => (
        <a
          className="contact-item"
          href={r.href}
          key={r.name}
          {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {r.icon}
          <span className="ct-name">{r.name}</span>
          <span className="ct-value">{r.value}</span>
        </a>
      ))}
    </>
  );
}

/* ---------------- resume ---------------- */
export function ResumeWindow() {
  const R = DATA.resume;
  return (
    <>
      <div className="resume-head">
        <div>
          <h2 className="resume-name">{P.name}</h2>
          <div className="resume-role">{R.headline}</div>
          <div className="resume-meta">
            <span>{P.location}</span>
            <span>{P.email}</span>
            <span>@{P.githubUser}</span>
          </div>
        </div>
        <a className="btn" href={R.driveLink} target="_blank" rel="noopener noreferrer">
          {ICONS.ext}
          View on LinkedIn
        </a>
      </div>
      <div className="section-label">SKILLS</div>
      <div className="skills-table">
        {R.skills.map((s) => (
          <div className="skills-row" key={s.group}>
            <span className="k">{s.group}</span>
            <span className="v">
              {s.items.map((i) => (
                <span className="chip" key={i}>
                  {i}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
      <div className="section-label" style={{ marginTop: 26 }}>
        EXPERIENCE
      </div>
      {DATA.experience.map((e, i) => (
        <div className="exp-item" key={i}>
          <div className="exp-head">
            <div>
              <span className="exp-co">{e.company}</span>
              <span className="exp-role">{e.role}</span>
            </div>
            <span className="exp-period">{e.period}</span>
          </div>
          <ul className="exp-bullets">
            {e.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="section-label" style={{ marginTop: 26 }}>
        EDUCATION
      </div>
      <div className="edu-item">
        <span className="edu-school">{R.education.school}</span>
        <span className="edu-detail">{R.education.detail}</span>
      </div>
    </>
  );
}

/* ---------------- uses ---------------- */
export function UsesWindow() {
  return (
    <>
      <div className="section-label">USES</div>
      {DATA.uses.map((s) => (
        <div className="uses-section" key={s.section}>
          <div className="uses-label">{s.section}</div>
          {s.items.map((i) => (
            <div className="uses-item" key={i.name}>
              <span className="uses-name">{i.name}</span>
              <span className="uses-note">{i.note}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

/* ---------------- notes ---------------- */
// export function NotesWindow() {
//   return (
//     <>
//       <div className="section-label">NOTES</div>
//       <p className="notes-intro">Raw thoughts. Not edited for an audience.</p>
//       {DATA.notes.map((n) => (
//         <div className="note-item" key={n.date}>
//           <div className="note-date">{n.date}</div>
//           {n.lines.map((l, i) => (
//             <p key={i}>{l}</p>
//           ))}
//         </div>
//       ))}
//     </>
//   );
// }

// /* ---------------- terminal ---------------- */
// interface TermLine {
//   text: string;
//   cls?: string;
// }

// interface TerminalProps {
//   openApp: (id: AppId) => void;
//   setTheme: (t: ThemeId) => void;
// }

// export function TerminalWindow({ openApp, setTheme }: TerminalProps) {
//   const [lines, setLines] = useState<TermLine[]>([
//     { text: "Portfolio OS  v1.0.0", cls: "term-dim" },
//     { text: 'Type "help" for available commands.', cls: "term-dim" },
//   ]);
//   const [value, setValue] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null);
//   const bodyRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   useEffect(() => {
//     if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
//   }, [lines]);

//   const CMDS: Record<string, () => string> = {
//     help: () =>
//       [
//         "available commands:",
//         "  about        who is soham?",
//         "  skills       tech stack",
//         "  experience   work history",
//         "  projects     things i've built",
//         "  contact      how to reach me",
//         "  socials      github / linkedin",
//         "  open <app>   open a window (about, projects, resume...)",
//         `  theme <name> ${THEMES.map((t) => t.id).join(" | ")}`,
//         "  whoami       you, probably",
//         "  date         current date",
//         "  clear        clear the terminal",
//       ].join("\n"),
//     about: () => `${P.name} — ${P.title.toLowerCase()}\n${P.bio}`,
//     skills: () =>
//       DATA.resume.skills.map((s) => `  ${s.group.padEnd(10)} ${s.items.join(", ")}`).join("\n"),
//     experience: () =>
//       DATA.experience.map((e) => `  ${e.period.padEnd(22)} ${e.role} @ ${e.company}`).join("\n"),
//     projects: () =>
//       DATA.projects.personal.map((p) => `  ${p.name}${p.link ? "  →  " + p.link : ""}`).join("\n"),
//     contact: () => `  email     ${P.email}\n  linkedin  ${P.linkedin}\n  github    ${P.github}`,
//     socials: () => `  github    ${P.github}\n  linkedin  ${P.linkedin}`,
//     whoami: () => "guest — welcome to soham's corner of the internet.",
//     date: () => new Date().toString(),
//     sudo: () => "nice try.",
//     hello: () => "hey there 👋",
//     hi: () => "hey there 👋",
//   };

//   const run = (raw: string) => {
//     const next: TermLine[] = [{ text: `soham@portfolio ~ % ${raw}`, cls: "term-accent" }];
//     const [cmd, ...args] = raw.toLowerCase().split(/\s+/);

//     if (!raw.trim()) {
//       setLines((l) => [...l, ...next]);
//       return;
//     }
//     if (cmd === "clear") {
//       setLines([]);
//       return;
//     }
//     if (cmd === "open") {
//       const app = args[0] as AppId;
//       if (APPS.some((a) => a.id === app)) {
//         openApp(app);
//         next.push({ text: `opening ${app}...`, cls: "term-dim" });
//       } else {
//         next.push({
//           text: `unknown app: ${args[0] || "?"} — try: ${APPS.map((a) => a.id).join(", ")}`,
//           cls: "term-dim",
//         });
//       }
//     } else if (cmd === "theme") {
//       const t = args[0] as ThemeId;
//       if (THEMES.some((x) => x.id === t)) {
//         setTheme(t);
//         next.push({ text: `theme set to ${t}`, cls: "term-dim" });
//       } else {
//         next.push({ text: `themes: ${THEMES.map((x) => x.id).join(" | ")}`, cls: "term-dim" });
//       }
//     } else if (cmd === "echo") {
//       next.push({ text: args.join(" ") });
//     } else if (CMDS[cmd]) {
//       next.push({ text: CMDS[cmd](), cls: "term-dim" });
//     } else {
//       next.push({ text: `command not found: ${cmd} — type "help"`, cls: "term-dim" });
//     }
//     setLines((l) => [...l, ...next]);
//   };

//   return (
//     <div
//       className="terminal-inner"
//       ref={bodyRef}
//       onClick={() => inputRef.current?.focus()}
//       style={{ cursor: "text", minHeight: 300, display: "flex", flexDirection: "column" }}
//     >
//       <div className="term-out" style={{ flex: 1 }}>
//         {lines.map((l, i) => (
//           <div className={`term-line ${l.cls || ""}`} key={i}>
//             {l.text}
//           </div>
//         ))}
//       </div>
//       <div className="term-input-row">
//         <span className="term-prompt">soham@portfolio&nbsp;~&nbsp;%</span>
//         <input
//           ref={inputRef}
//           className="term-input"
//           type="text"
//           autoComplete="off"
//           spellCheck={false}
//           aria-label="terminal input"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               run(value.trim());
//               setValue("");
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// }
