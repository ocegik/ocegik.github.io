import { useMemo } from "react";
import {
  ROUNDS,
  PLAYERS,
  POINTS_SYSTEM,
  PLAYER_COLORS,
} from "@/data/predictions";
import type { Player } from "@/data/predictions";

export type PredictionStatus = "correct" | "incorrect" | "pending";

export interface PlayerScore {
  name: Player;
  score: number;
  color: string;
  bgColor: string;
  maxPossible: number;
}

export interface MatchScore {
  player: Player;
  predicted: string;
  status: PredictionStatus;
  points: number;
}

export function useScoring(getWinner: (matchId: string) => string | null) {
  const scores = useMemo(() => {
    const playerScores: Record<Player, number> = {
      Mohit: 0,
      Pandu: 0,
      Tarun: 0,
    };

    for (const round of ROUNDS) {
      const pointsPerMatch = POINTS_SYSTEM[round.name] || 1;
      for (const match of round.matches) {
        const winner = getWinner(match.id);
        for (const player of PLAYERS) {
          const prediction = match.predictions[player];
          if (winner) {
            if (prediction === winner) {
              playerScores[player] += pointsPerMatch;
            }
          }
        }
      }
    }

    const sorted: PlayerScore[] = PLAYERS.map((p) => ({
      name: p,
      score: playerScores[p],
      color: PLAYER_COLORS[p].primary,
      bgColor: PLAYER_COLORS[p].bg,
      maxPossible: 100,
    })).sort((a, b) => b.score - a.score);

    return sorted;
  }, [getWinner]);

  const getMatchScores = (matchId: string, predictions: Record<string, string>, pointsPerMatch: number): MatchScore[] => {
    const winner = getWinner(matchId);
    return PLAYERS.map((player) => {
      const predicted = predictions[player] || "";
      let status: PredictionStatus = "pending";
      let points = 0;

      if (winner) {
        if (predicted === winner) {
          status = "correct";
          points = pointsPerMatch;
        } else {
          status = "incorrect";
          points = 0;
        }
      }

      return { player, predicted, status, points };
    });
  };

  return { scores, getMatchScores };
}
