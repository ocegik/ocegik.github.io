import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";
import type { PlayerScore } from "@/hooks/useScoring";
import { Trophy } from "@/components/icons";

interface LeaderboardProps {
  scores: PlayerScore[];
}

export function Leaderboard({ scores }: LeaderboardProps) {
  const maxScore = Math.max(...scores.map((s) => s.score), 1);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D1526 0%, #111C33 100%)",
        borderTop: "2px solid var(--border-gold)",
        borderLeft: "1px solid var(--border-subtle)",
        borderRight: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-gold)",
        padding: "var(--space-lg)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <Trophy className="w-6 h-6 flex-shrink-0" color="var(--gold)" />
        <h2
          className="font-playfair font-semibold"
          style={{
            fontSize: "22px",
            color: "var(--gold)",
          }}
        >
          Leaderboard
        </h2>
      </div>
      <p
        className="font-inter mb-5"
        style={{
          fontSize: "12px",
          color: "var(--text-secondary)",
        }}
      >
        Live Standings &middot; Max: 100 pts
      </p>

      {/* Player Rows */}
      <div className="space-y-0">
        {scores.map((player, index) => (
          <PlayerRow
            key={player.name}
            player={player}
            rank={index + 1}
            maxScore={maxScore}
            delay={index * 150}
          />
        ))}
      </div>

      {/* Score Distribution Bar */}
      <div className="mt-5">
        <div
          className="flex h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: "var(--bg-elevated)" }}
        >
          {scores.map((s) => (
            <div
              key={s.name}
              style={{
                width: `${(s.score / 100) * 100}%`,
                backgroundColor: s.color,
                transition: "width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {scores.map((s) => (
            <div key={s.name} className="flex items-center gap-1">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <span
                className="font-inter font-medium uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  color: "var(--text-secondary)",
                }}
              >
                {s.name.charAt(0)} {s.score}pts
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p
        className="font-inter text-right mt-3"
        style={{
          fontSize: "11px",
          color: "var(--text-muted)",
        }}
      >
        of 100 pts
      </p>
    </div>
  );
}

function PlayerRow({
  player,
  rank,
  maxScore,
  delay,
}: {
  player: PlayerScore;
  rank: number;
  maxScore: number;
  delay: number;
}) {
  const animatedScore = useAnimatedNumber(player.score, 1200);
  const percentage = maxScore > 0 ? (player.score / 100) * 100 : 0;

  const rankStyles = [
    {
      bg: "rgba(200,150,62,0.15)",
      border: "var(--border-gold)",
      color: "var(--gold)",
    },
    {
      bg: "rgba(100,180,220,0.1)",
      border: "rgba(100,180,220,0.3)",
      color: "#64B4DC",
    },
    {
      bg: "rgba(180,120,200,0.1)",
      border: "rgba(180,120,200,0.3)",
      color: "#B478C8",
    },
  ];

  const style = rankStyles[rank - 1] || rankStyles[2];

  return (
    <div
      className="flex items-center py-3 transition-colors duration-150 hover:bg-[rgba(200,150,62,0.03)]"
      style={{
        borderBottom:
          rank < 3 ? "1px solid var(--border-subtle)" : "none",
      }}
    >
      {/* Rank Circle */}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center font-playfair font-semibold flex-shrink-0"
        style={{
          fontSize: "16px",
          backgroundColor: style.bg,
          border: `1px solid ${style.border}`,
          color: style.color,
        }}
      >
        {rank}
      </div>

      {/* Player Name */}
      <span
        className="font-inter font-bold ml-3 flex-shrink-0"
        style={{
          fontSize: "16px",
          letterSpacing: "-0.01em",
          color: "var(--text-primary)",
          width: "56px",
        }}
      >
        {player.name}
      </span>

      {/* Progress Bar */}
      <div className="flex-1 mx-3">
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: "var(--bg-elevated)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${percentage}%`,
              backgroundColor: player.color,
              boxShadow: `0 0 8px ${player.color}4D`,
              transition: `width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
            }}
          />
        </div>
      </div>

      {/* Score */}
      <span
        className="font-inter font-bold tabular-nums"
        style={{
          fontSize: "24px",
          letterSpacing: "-0.01em",
          color: "var(--text-primary)",
          minWidth: "36px",
          textAlign: "right",
        }}
      >
        {animatedScore}
      </span>
      <span
        className="font-inter ml-1"
        style={{
          fontSize: "12px",
          color: "var(--text-muted)",
        }}
      >
        pts
      </span>
    </div>
  );
}
