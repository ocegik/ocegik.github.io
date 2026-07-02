const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

/** Parses a "29 Jun" style date string into a Date (year defaults to current year). */
export function parseMatchDate(dateStr: string, year?: number): Date {
  const [dayStr, monStr] = dateStr.trim().split(" ");
  const day = parseInt(dayStr, 10);
  const month = MONTHS[monStr] ?? 0;
  return new Date(year ?? new Date().getFullYear(), month, day);
}

function stripTime(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/** True if the match date is before yesterday (i.e. 2+ days in the past). */
export function isOlderThanYesterday(dateStr: string): boolean {
  const matchDate = stripTime(parseMatchDate(dateStr));
  const today = stripTime(new Date());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  return matchDate.getTime() < yesterday.getTime();
}
