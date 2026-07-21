"use client";

import { APPS, DATA, type AppId } from "@/lib/data";
import { ICONS } from "@/lib/icons";

interface DockProps {
  openApps: AppId[];
  onToggle: (id: AppId) => void;
}

export default function Dock({ openApps, onToggle }: DockProps) {
  const externals = [
    { id: "github", label: "GITHUB", url: DATA.profile.github },
    { id: "linkedin", label: "LINKEDIN", url: DATA.profile.linkedin },
  ];

  return (
    <nav className="dock-wrap">
      <div className="dock">
        {APPS.map((app) => (
          <div
            key={app.id}
            className={`dock-item ${openApps.includes(app.id) ? "active" : ""}`}
            onClick={() => onToggle(app.id)}
          >
            <button className="dock-btn" aria-label={app.label}>
              {ICONS[app.id]}
            </button>
            <span className="dock-dot" />
            <span className="dock-tip">{app.label}</span>
          </div>
        ))}
        <div className="dock-sep" />
        {externals.map((ext) => (
          <div key={ext.id} className="dock-item">
            <a className="dock-btn" href={ext.url} target="_blank" rel="noopener noreferrer" aria-label={ext.label}>
              {ICONS[ext.id]}
            </a>
            <span className="dock-tip">{ext.label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
