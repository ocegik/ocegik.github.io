import { useState, useEffect } from "react";
import { PLAYERS, PLAYER_COLORS } from "@/data/predictions";
import type { Player } from "@/data/predictions";
import { Trophy } from "@/components/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 h-16 flex items-center justify-between px-6 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(8, 13, 23, 0.85)" : "var(--bg-primary)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid var(--border-subtle)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.2)" : "none",
      }}
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Trophy className="w-5 h-5" color="var(--gold)" />
        <span
          className="font-inter font-medium uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.08em",
            color: "var(--text-secondary)",
          }}
        >
          FIFA WORLD CUP 2026
        </span>
      </div>

      {/* Center: Title */}
      <div
        className="absolute left-1/2 -translate-x-1/2 font-inter font-semibold"
        style={{
          fontSize: "18px",
          color: "var(--text-primary)",
        }}
      >
        Prediction Tracker
      </div>

      {/* Right: Player Avatars */}
      <div className="flex items-center gap-2">
        {PLAYERS.map((player) => (
          <PlayerAvatar key={player} player={player} />
        ))}
      </div>
    </header>
  );
}

function PlayerAvatar({ player }: { player: Player }) {
  const colors = PLAYER_COLORS[player];
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center font-inter font-bold"
      style={{
        fontSize: "13px",
        backgroundColor: colors.bg,
        border: `1px solid ${colors.border}`,
        color: colors.primary,
      }}
    >
      {player.charAt(0)}
    </div>
  );
}
