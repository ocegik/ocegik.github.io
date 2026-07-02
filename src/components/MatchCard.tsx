import { PLAYER_COLORS } from "@/data/predictions";
import type { Player, Match } from "@/data/predictions";
import type { MatchScore } from "@/hooks/useScoring";
import { CheckCircle, XCircle, Clock } from "@/components/icons";
import { CollapsedMatchRow } from "@/components/CollapsedMatchRow";

interface MatchCardProps {
  match: Match;
  roundName: string;
  matchIndex: number;
  totalMatches: number;
  pointsPerMatch: number;
  scores: MatchScore[];
  staggerDelay: number;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function MatchCard({
  match,
  roundName,
  matchIndex,
  totalMatches,
  pointsPerMatch,
  scores,
  staggerDelay,
  collapsed,
  onToggleCollapse,
}: MatchCardProps) {
  const winner = scores.find((s) => s.status === "correct")?.predicted || null;
  const hasResult = scores.some((s) => s.status !== "pending");

  if (collapsed) {
    return <CollapsedMatchRow match={match} scores={scores} onExpand={onToggleCollapse} />;
  }

  return (
    <div
      className="animate-slide-up card-hover"
      style={{
        backgroundColor: "var(--bg-card)",
        border: `1px solid ${roundName === "Final" ? "var(--border-gold-dim)" : "var(--border-subtle)"}`,
        borderRadius: "var(--card-radius)",
        padding: "var(--space-md)",
        marginBottom: "var(--space-md)",
        boxShadow:
          roundName === "Final" ? "var(--shadow-gold)" : "var(--shadow-card)",
        animationDelay: `${staggerDelay}ms`,
      }}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span
            className="font-inter font-medium uppercase px-2.5 py-1 rounded-full"
            style={{
              fontSize: "10px",
              letterSpacing: "0.08em",
              backgroundColor: "var(--bg-elevated)",
              color: "var(--text-secondary)",
            }}
          >
            {roundName === "3rd Place Play-Off" ? "3RD PLACE" : roundName === "Round of 32" ? "R32" : roundName === "Round of 16" ? "R16" : roundName === "Quarter-Finals" ? "QF" : roundName === "Semi-Finals" ? "SF" : "FIN"}
          </span>
          <span
            className="font-inter"
            style={{
              fontSize: "10px",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
            }}
          >
            {matchIndex + 1}/{totalMatches}
          </span>
        </div>

        <span
          className="font-inter"
          style={{
            fontSize: "12px",
            letterSpacing: "0.03em",
            color: "var(--text-secondary)",
          }}
        >
          {match.date} &middot; {match.time} IST
        </span>

        <div className="flex items-center gap-2">
          <StatusBadge hasResult={hasResult} />
          {hasResult && (
            <button
              onClick={onToggleCollapse}
              aria-label="Collapse match"
              className="flex items-center justify-center rounded-full"
              style={{
                width: "22px",
                height: "22px",
                backgroundColor: "var(--bg-elevated)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M18 15l-6-6-6 6" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Match Fixture */}
      <div
        className="flex items-center justify-center py-4 mb-3"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <TeamName
          name={match.teamA}
          shortName={match.teamAShort}
          isWinner={winner === match.teamAShort}
          isLoser={hasResult && winner !== match.teamAShort}
        />
        <span
          className="font-inter font-medium uppercase mx-3"
          style={{
            fontSize: "10px",
            letterSpacing: "0.08em",
            color: "var(--text-muted)",
          }}
        >
          VS
        </span>
        <TeamName
          name={match.teamB}
          shortName={match.teamBShort}
          isWinner={winner === match.teamBShort}
          isLoser={hasResult && winner !== match.teamBShort}
        />
      </div>

      {/* Predictions */}
      <div className="space-y-1.5">
        {scores.map((score) => (
          <PredictionRow
            key={score.player}
            score={score}
            pointsPerMatch={pointsPerMatch}
          />
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ hasResult }: { hasResult: boolean }) {
  if (hasResult) {
    return (
      <span
        className="flex items-center gap-1.5 font-inter font-semibold uppercase px-2.5 py-1 rounded-full"
        style={{
          fontSize: "10px",
          letterSpacing: "0.04em",
          backgroundColor: "var(--correct-bg)",
          color: "var(--correct)",
        }}
      >
        <CheckCircle className="w-3 h-3" color="var(--correct)" />
        COMPLETED
      </span>
    );
  }

  return (
    <span
      className="flex items-center gap-1.5 font-inter font-semibold uppercase px-2.5 py-1 rounded-full"
      style={{
        fontSize: "10px",
        letterSpacing: "0.04em",
        backgroundColor: "var(--pending-bg)",
        color: "var(--pending)",
        border: "1px solid rgba(200,150,62,0.2)",
      }}
    >
      <span
        className="w-2 h-2 rounded-full animate-pulse-gold"
        style={{ backgroundColor: "var(--pending)" }}
      />
      PENDING
    </span>
  );
}

function TeamName({
  name,
  shortName,
  isWinner,
  isLoser,
}: {
  name: string;
  shortName: string;
  isWinner: boolean;
  isLoser: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="font-inter font-semibold"
        style={{
          fontSize: "15px",
          letterSpacing: "0.01em",
          lineHeight: 1.3,
          color: isWinner
            ? "var(--gold)"
            : isLoser
              ? "var(--text-muted)"
              : "var(--text-primary)",
          fontWeight: isWinner ? 700 : 600,
        }}
      >
        {name}
      </span>
      <span
        className="font-inter"
        style={{
          fontSize: "10px",
          letterSpacing: "0.05em",
          color: "var(--text-muted)",
        }}
      >
        {shortName}
      </span>
    </div>
  );
}

function PredictionRow({
  score,
  pointsPerMatch,
}: {
  score: MatchScore;
  pointsPerMatch: number;
}) {
  const colors = PLAYER_COLORS[score.player as Player];

  const rowBg =
    score.status === "correct"
      ? "var(--correct-bg)"
      : score.status === "incorrect"
        ? "var(--incorrect-bg)"
        : "var(--pending-bg)";

  const badgeBg =
    score.status === "correct"
      ? "var(--correct-bg)"
      : score.status === "incorrect"
        ? "var(--incorrect-bg)"
        : "var(--pending-bg)";

  const badgeColor =
    score.status === "correct"
      ? "var(--correct)"
      : score.status === "incorrect"
        ? "var(--incorrect)"
        : "var(--pending)";

  const badgeText =
    score.status === "correct"
      ? `+${score.points}`
      : score.status === "incorrect"
        ? "0"
        : `+${pointsPerMatch}`;

  const StatusIcon =
    score.status === "correct"
      ? CheckCircle
      : score.status === "incorrect"
        ? XCircle
        : Clock;

  const statusColor =
    score.status === "correct"
      ? "var(--correct)"
      : score.status === "incorrect"
        ? "var(--incorrect)"
        : "var(--text-muted)";

  return (
    <div
      className="flex items-center py-2 px-2 rounded-lg"
      style={{ backgroundColor: rowBg }}
    >
      <div className="flex items-center gap-2" style={{ width: "72px" }}>
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: colors.primary }}
        />
        <span
          className="font-inter font-semibold"
          style={{
            fontSize: "13px",
            letterSpacing: "0.02em",
            color: "var(--text-secondary)",
          }}
        >
          {score.player}
        </span>
      </div>

      <span
        className="font-inter font-semibold flex-1 mx-3"
        style={{
          fontSize: "14px",
          color:
            score.status === "correct"
              ? "var(--text-primary)"
              : score.status === "incorrect"
                ? "var(--text-muted)"
                : "var(--text-primary)",
        }}
      >
        {score.predicted}
      </span>

      <span
        className="font-inter font-bold uppercase px-2 py-0.5 rounded-full mr-2"
        style={{
          fontSize: "11px",
          letterSpacing: "0.05em",
          backgroundColor: badgeBg,
          color: badgeColor,
          opacity: score.status === "pending" ? 0.5 : 1,
        }}
      >
        {badgeText}
      </span>

      <StatusIcon className="w-4 h-4 flex-shrink-0" color={statusColor} />
    </div>
  );
}
