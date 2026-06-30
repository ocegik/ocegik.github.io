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
      className="sticky top-0 z-50 h-16 flex items-center px-4 sm:px-6 transition-all duration-300 w-full"
      style={{
        backgroundColor: scrolled ? "rgba(8, 13, 23, 0.85)" : "var(--bg-primary)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid var(--border-subtle)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.2)" : "none",
      }}
    >
      {/* Left: Logo (Takes up 1/3 of the space) */}
      <div className="flex flex-1 items-center gap-2 min-w-0">
        <Trophy className="w-5 h-5 flex-shrink-0" color="var(--gold)" />
        <span
          className="hidden sm:block font-inter font-medium uppercase truncate"
          style={{
            fontSize: "10px",
            letterSpacing: "0.08em",
            color: "var(--text-secondary)",
          }}
        >
          FIFA WORLD CUP 2026
        </span>
      </div>

      {/* Center: Title (Takes up 1/3 of the space, text centered) */}
      <div
        className="flex flex-1 justify-center font-inter font-semibold truncate"
        style={{
          fontSize: "18px",
          color: "var(--text-primary)",
        }}
      >
        <span className="hidden sm:inline">Prediction Tracker</span>
        <span className="sm:hidden text-[16px]">Tracker</span>
      </div>

      {/* Right: Player Avatars (Takes up 1/3 of the space, right aligned) */}
      <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2">
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
      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-inter font-bold flex-shrink-0"
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