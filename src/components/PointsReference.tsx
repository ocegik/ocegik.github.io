import { POINTS_SYSTEM } from "@/data/predictions";

const ROUNDS_ORDER = [
  "Round of 32",
  "Round of 16",
  "Quarter-Finals",
  "Semi-Finals",
  "3rd Place Play-Off",
  "Final",
];

export function PointsReference() {
  return (
    <div
      className="rounded-xl mt-4"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--card-radius)",
        padding: "var(--space-md)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-inter font-medium uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.08em",
            color: "var(--gold)",
          }}
        >
          Points System
        </span>
        <span
          className="font-inter font-medium"
          style={{
            fontSize: "10px",
            letterSpacing: "0.08em",
            color: "var(--text-muted)",
          }}
        >
          Total: 100 pts
        </span>
      </div>

      <div>
        {ROUNDS_ORDER.map((round, index) => (
          <div
            key={round}
            className="flex items-center justify-between py-1.5"
            style={{
              borderBottom:
                index < ROUNDS_ORDER.length - 1
                  ? "1px solid var(--border-subtle)"
                  : "none",
            }}
          >
            <span
              className="font-inter"
              style={{
                fontSize: "12px",
                color: "var(--text-secondary)",
              }}
            >
              {round === "3rd Place Play-Off" ? "3rd Place" : round}
            </span>
            <span
              className="font-inter font-bold"
              style={{
                fontSize: "12px",
                color: "var(--gold)",
              }}
            >
              {POINTS_SYSTEM[round]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
