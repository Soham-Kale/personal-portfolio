"use client";

import { useCallback, useEffect, useState } from "react";
import { WINDOW_TITLES, type AppId, type ThemeId, THEMES } from "@/lib/data";
import MenuBar from "@/components/MenuBar";
import Dock from "@/components/Dock";
import Window from "@/components/Window";
import {
  QuoteWidget,
  LinksWidget,
  MusicWidget,
  StatusWidget,
  CalendarWidget,
  VisitorsWidget,
  ThemeWidget,
  GithubGraph,
} from "@/components/Widgets";
import {
  AboutWindow,
  ExperienceWindow,
  ProjectsWindow,
  WritingWindow,
  ContactWindow,
  ResumeWindow,
  TerminalWindow,
  UsesWindow,
  NotesWindow,
} from "@/components/AppWindows";

const WINDOW_CLASS: Partial<Record<AppId, string>> = {
  resume: "window-lg",
  contact: "window-sm",
  terminal: "window-term",
};

export default function Desktop() {
  // order = stacking order; last item is on top
  const [open, setOpen] = useState<AppId[]>(["about"]);
  const [theme, setThemeState] = useState<ThemeId>("midnight");
  const [visits, setVisits] = useState<number | null>(null);

  /* ----- theme ----- */
  const setTheme = useCallback((t: ThemeId) => {
    setThemeState(t);
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem("theme", t);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") as ThemeId | null;
      if (saved && THEMES.some((t) => t.id === saved)) setTheme(saved);
    } catch {}
  }, [setTheme]);

  /* ----- visitors ----- */
  useEffect(() => {
    const set = (n: number) => setVisits(n);
    const fallback = () => {
      try {
        const n = parseInt(localStorage.getItem("localVisits") || "0", 10) + 1;
        localStorage.setItem("localVisits", String(n));
        set(n);
      } catch {
        set(1);
      }
    };
    const counted = (() => {
      try {
        return !!sessionStorage.getItem("counted");
      } catch {
        return false;
      }
    })();
    fetch(`https://api.counterapi.dev/v1/soham-kale-portfolio/visits${counted ? "" : "/up"}`)
      .then((r) => {
        if (!r.ok) throw new Error("counter failed");
        return r.json();
      })
      .then((json: { count: number }) => {
        try {
          sessionStorage.setItem("counted", "1");
        } catch {}
        set(json.count);
      })
      .catch(fallback);
  }, []);

  /* ----- window manager ----- */
  const openApp = useCallback((id: AppId) => {
    setOpen((prev) => [...prev.filter((x) => x !== id), id]);
  }, []);

  const closeApp = useCallback((id: AppId) => {
    setOpen((prev) => prev.filter((x) => x !== id));
  }, []);

  const toggleApp = useCallback((id: AppId) => {
    setOpen((prev) => {
      if (prev[prev.length - 1] === id) return prev.filter((x) => x !== id); // top → close
      return [...prev.filter((x) => x !== id), id]; // open or focus
    });
  }, []);

  const activeTitle = open.length ? WINDOW_TITLES[open[open.length - 1]] : "Desktop";

  const CONTENT: Record<AppId, React.ReactNode> = {
    about: <AboutWindow />,
    experience: <ExperienceWindow />,
    projects: <ProjectsWindow />,
    writing: <WritingWindow />,
    contact: <ContactWindow />,
    resume: <ResumeWindow />,
    terminal: <TerminalWindow openApp={openApp} setTheme={setTheme} />,
    uses: <UsesWindow />,
    notes: <NotesWindow />,
  };

  return (
    <>
      <MenuBar activeApp={activeTitle} visits={visits} />
      <main className="desktop">
        <QuoteWidget />
        <LinksWidget />
        <MusicWidget />
        <StatusWidget />
        <CalendarWidget />
        <VisitorsWidget visits={visits} />
        <ThemeWidget theme={theme} setTheme={setTheme} />
        <GithubGraph />

        {open.map((id, i) => (
          <Window
            key={id}
            id={id}
            title={id === "resume" ? "RÉSUMÉ — SOHAM KALE" : WINDOW_TITLES[id].toUpperCase()}
            z={100 + i}
            className={WINDOW_CLASS[id] || ""}
            onClose={() => closeApp(id)}
            onFocus={() => openApp(id)}
          >
            {CONTENT[id]}
          </Window>
        ))}
      </main>
      <Dock openApps={open} onToggle={toggleApp} />
    </>
  );
}
