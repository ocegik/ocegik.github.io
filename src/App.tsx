import { useResults } from "@/hooks/useResults";
import { useScoring } from "@/hooks/useScoring";
import { ROUNDS, POINTS_SYSTEM } from "@/data/predictions";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Leaderboard } from "@/components/Leaderboard";
import { PointsReference } from "@/components/PointsReference";
import { RoundSection } from "@/components/RoundSection";
import { Legend } from "@/components/Legend";
import { ErrorBanner } from "@/components/ErrorBanner";

function App() {
  const { error, getWinner } = useResults();
  const { scores, getMatchScores } = useScoring(getWinner);
  let staggerOffset = 0;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {error && <ErrorBanner message={error} />}
      <Header />
      <Hero />
      <main className="mx-auto px-4 sm:px-6 pb-16" style={{ maxWidth: "var(--max-width)" }}>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0 order-2 lg:order-1">
            {ROUNDS.map((round) => {
              const pointsPerMatch = POINTS_SYSTEM[round.name] || 1;
              const isFinal = round.name === "Final";
              const start = staggerOffset;
              staggerOffset += round.matches.length;
              return (
                <RoundSection
                  key={round.name}
                  round={round}
                  pointsPerMatch={pointsPerMatch}
                  isFinal={isFinal}
                  getWinner={getWinner}
                  getMatchScores={getMatchScores}
                  staggerStart={start}
                />
              );
            })}
            <Legend />
            <div className="text-center mt-8">
              <div
                className="mx-auto mb-2"
                style={{ width: "40px", height: "1px", backgroundColor: "var(--border-subtle)" }}
              />
              <p className="font-inter" style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                Scores calculated dynamically from results.json
              </p>
            </div>
          </div>
          <div className="lg:w-[340px] flex-shrink-0 order-1 lg:order-2">
            <div className="lg:sticky lg:top-20">
              <Leaderboard scores={scores} />
              <PointsReference />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
