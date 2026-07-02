import { PLAYER_COLORS } from "@/data/predictions";
import type { Player, Match } from "@/data/predictions";
import type { MatchScore } from "@/hooks/useScoring";

interface CollapsedMatchRowProps {
  match: Match;
  scores: MatchScore[];
  winner: string | null;
  onExpand: () => void;
}

export function CollapsedMatchRow({ match, scores, winner, onExpand }: CollapsedMatchRowProps) {
  return (
    <button
      onClick={onExpand}
      className="w-full flex items-center justify-between text-left card-hover"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--card-radius-sm)",
        padding: "10px 14px",
        marginBottom: "8px",
        cursor: "pointer",
      }}
    >
      <div className="flex items-center gap-3 min-w-0">
        <span
          className="font-inter flex-shrink-0"
          style={{ fontSize: "11px", color: "var(--text-muted)", width: "48px" }}
        >
          {match.date}
        </span>

        <span
          className="font-inter font-semibold truncate"
          style={{
            fontSize: "13px",
            color: winner === match.teamAShort ? "var(--gold)" : "var(--text-secondary)",
          }}
        >
          {match.teamAShort}
        </span>
        <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>vs</span>
        <span
          className="font-inter font-semibold truncate"
          style={{
            fontSize: "13px",
            color: winner === match.teamBShort ? "var(--gold)" : "var(--text-secondary)",
          }}
        >
          {match.teamBShort}
        </span>

        {winner && (
          <span
            className="font-inter font-bold uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.05em", color: "var(--gold)" }}
          >
            {winner} WON
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          {scores.map((score) => (
            <span
              key={score.player}
              title={`${score.player}: ${score.predicted} (${score.status})`}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor:
                  score.status === "correct"
                    ? "var(--correct)"
                    : score.status === "incorrect"
                      ? "var(--incorrect)"
                      : "var(--text-muted)",
                border: `1px solid ${PLAYER_COLORS[score.player as Player].primary}`,
              }}
            />
          ))}
        </div>
        <ChevronIcon />
      </div>
    </button>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: "var(--text-muted)" }}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
