import { useState, useEffect } from "react";
import type { ResultsData, ResultEntry } from "@/data/predictions";

export function useResults() {
  const [results, setResults] = useState<ResultEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await fetch("/results.json?t=" + Date.now());
        if (!response.ok) {
          throw new Error("Failed to load results");
        }
        const data: ResultsData = await response.json();
        setResults(data.completedMatches || []);
        setError(null);
      } catch (err) {
        setError("Results data unavailable — showing predictions only");
        setResults([]);
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
    // Refresh every 30 seconds
    const interval = setInterval(fetchResults, 30000);
    return () => clearInterval(interval);
  }, []);

  const getWinner = (matchId: string): string | null => {
    const entry = results.find((r) => r.id === matchId);
    return entry?.winner || null;
  };

  return { results, loading, error, getWinner };
}
