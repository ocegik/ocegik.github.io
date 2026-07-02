import { useState, useMemo } from "react";
import type { Round } from "@/data/predictions";
import type { MatchScore } from "@/hooks/useScoring";
import { SectionDivider } from "@/components/SectionDivider";
import { MatchCard } from "@/components/MatchCard";
import { isOlderThanYesterday } from "@/lib/matchDate";

interface RoundSectionProps {
  round: Round;
  pointsPerMatch: number;
  isFinal: boolean;
  getWinner: (matchId: string) => string | null;
  getMatchScores: (
    matchId: string,
    predictions: Record<string, string>,
    pointsPerMatch: number
  ) => MatchScore[];
  staggerStart: number;
}

export function RoundSection({
  round,
  pointsPerMatch,
  isFinal,
  getWinner,
  getMatchScores,
  staggerStart,
}: RoundSectionProps) {
  const [matchOverrides, setMatchOverrides] = useState<Record<string, boolean>>({});
  const [roundExpanded, setRoundExpanded] = useState(false);

  const totalCount = round.matches.length;
  const completedCount = round.matches.filter((m) => !!getWinner(m.id)).length;

  const allOld = useMemo(
    () =>
      totalCount > 0 &&
      round.matches.every((m) => !!getWinner(m.id) && isOlderThanYesterday(m.date)),
    [round.matches, totalCount, getWinner]
  );

  const roundCollapsed = allOld && !roundExpanded;

  const title = `${
    round.name === "3rd Place Play-Off" ? "3RD PLACE PLAY-OFF" : round.name.toUpperCase()
  } \u00B7 ${pointsPerMatch} PT${pointsPerMatch > 1 ? "S" : ""} EACH`;

  let action: React.ReactNode = null;
  if (allOld) {
    action = (
      <button
        onClick={() => setRoundExpanded((v) => !v)}
        className="font-inter font-medium normal-case"
        style={{
          fontSize: "10px",
          color: "var(--gold)",
          letterSpacing: "0.02em",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        {roundExpanded ? "hide" : `${completedCount}/${totalCount} done \u00B7 show`}
      </button>
    );
  } else if (completedCount > 0) {
    action = (
      <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>
        {completedCount}/{totalCount} done
      </span>
    );
  }

  return (
    <div>
      <SectionDivider title={title} isGold={isFinal} action={action} />

      {!roundCollapsed &&
        round.matches.map((match, idx) => {
          const matchScores = getMatchScores(match.id, match.predictions, pointsPerMatch);
          const hasResult = !!getWinner(match.id);
          const defaultCollapsed = hasResult && isOlderThanYesterday(match.date);
          const collapsed = matchOverrides[match.id] ?? defaultCollapsed;
          const delay = (staggerStart + idx) * 80;

          return (
            <MatchCard
              key={match.id}
              match={match}
              roundName={round.name}
              matchIndex={idx}
              totalMatches={round.matches.length}
              pointsPerMatch={pointsPerMatch}
              scores={matchScores}
              staggerDelay={delay}
              collapsed={collapsed}
              onToggleCollapse={() =>
                setMatchOverrides((prev) => ({ ...prev, [match.id]: !collapsed }))
              }
            />
          );
        })}
    </div>
  );
}
