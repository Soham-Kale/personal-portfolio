"use client";

import { useEffect, useState } from "react";
import { DATA } from "@/lib/data";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function MenuBar({ activeApp, visits }: { activeApp: string; visits: number | null }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="menubar">
      <div className="menubar-left">
        <span className="menubar-logo">{DATA.profile.initials}</span>
        <span className="menubar-sep">|</span>
        <span className="menubar-app">{activeApp}</span>
      </div>
      <div className="menubar-right">
        <span className="menubar-visits" title="total visitors">
          ↑ {visits === null ? "—" : visits.toLocaleString("en-US")}
        </span>
        <span className="menubar-date">
          {now ? `${DAYS[now.getDay()]}, ${MONTHS[now.getMonth()]} ${now.getDate()}` : ""}
        </span>
        <span className="menubar-time">
          {now
            ? `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`
            : ""}
        </span>
      </div>
    </header>
  );
}
