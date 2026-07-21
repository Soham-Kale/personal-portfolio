"use client";

import { useEffect, useState } from "react";
import { DATA, THEMES, type ThemeId } from "@/lib/data";
import { ICONS } from "@/lib/icons";

/* ---------------- quote ---------------- */
export function QuoteWidget() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % DATA.quotes.length), 6000);
    return () => clearInterval(t);
  }, []);
  const q = DATA.quotes[idx];
  return (
    <aside className="widget widget-quote">
      <div className="widget-notch" />
      <p className="quote-text">“{q.text}”</p>
      <div className="quote-meta">
        <span className="quote-dots">
          {DATA.quotes.map((_, i) => (
            <i key={i} className={i === idx ? "on" : ""} />
          ))}
        </span>
        <span className="quote-by">— {q.by.toUpperCase()}</span>
      </div>
    </aside>
  );
}

/* ---------------- links ---------------- */
export function LinksWidget() {
  return (
    <aside className="widget widget-links">
      <div className="widget-notch" />
      <div className="widget-label">LINKS · WORTH READING</div>
      <ul className="links-list">
        {DATA.links.map((l) => (
          <li key={l.title}>
            <a href={l.url} target="_blank" rel="noopener noreferrer">
              <div className="lk-title">{l.title}</div>
              <div className="lk-meta">{l.meta}</div>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* ---------------- music ---------------- */
export function MusicWidget() {
  return (
    <aside className="widget widget-music">
      <div className="music-art">{ICONS.music}</div>
      <div className="music-meta">
        <div className="music-title">{DATA.music.title}</div>
        <div className="music-artist">{DATA.music.artist}</div>
      </div>
      <div className="music-dot" />
    </aside>
  );
}

/* ---------------- open to work ---------------- */
export function StatusWidget() {
  if (!DATA.openToWork.show) return null;
  return (
    <aside className="widget widget-status">
      <div className="status-head">
        <span className="status-pulse" /> OPEN TO WORK
      </div>
      <div className="status-rows">
        {DATA.openToWork.items.map((r) => (
          <div className="status-row" key={r.label}>
            <span className="k">{r.label}</span>
            <span className="v">{r.value}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

/* ---------------- calendar ---------------- */
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function CalendarWidget() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);
  if (!now) return <aside className="widget widget-calendar" />;

  const first = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  const daysIn = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  return (
    <aside className="widget widget-calendar">
      <div className="widget-notch" />
      <div className="cal-head">
        <span className="cal-month">{MONTH_NAMES[now.getMonth()]}</span>
        <span className="cal-year">{now.getFullYear()}</span>
      </div>
      <div className="cal-grid">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span className="dow" key={`d${i}`}>{d}</span>
        ))}
        {Array.from({ length: first }, (_, i) => (
          <span key={`e${i}`} />
        ))}
        {Array.from({ length: daysIn }, (_, i) => (
          <span key={`n${i}`} className={i + 1 === now.getDate() ? "today" : ""}>
            {i + 1}
          </span>
        ))}
      </div>
    </aside>
  );
}

/* ---------------- visitors ---------------- */
export function VisitorsWidget({ visits }: { visits: number | null }) {
  return (
    <aside className="widget widget-visitors">
      <div className="widget-label">VISITORS</div>
      <div className="visitors-count">{visits === null ? "—" : visits.toLocaleString("en-US")}</div>
      <div className="visitors-sub">total visits</div>
    </aside>
  );
}

/* ---------------- theme ---------------- */
export function ThemeWidget({ theme, setTheme }: { theme: ThemeId; setTheme: (t: ThemeId) => void }) {
  return (
    <aside className="widget widget-theme">
      <div className="widget-label">THEME</div>
      <ul className="theme-list">
        {THEMES.map((t) => (
          <li key={t.id}>
            <button className={theme === t.id ? "on" : ""} onClick={() => setTheme(t.id)}>
              {t.label}
              <span className="theme-swatch" style={{ background: t.swatch }} />
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* ---------------- github contributions ---------------- */
interface Contribution {
  date: string;
  count: number;
  level: number;
}

const GH_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function GithubGraph() {
  const [weeks, setWeeks] = useState<(Contribution | null)[][] | null>(null);
  const [total, setTotal] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${DATA.profile.githubUser}?y=last`)
      .then((r) => {
        if (!r.ok) throw new Error("gh api failed");
        return r.json();
      })
      .then((data: { total: { lastYear?: number }; contributions: Contribution[] }) => {
        const days = data.contributions;
        setTotal(data.total?.lastYear ?? days.reduce((s, d) => s + d.count, 0));
        const grouped: (Contribution | null)[][] = [];
        let week: (Contribution | null)[] = [];
        const firstDow = new Date(days[0].date + "T00:00:00").getDay();
        for (let i = 0; i < firstDow; i++) week.push(null);
        for (const d of days) {
          week.push(d);
          if (week.length === 7) {
            grouped.push(week);
            week = [];
          }
        }
        if (week.length) {
          while (week.length < 7) week.push(null);
          grouped.push(week);
        }
        setWeeks(grouped);
      })
      .catch(() => setFailed(true));
  }, []);

  if (failed) return null;

  const cellW = 5.1 + 2.4;
  const labels: { left: number; name: string }[] = [];
  if (weeks) {
    let lastMonth = -1;
    weeks.forEach((w, i) => {
      const d = w.find((x) => x);
      if (!d) return;
      const m = new Date(d.date + "T00:00:00").getMonth();
      if (m !== lastMonth) {
        labels.push({ left: i * cellW, name: GH_MONTHS[m] });
        lastMonth = m;
      }
    });
  }

  return (
    <aside className="widget widget-github">
      <div className="widget-notch" />
      <div className="gh-head">
        <span className="gh-user">{DATA.profile.githubUser.toLowerCase()}</span>
        <span className="gh-total">
          {weeks ? `${total.toLocaleString("en-US")} contributions this year` : ""}
        </span>
      </div>
      <div className="gh-months" style={{ position: "relative", height: 12 }}>
        {labels.map((l) => (
          <span key={l.left} style={{ position: "absolute", left: l.left }}>
            {l.name}
          </span>
        ))}
      </div>
      <div className="gh-graph">
        {weeks?.map((w, wi) => (
          <div className="gh-week" key={wi}>
            {w.map((d, di) =>
              d ? (
                <span
                  key={di}
                  className="gh-cell"
                  data-l={d.level}
                  title={`${d.count} on ${d.date}`}
                />
              ) : (
                <span key={di} className="gh-cell" style={{ visibility: "hidden" }} />
              )
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
