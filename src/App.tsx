import { useResults } from "@/hooks/useResults";
import { useScoring } from "@/hooks/useScoring";
import { ROUNDS, POINTS_SYSTEM } from "@/data/predictions";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Leaderboard } from "@/components/Leaderboard";
import { PointsReference } from "@/components/PointsReference";
import { SectionDivider } from "@/components/SectionDivider";
import { MatchCard } from "@/components/MatchCard";
import { Legend } from "@/components/Legend";
import { ErrorBanner } from "@/components/ErrorBanner";

function App() {
  const { error, getWinner } = useResults();
  const { scores, getMatchScores } = useScoring(getWinner);

  let globalMatchIndex = 0;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Error Banner */}
      {error && <ErrorBanner message={error} />}

      {/* Sticky Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Main Content */}
      <main
        className="mx-auto px-6 pb-16"
        style={{ maxWidth: "var(--max-width)" }}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Match Cards */}
          <div className="flex-1 min-w-0">
            {ROUNDS.map((round) => {
              const pointsPerMatch = POINTS_SYSTEM[round.name] || 1;
              const isFinal = round.name === "Final";

              return (
                <div key={round.name}>
                  <SectionDivider
                    title={`${round.name === "3rd Place Play-Off" ? "3RD PLACE PLAY-OFF" : round.name.toUpperCase()} \u00B7 ${pointsPerMatch} PT${pointsPerMatch > 1 ? "S" : ""} EACH`}
                    isGold={isFinal}
                  />

                  {round.matches.map((match, idx) => {
                    const matchScores = getMatchScores(
                      match.id,
                      match.predictions,
                      pointsPerMatch
                    );
                    const delay = globalMatchIndex * 80;
                    globalMatchIndex++;

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
                      />
                    );
                  })}
                </div>
              );
            })}

            {/* Legend */}
            <Legend />

            {/* Footer Note */}
            <div className="text-center mt-8">
              <div
                className="mx-auto mb-2"
                style={{
                  width: "40px",
                  height: "1px",
                  backgroundColor: "var(--border-subtle)",
                }}
              />
              <p
                className="font-inter"
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                }}
              >
                Scores calculated dynamically from results.json
              </p>
            </div>
          </div>

          {/* Right: Sidebar (Leaderboard + Points Reference) */}
          <div className="lg:w-[340px] flex-shrink-0">
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
