export interface PlayerColors {
  primary: string;
  bg: string;
  border: string;
}

export interface MatchPrediction {
  [player: string]: string;
}

export interface Match {
  id: string;
  date: string;
  time: string;
  teamA: string;
  teamB: string;
  teamAShort: string;
  teamBShort: string;
  predictions: MatchPrediction;
}

export interface Round {
  name: string;
  shortName: string;
  pointsPerMatch: number;
  matches: Match[];
}

export interface ResultEntry {
  id: string;
  winner: string;
}

export interface ResultsData {
  completedMatches: ResultEntry[];
}

export const PLAYERS = ["Mohit", "Pandu", "Tarun"] as const;
export type Player = (typeof PLAYERS)[number];

export const PLAYER_COLORS: Record<Player, PlayerColors> = {
  Mohit: {
    primary: "#C8963E",
    bg: "rgba(200,150,62,0.15)",
    border: "rgba(200,150,62,0.3)",
  },
  Pandu: {
    primary: "#64B4DC",
    bg: "rgba(100,180,220,0.15)",
    border: "rgba(100,180,220,0.3)",
  },
  Tarun: {
    primary: "#B478C8",
    bg: "rgba(180,120,200,0.15)",
    border: "rgba(180,120,200,0.3)",
  },
};

export const POINTS_SYSTEM: Record<string, number> = {
  "Round of 32": 1,
  "Round of 16": 2,
  "Quarter-Finals": 4,
  "Semi-Finals": 8,
  "3rd Place Play-Off": 16,
  Final: 20,
};

// All times below are IST (India Standard Time), converted from official ET kickoff times.
// Fixed to match the confirmed FIFA World Cup 2026 knockout schedule.

// All times below are IST (India Standard Time), converted from official ET kickoff times.
// Fixed to match the confirmed FIFA World Cup 2026 knockout schedule.

export const ROUNDS: Round[] = [
  {
    name: "Round of 32",
    shortName: "R32",
    pointsPerMatch: 1,
    matches: [
      {
        id: "r32-1",
        date: "29 Jun",
        time: "12:30 AM",
        teamA: "South Africa",
        teamB: "Canada",
        teamAShort: "RSA",
        teamBShort: "CAN",
        predictions: { Mohit: "CAN", Pandu: "CAN", Tarun: "CAN" },
      },
      {
        id: "r32-2",
        date: "29 Jun",
        time: "10:30 PM",
        teamA: "Brazil",
        teamB: "Japan",
        teamAShort: "BRA",
        teamBShort: "JPN",
        predictions: { Mohit: "BRA", Pandu: "BRA", Tarun: "BRA" },
      },
      {
        id: "r32-3",
        date: "30 Jun",
        time: "02:00 AM",
        teamA: "Germany",
        teamB: "Paraguay",
        teamAShort: "GER",
        teamBShort: "PAR",
        predictions: { Mohit: "GER", Pandu: "GER", Tarun: "GER" },
      },
      {
        id: "r32-4",
        date: "30 Jun",
        time: "06:30 AM",
        teamA: "Netherlands",
        teamB: "Morocco",
        teamAShort: "NED",
        teamBShort: "MAR",
        predictions: { Mohit: "NED", Pandu: "MAR", Tarun: "NED" },
      },
      {
        id: "r32-5",
        date: "30 Jun",
        time: "10:30 PM",
        teamA: "Ivory Coast",
        teamB: "Norway",
        teamAShort: "CIV",
        teamBShort: "NOR",
        predictions: { Mohit: "NOR", Pandu: "NOR", Tarun: "NOR" },
      },
      {
        id: "r32-6",
        date: "1 Jul",
        time: "02:30 AM",
        teamA: "France",
        teamB: "Sweden",
        teamAShort: "FRA",
        teamBShort: "SWE",
        predictions: { Mohit: "FRA", Pandu: "FRA", Tarun: "FRA" },
      },
      {
        id: "r32-7",
        date: "1 Jul",
        time: "06:30 AM",
        teamA: "Mexico",
        teamB: "Ecuador",
        teamAShort: "MEX",
        teamBShort: "ECU",
        predictions: { Mohit: "MEX", Pandu: "MEX", Tarun: "MEX" },
      },
      {
        id: "r32-8",
        date: "1 Jul",
        time: "09:30 PM",
        teamA: "England",
        teamB: "DR Congo",
        teamAShort: "ENG",
        teamBShort: "COD",
        predictions: { Mohit: "ENG", Pandu: "ENG", Tarun: "ENG" },
      },
      {
        id: "r32-9",
        date: "2 Jul",
        time: "01:30 AM",
        teamA: "Belgium",
        teamB: "Senegal",
        teamAShort: "BEL",
        teamBShort: "SEN",
        predictions: { Mohit: "BEL", Pandu: "BEL", Tarun: "BEL" },
      },
      {
        id: "r32-10",
        date: "2 Jul",
        time: "05:30 AM",
        teamA: "USA",
        teamB: "Bosnia & Herzegovina",
        teamAShort: "USA",
        teamBShort: "BIH",
        predictions: { Mohit: "USA", Pandu: "USA", Tarun: "USA" },
      },
      {
        id: "r32-11",
        date: "3 Jul",
        time: "12:30 AM",
        teamA: "Spain",
        teamB: "Austria",
        teamAShort: "ESP",
        teamBShort: "AUT",
        predictions: { Mohit: "ESP", Pandu: "ESP", Tarun: "ESP" },
      },
      {
        id: "r32-12",
        date: "3 Jul",
        time: "04:30 AM",
        teamA: "Portugal",
        teamB: "Croatia",
        teamAShort: "POR",
        teamBShort: "CRO",
        predictions: { Mohit: "POR", Pandu: "POR", Tarun: "POR" },
      },
      {
        id: "r32-13",
        date: "3 Jul",
        time: "08:30 AM",
        teamA: "Switzerland",
        teamB: "Algeria",
        teamAShort: "SUI",
        teamBShort: "ALG",
        predictions: { Mohit: "ALG", Pandu: "SUI", Tarun: "SUI" },
      },
      {
        id: "r32-14",
        date: "3 Jul",
        time: "11:30 PM",
        teamA: "Australia",
        teamB: "Egypt",
        teamAShort: "AUS",
        teamBShort: "EGY",
        predictions: { Mohit: "AUS", Pandu: "AUS", Tarun: "EGY" },
      },
      {
        id: "r32-15",
        date: "4 Jul",
        time: "03:30 AM",
        teamA: "Argentina",
        teamB: "Cape Verde",
        teamAShort: "ARG",
        teamBShort: "CPV",
        predictions: { Mohit: "ARG", Pandu: "ARG", Tarun: "ARG" },
      },
      {
        id: "r32-16",
        date: "4 Jul",
        time: "07:00 AM",
        teamA: "Colombia",
        teamB: "Ghana",
        teamAShort: "COL",
        teamBShort: "GHA",
        predictions: { Mohit: "COL", Pandu: "COL", Tarun: "COL" },
      },
    ],
  },
  {
    name: "Round of 16",
    shortName: "R16",
    pointsPerMatch: 2,
    matches: [
      {
        id: "r16-1",
        date: "5 Jul",
        time: "02:30 AM",
        teamA: "Paraguay",
        teamB: "France",
        teamAShort: "PAR",
        teamBShort: "FRA",
        predictions: { Mohit: "FRA", Pandu: "FRA", Tarun: "FRA" },
      },
      {
        id: "r16-2",
        date: "4 Jul",
        time: "10:30 PM",
        teamA: "Canada",
        teamB: "Morocco",
        teamAShort: "CAN",
        teamBShort: "MAR",
        predictions: { Mohit: "CAN", Pandu: "MAR", Tarun: "NED" },
      },
      {
        id: "r16-3",
        date: "7 Jul",
        time: "12:30 AM",
        teamA: "Winner R32-M12",
        teamB: "Winner R32-M11",
        teamAShort: "?",
        teamBShort: "?",
        predictions: { Mohit: "POR", Pandu: "POR", Tarun: "ESP" },
      },
      {
        id: "r16-4",
        date: "7 Jul",
        time: "05:30 AM",
        teamA: "USA",
        teamB: "Belgium",
        teamAShort: "USA",
        teamBShort: "BEL",
        predictions: { Mohit: "USA", Pandu: "BEL", Tarun: "USA" },
      },
      {
        id: "r16-5",
        date: "6 Jul",
        time: "01:30 AM",
        teamA: "Brazil",
        teamB: "Norway",
        teamAShort: "BRA",
        teamBShort: "NOR",
        predictions: { Mohit: "BRA", Pandu: "BRA", Tarun: "NOR" },
      },
      {
        id: "r16-6",
        date: "6 Jul",
        time: "05:30 AM",
        teamA: "Mexico",
        teamB: "England",
        teamAShort: "MEX",
        teamBShort: "ENG",
        predictions: { Mohit: "ENG", Pandu: "ENG", Tarun: "ENG" },
      },
      {
        id: "r16-7",
        date: "7 Jul",
        time: "09:30 PM",
        teamA: "Winner R32-M15",
        teamB: "Winner R32-M14",
        teamAShort: "?",
        teamBShort: "?",
        predictions: { Mohit: "ARG", Pandu: "ARG", Tarun: "ARG" },
      },
      {
        id: "r16-8",
        date: "8 Jul",
        time: "01:30 AM",
        teamA: "Winner R32-M13",
        teamB: "Winner R32-M16",
        teamAShort: "?",
        teamBShort: "?",
        predictions: { Mohit: "COL", Pandu: "COL", Tarun: "COL" },
      },
    ],
  },
  {
    name: "Quarter-Finals",
    shortName: "QF",
    pointsPerMatch: 4,
    matches: [
      {
        id: "qf-1",
        date: "10 Jul",
        time: "01:30 AM",
        teamA: "Winner R16-M1",
        teamB: "Winner R16-M2",
        teamAShort: "?",
        teamBShort: "?",
        predictions: { Mohit: "FRA", Pandu: "FRA", Tarun: "FRA" },
      },
      {
        id: "qf-2",
        date: "11 Jul",
        time: "12:30 AM",
        teamA: "Winner R16-M3",
        teamB: "Winner R16-M4",
        teamAShort: "?",
        teamBShort: "?",
        predictions: { Mohit: "POR", Pandu: "POR", Tarun: "ESP" },
      },
      {
        id: "qf-3",
        date: "12 Jul",
        time: "02:30 AM",
        teamA: "Winner R16-M5",
        teamB: "Winner R16-M6",
        teamAShort: "?",
        teamBShort: "?",
        predictions: { Mohit: "BRA", Pandu: "BRA", Tarun: "ENG" },
      },
      {
        id: "qf-4",
        date: "12 Jul",
        time: "06:30 AM",
        teamA: "Winner R16-M7",
        teamB: "Winner R16-M8",
        teamAShort: "?",
        teamBShort: "?",
        predictions: { Mohit: "ARG", Pandu: "ARG", Tarun: "ARG" },
      },
    ],
  },
  {
    name: "Semi-Finals",
    shortName: "SF",
    pointsPerMatch: 8,
    matches: [
      {
        id: "sf-1",
        date: "15 Jul",
        time: "12:30 AM",
        teamA: "Winner QF-M1",
        teamB: "Winner QF-M2",
        teamAShort: "?",
        teamBShort: "?",
        predictions: { Mohit: "FRA", Pandu: "POR", Tarun: "FRA" },
      },
      {
        id: "sf-2",
        date: "16 Jul",
        time: "12:30 AM",
        teamA: "Winner QF-M3",
        teamB: "Winner QF-M4",
        teamAShort: "?",
        teamBShort: "?",
        predictions: { Mohit: "ARG", Pandu: "ARG", Tarun: "ARG" },
      },
    ],
  },
  {
    name: "3rd Place Play-Off",
    shortName: "3rd",
    pointsPerMatch: 16,
    matches: [
      {
        id: "3rd-1",
        date: "19 Jul",
        time: "02:30 AM",
        teamA: "Loser SF-M1",
        teamB: "Loser SF-M2",
        teamAShort: "?",
        teamBShort: "?",
        predictions: { Mohit: "BRA", Pandu: "FRA", Tarun: "ESP" },
      },
    ],
  },
  {
    name: "Final",
    shortName: "FIN",
    pointsPerMatch: 20,
    matches: [
      {
        id: "final-1",
        date: "20 Jul",
        time: "12:30 AM",
        teamA: "Winner SF-M1",
        teamB: "Winner SF-M2",
        teamAShort: "?",
        teamBShort: "?",
        predictions: { Mohit: "ARG", Pandu: "POR", Tarun: "ARG" },
      },
    ],
  },
];

// Champion predictions for each player
export const CHAMPION_PREDICTIONS: Record<Player, { finalists: [string, string]; champion: string }> = {
  Mohit: { finalists: ["FRA", "ARG"], champion: "ARG" },
  Pandu: { finalists: ["POR", "ARG"], champion: "POR" },
  Tarun: { finalists: ["FRA", "ARG"], champion: "ARG" },
};
